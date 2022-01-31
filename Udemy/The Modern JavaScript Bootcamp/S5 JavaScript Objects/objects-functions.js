let myAcoount = {
    name: 'Ahmed Mansour' , 
    expenses: 0  , 
    income: 0 
}


let otherAccount = myAcoount ; 
otherAccount.income = 40; 


let change = (account , amount) =>{
    account.expenses = account.expenses + amount ; 
    console.log(account)
}

change(myAcoount , 250) ; 

console.log(otherAccount) 

//add incone 
let addExpenses = (account , amount) => {
    account.expenses = account.expenses + amount ; 
    console.log(`Your account income became ${account.expenses}`)   ; 
}

//add incone 
let addIncome = (account , amount) => {
    account.income = account.income + amount ; 
    console.log(`Your account income became ${account.income}`)   ; 
}
//reset account 
let resetAcoount = account => {
    account.income = 0  ;
    account.expenses = 0 ; 
}

// getAccountSummary 
let getAccountSummary = account => {
    return ` Account for ${account.name}  has ${account.income} in income and ${account.expenses} in expensess` ; 

}

addIncome(myAcoount , 500);
console.log( getAccountSummary(myAcoount)  );
resetAcoount(myAcoount)  ;
console.log(  getAccountSummary(myAcoount)  );


 

