class Account
{
// The class allows me to use the info of accountName and accountBalance
    constructor(accountName, accountBalance)
    {
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }
// Withdrawal is a method to subtract from the account balance
    withdrawal(amount)
    {
        this.accountBalance -= amount;
    }
// Deposit allows the user to gain money towards the accountBalance
    deposit(amount)
    {
        this.accountBalance += amount;
    }
    balance()
    {
        return this.accountName+" "+ this.accountBalance;
    }
}

function main()
{
    var accName = new Account("Matt's account", 1000);
    var newAccName = new Account("My account",0);

    alert(accName.accountBalance);
    alert(newAccName.accountBalance);

    accName.withdrawal(100);
    newAccName.deposit(100);

    alert(accName.balance());
    alert(newAccName.balance());




}

main();