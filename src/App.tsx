import { TransactionUI } from "./components/transactions/TransactionUI";
import { mockTransactions } from "./data/mockTransactions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./components/Dashboard";
import SignupPage from "./components/SignupPage";
import { TransactionHistory } from "./components/transactions/TransactionHistory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/transactions" element={<TransactionHistory />} />
        {/* Add other routes as needed */}
        <Route path="/" element={<Dashboard />} /> {/* For demo purposes */}
      </Routes>
    </Router>
  );
}

export default App;
