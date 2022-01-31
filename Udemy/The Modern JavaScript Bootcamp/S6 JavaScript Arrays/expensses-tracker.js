const account = {
    name: 'Ahmed Mnasour ' , 
    expensess: []  , 
    icome: [] , 
    addExpensess: function (describtion , amount )  {
        const item = {} ; 
        item.describtion = describtion ; 
        item.amount = amount ; 
        this.expensess.push(item) ; 
    } , 
    getSummery: function(){
        let totalIncome =0 ; 
        this.icome.forEach(OneIncome => {
            totalIncome = totalIncome + OneIncome.amount ; 
        })
        let totalExpensess = 0  ;
        this.expensess.forEach( expenss =>{
            totalExpensess = totalExpensess + expenss.amount
        })

        const balance = totalIncome - totalExpensess ; 
        return ` ${this.name}has a blance $${balance}. $${totalIncome} in income  $${totalExpensess}. in expensses  `
    } , 
    addIncome: function(describtion , amount){
        const item = {} ; 
        item.describtion = describtion ; 
        item.amount = amount ; 
        this.icome.push(item) ; 
    }
}
console.log(account) ; 
account.addExpensess('Burger' , 85 ) ; 
account.addExpensess('pepsi' , 25 ) ; 
account.addExpensess('cola' , 25 ) ; 
account.addExpensess('tea' , 15 ) ; 

account.addIncome('freelance' , 400 ) ; 


console.log(account.getSummery()) ; 
console.log(account) ; 