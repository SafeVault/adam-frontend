import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";
import Dashboard from "./components/Dashboard";
import SignupPage from "./components/SignupPage";
import ResetPasswordPage from "./components/ResetPasswordPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        {/* Add other routes as needed */}
        <Route path="/" element={<Dashboard />} /> {/* For demo purposes */}
      </Routes>
    </Router>
  );
}

export default App;