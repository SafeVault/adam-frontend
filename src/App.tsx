import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";
import Dashboard from "./components/Dashboard";
import SignupPage from "./components/SignupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        {/* Add other routes as needed */}
        <Route path="/" element={<Dashboard />} /> {/* For demo purposes */}
      </Routes>
    </Router>
  );
}

export default App;