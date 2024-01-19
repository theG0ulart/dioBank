export abstract class DioAccount {
  private  name: string
  private readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus() && value > 0){
      this.balance += value
      console.log('Voce depositou: ', value)
      this.getBalance()
      
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance != 0 && this.balance >= value){

    this.balance -= value

    console.log('Voce sacou', value)

    this.getBalance()
    }
    
  }

  getBalance = (): void => {
    console.log(`Saldo atual: ${this.balance}`)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
