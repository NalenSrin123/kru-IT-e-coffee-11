import { DashboardOverview } from "../../dashboard/features/dashboard-overview/DashboardMain";
import UserManagement from "../../dashboard/pages/users/UserManagement";
import CustomerLists from "../../dashboard/features/a2-tables-filters-ux/confirmation-modals/Customerlists";
import MenuManagement from "../../dashboard/features/a1-core-crud-forms/crud-menu-coffee";
import ProtectedRoute from "../../components/ProtectedRoute";
import DashboardLayout from "../../dashboard/layouts/DashboardLayout";
import Inventory from "../../dashboard/features/dashboard-overview/components/Inventory";
import AddUser from "../../dashboard/features/dashboard-overview/components/AddUser";

const adminRoutes = [
  {
    path: "/dashboard",
    element: (
      // <ProtectedRoute>
      //   <DashboardLayout/>
      // </ProtectedRoute>
      <DashboardLayout/>
    ),
    children: [
      { index: true, element: <DashboardOverview /> }, 
      { path: "users", element: <UserManagement /> }, 
      { path: "customers", element: <CustomerLists /> }, 
      { path: "menu", element: <MenuManagement /> }, 
      { path: "inventory", element: <Inventory/> }, 
      { path: "addUser" , element: <AddUser/>}
    ],
  },
];

export default adminRoutes;