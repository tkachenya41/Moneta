export default function Transaction({ transaction }) {
  return (
    <li>
      {transaction.category}: {transaction.type === "income" ? "+" : "-"}
      {transaction.amount}$
    </li>
  );
}
