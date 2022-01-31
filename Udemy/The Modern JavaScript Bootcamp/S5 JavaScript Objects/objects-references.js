const myAccount = {
    name: 'Mansour Koura',
    expenses: 0,
    income: 0
}

// addExpenses
const addExpenses = function (account, amount) {
    account.expenses = account.expenses + amount;
}

// addIncome
const addIncome = function (account, amount) {
    account.income += amount;
}

// resetAccount
const resetAccount = function (account) {
    account.expenses = 0;
    account.income = 0;
}

// getAccountSummary
// Account for mansour koura has $900. $1000 in income. $100 in expenses.
const getAccountSummary = function (account) {
    let totalMoney = account.income - account.expenses;
    return `Account for ${account.name} has $${totalMoney}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 1000)
addExpenses(myAccount, 50)
addExpenses(myAccount, 50)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
