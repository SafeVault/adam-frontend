import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
 featResponsive-Employee-UI
import Employee from "./pages/Employee";

function App() {
  return (
    <div>
      <Employee />
    </div>
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./components/Dashboard";
import SignupPage from "./components/SignupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
 main
  );
}

export default App;
