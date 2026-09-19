const transactions = [
  {
    id: 1,
    title: "Зарплата",
    amount: 2500,
    type: "income",
    category: "Работа",
  },
  {
    id: 2,
    title: "Продукты",
    amount: 45.5,
    type: "expense",
    category: "Еда",
  },
  {
    id: 3,
    title: "Такси",
    amount: 20,
    type: "expense",
    category: "Транспорт",
  },
  {
    id: 4,
    title: "Фриланс",
    amount: 300,
    type: "income",
    category: "Работа",
  },
  {
    id: 5,
    title: "Кофе",
    amount: 5,
    type: "expense",
    category: "Еда",
  },
  {
    id: 5,
    title: "Еда",
    amount: 5,
    type: "income",
    category: "Еда",
  },
];

function getFinancialSummary(transactions) {
  const incomes = transactions.filter((transaction) => {
    return transaction.type === "income";
  });
  const expenses = transactions.filter((transaction) => {
    return transaction.type === "expense";
  });

  const totalIncomes = incomes.reduce(
    (sum, transaction) => sum + transaction.amount,
    0,
  );
  const totalExpenses = expenses.reduce(
    (sum, transaction) => sum + transaction.amount,
    0,
  );

  const currentBalance = totalIncomes - totalExpenses;

  return {
    totalIncomes,
    totalExpenses,
    currentBalance,
  };
}

const summary = getFinancialSummary(transactions);
console.log(summary);

function getExpensesByCategory(transactions, category) {
  const expensesByCategory = transactions.filter((transaction) => {
    return transaction.type === "expense" && transaction.category === category;
  });
  const sumOfExpensesByCategory = expensesByCategory.reduce(
    (sum, transaction) => sum + transaction.amount,
    0,
  );
  return sumOfExpensesByCategory;
}
console.log(getExpensesByCategory(transactions, "Еда"));

function getExpensesByType(transactions, type) {
  return transactions.filter((transaction) => transaction.type === type);
}
console.log(getExpensesByType(transactions, "expense"));
//Должна вернуть массив из трёх расходов.
