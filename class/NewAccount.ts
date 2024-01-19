import { DioAccount } from "./DioAccount"

export class NewAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  depositWithBonus = (value:number): void => {
    const bonus: number = 10
    if(this.validateStatus()){
      this.balance += (value + bonus)

      console.log(`
        Você fez um depósito de ${value}.
        `)
        
        this.getBalance()
        
    }
  }
}
