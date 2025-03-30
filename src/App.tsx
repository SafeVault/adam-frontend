import { TransactionUI } from "./components/transactions/TransactionUI";
import { mockTransactions } from "./data/mockTransactions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";
 featResponsive-Employee-UI
import Employee from "./pages/Employee";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./components/Dashboard";
import SignupPage from "./components/SignupPage";
import ResetPasswordPage from "./components/ResetPasswordPage";

import Dashboard from "./components/Dashboard";
import SignupPage from "./components/SignupPage";
import { TransactionHistory } from "./components/transactions/TransactionHistory";

 main
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
 featResponsive-Employee-UI
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/employee" element={<Employee />} />

        <Route path="/transactions" element={<TransactionHistory />} />
        {/* Add other routes as needed */}
        <Route path="/" element={<Dashboard />} /> {/* For demo purposes */}
 main
      </Routes>
    </Router>
  );
}

export default App;