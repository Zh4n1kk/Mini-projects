import { table } from "table"

class Account<T,V> {
    balance: T
    accountType: V
    ownerName: V

    constructor(balance: T, accountType: V, ownerName: V) {
        this.balance = balance
        this.accountType = accountType
        this.ownerName = ownerName
    }

}

class WithdrawAccount extends Account<number, string> {
    constructor(balance: number, ownerName: string) {
        super(balance, 'Withdraw',ownerName)
    }
}

class DepositAccount extends Account<number, string> {
    constructor(balance: number, ownerName: string) {
        super(balance, 'Deposit', ownerName)
    }
}

class TransitAccount extends Account<number, string> {
    constructor(balance: number, ownerName: string) {
        super(balance, 'Transit', ownerName)
    }
}

class ClosedAccount extends Account<number, string> {
    constructor(balance: number, ownerName: string) {
        super(balance, 'Closed', ownerName)
    }
}

const closedAcc = new ClosedAccount(-200, 'Djen Sepp(Задолженность)')
const transit = new TransitAccount(35000000, 'Pasha')
const depacc = new DepositAccount(105350000, 'Dinara')
const withdrawAcc = new WithdrawAccount(950000, 'Aigerim')
class Bank<T extends Account<number,string>> {
    accounts: T[] = []

    addAccount( account:T ) {
        this.accounts.push(account)
    }

    showAccount() {
        let tableData: string[][] = [['Owner','Balance','Account Type']]
        this.accounts.forEach(account => tableData.push([account.ownerName,account.balance.toString(),account.accountType]))
        console.log(table(tableData))
    }
}

const kaspi = new Bank() 
kaspi.addAccount(closedAcc)
kaspi.addAccount(transit)
kaspi.addAccount(depacc)
kaspi.addAccount(withdrawAcc)
kaspi.showAccount()