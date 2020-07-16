const user = {
    name: 'Thyall',
    transactions: [],
    balance: 0
};

let quantityOfTransactions = {
    credit: 0,
    debit: 0
};

function createTransaction(transaction){
    user.transactions.push(transaction)

    if(transaction.type == 'credit'){
        user.balance = user.balance + transaction.value
    }

    else{
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(type){
    let higherTransaction
    let maxValue = 0
    for (let transaction of user.transactions) {
        if(transaction.type == type && transaction.value > maxValue) {
            maxValue = transaction.value
            higherTransaction = transaction
        } 
    }
    console.log("this is the higher transaction:", higherTransaction)
}

function getAverageTransactionValue(){
    let sum = 0
    for(let value of user.transactions){
        sum = sum + value.value
    }
    console.log('Average:', sum/user.transactions.length)
}

function getTransactionsCount(){
    for(let transaction of user.transactions){
        if (transaction.type == 'debit') {
            quantityOfTransactions.debit++;
        }
        else {
            quantityOfTransactions.credit++;
        }
    }
    console.log(quantityOfTransactions)
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(`Name: ${user.name},  Balance: ${user.balance}`)

getHigherTransactionByType("credit"); 
getHigherTransactionByType("debit"); 

getAverageTransactionValue(); 

getTransactionsCount(); 