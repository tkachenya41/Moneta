import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Balance from "./components/Balance";
import "./App.css";
import IncomeExpense from "./components/IncomeExpense";
import Transactions from "./components/Transactions";
import { transactions } from "./data/transactions";
import { useState } from "react";

function App() {
  const [showTransactions, setShowTransactions] = useState(true);
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Moneta</h1>
          <h2>Учёт личных финансов</h2>
        </div>
        <Balance amount={2560} />
        <IncomeExpense income={2700} expense={70.5} />
        <button onClick={() => setShowTransactions(!showTransactions)}>
          {showTransactions ? "Скрыть операции" : "Отобразить операции"}
        </button>
        {showTransactions && <Transactions transactions={transactions} />}
      </section>
    </>
  );
}

export default App;
