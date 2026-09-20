import Transaction from "./Transaction";

export default function Transactions({ transactions }) {
  return (
    <ul>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
}
