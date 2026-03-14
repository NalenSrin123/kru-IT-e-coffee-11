import React, { useEffect, useMemo, useState } from 'react'
import {initialUsers} from './User'

const USERS_PER_PAGE = 10;

const Useusers = () => {
    //   const [users, setUsers] = useState(initialUsers);
    const [users, setUsers] = useState(() => {
        const saved = localStorage.getItem("users");
        return saved ? JSON.parse(saved) : initialUsers;
    });
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("All Roles");
    const [statusFilter, setStatusFilter] = useState("All Status");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

  const filtered = useMemo(() => {
    return users.filter((u) => {
      const q = search.toLowerCase();
      const matchSearch = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.role.toLowerCase().includes(q);
      const matchRole = roleFilter === "All Roles" || u.role === roleFilter;
      const matchStatus = statusFilter === "All Status" || u.status === statusFilter;
      return matchSearch && matchRole && matchStatus;
    });
  }, [users, search, roleFilter, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / USERS_PER_PAGE));
  const paginated = filtered.slice((currentPage - 1) * USERS_PER_PAGE, currentPage * USERS_PER_PAGE);

  const handleSearch = (val) => { setSearch(val); setCurrentPage(1); };
  const handleRoleFilter = (val) => { setRoleFilter(val); setCurrentPage(1); };
  const handleStatusFilter = (val) => { setStatusFilter(val); setCurrentPage(1); };

  const addUser = (userData) => {
    const newUser = {
      ...userData,
      id: Date.now(),
      joined: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      initials: userData.name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2),
      color: `hsl(${Math.floor(Math.random() * 360)}, 65%, 45%)`,
    };
    setUsers((prev) => [newUser, ...prev]);
    setCurrentPage(1);
  };

  const editUser = (id, updatedData) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, ...updatedData, initials: updatedData.name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2) }
          : u
      )
    );
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const stats = {
    total: users.length,
    staff: users.filter((u) => u.role === "Staff").length,
    active: users.filter((u) => u.status === "Active").length,
    suspended: users.filter((u) => u.status === "Suspended").length,
  };
  return {
     paginated, filtered, stats,
     currentPage, totalPages, setCurrentPage,
     search, roleFilter, statusFilter,
     handleSearch, handleRoleFilter, handleStatusFilter,
     addUser, editUser, deleteUser,
  }
}

export default Useusers