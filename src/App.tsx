import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./components/Dashboard";
import SignupPage from "./components/SignupPage";
import Payroll from "./pages/Payroll";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payroll" element={<Payroll/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
