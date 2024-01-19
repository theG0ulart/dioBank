import { CompanyAccount } from './class/CompanyAccount'
import { NewAccount } from './class/NewAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
peopleAccount.withdraw(30)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(500)
companyAccount.withdraw(25)
companyAccount.getLoan(2000)

const newAccount: NewAccount = new NewAccount('Marquitooo', 30)
console.log(newAccount)
newAccount.deposit(50)
newAccount.withdraw(20)