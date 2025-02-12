import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import AdminAccounts from "./pages/dashboard/admin/accounts";
import AdminHome from "./pages/dashboard/admin/home";
import AdminSettings from "./pages/dashboard/admin/settings";
import ViewDeliveries from "./pages/dashboard/viewdeliveries";
import Employee from "./pages/employee";
import Login from "./pages/login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Top-Level Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee" element={<Employee />} />

        {/* Admin Sub-Pages */}
        <Route path="/dashboard/admin/accounts" element={<AdminAccounts />} />
        <Route path="/dashboard/admin/home" element={<AdminHome />} />
        <Route path="/dashboard/admin/settings" element={<AdminSettings />} />

        {/* Other Pages */}
        <Route path="/dashboard/viewdeliveries" element={<ViewDeliveries />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
