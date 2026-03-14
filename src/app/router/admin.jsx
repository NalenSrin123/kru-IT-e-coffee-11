import { DashboardOverview } from "../../dashboard/features/dashboard-overview/DashboardMain";
import UserManagement from "../../dashboard/pages/users/UserManagement";
import CustomerLists from "../../dashboard/features/a2-tables-filters-ux/confirmation-modals/Customerlists";
import MenuManagement from "../../dashboard/features/a1-core-crud-forms/crud-menu-coffee";
import ProtectedRoute from "../../components/ProtectedRoute";
import DashboardLayout from "../../dashboard/layouts/DashboardLayout";

// const adminRoutes = [
//   {
//     path: "/dashboard",
//     element: (
//       <ProtectedRoute>
//         <DashboardOverview />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/users",
//     element: (
//       <ProtectedRoute>
//         <UserManagement/>
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/customers",
//     element: (
//       <ProtectedRoute>
//         <CustomerLists/>
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/menu",
//     element: (
//       <ProtectedRoute>
//         <MenuManagement/>
//       </ProtectedRoute>
//     ),
//   },
// ];

const adminRoutes = [
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout/>
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardOverview /> }, 
      { path: "users", element: <UserManagement /> }, 
      { path: "customers", element: <CustomerLists /> }, 
      { path: "menu", element: <MenuManagement /> }, 
    ],
  },
];

export default adminRoutes;