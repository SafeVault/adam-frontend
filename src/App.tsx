import { TransactionUI } from "./components/transactions/TransactionUI";
import { mockTransactions } from "./data/mockTransactions";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-adam-white-50">
      <header className="bg-adam-black-50 text-adam-white-50 p-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">Adam Finance</h1>
        </div>
      </header>
      
      <main>
        <TransactionUI transactions={mockTransactions} />
      </main>
    </div>
  );
}

export default App;
