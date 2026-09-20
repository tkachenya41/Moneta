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
