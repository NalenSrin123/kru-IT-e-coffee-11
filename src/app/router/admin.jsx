import DashboardOverview from "../pages/dashboard/DashboardOverview";
import Users from "../pages/dashboard/Users";
import ProtectedRoute from "../components/ProtectedRoute";

const adminRoutes = [
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardOverview />
      </ProtectedRoute>
    ),
  },
  {
    path: "/users",
    element: (
      <ProtectedRoute>
        <Users />
      </ProtectedRoute>
    ),
  },
];

export default adminRoutes;