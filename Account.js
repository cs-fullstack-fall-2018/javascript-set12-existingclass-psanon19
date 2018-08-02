class Account
{

    constructor(accountName, accountBalance)
    {
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }

    withdrawal(amount)
    {
        this.accountBalance -= amount;
    }

    deposit(amount)
    {
        this.accountBalance += amount;
    }

    balance()
    {
        return this.accountBalance;
    }
}

function main()
{
    var accName = new Account("John Jacob Jingleheimer Schmidt", 100);
    accName.deposit(20);

    alert(accName.accountBalance);




}

main();