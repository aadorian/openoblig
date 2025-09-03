export class BasicTrading {
  private balance: number;
  private openPositions: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
    this.openPositions = 0;
  }

  openPosition(amount: number): string {
    if (amount > this.balance) {
      return 'Fondos insuficientes para abrir la posición.';
    }
    this.balance -= amount;
    this.openPositions += 1;
    return `Posición abierta por ${amount} EUR. Balance restante: ${this.balance} EUR.`;
  }

  closePosition(profit: number): string {
    if (this.openPositions === 0) {
      return 'No hay posiciones abiertas para cerrar.';
    }
    this.balance += profit;
    this.openPositions -= 1;
    return `Posición cerrada. Ganancia/Pérdida: ${profit} EUR. Balance actual: ${this.balance} EUR.`;
  }

  getBalance(): number {
    return this.balance;
  }

  getOpenPositions(): number {
    return this.openPositions;
  }
}
