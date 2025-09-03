import { BasicTrading } from "../src/BasicTrading";

describe("BasicTrading", () => {
  it("debería inicializar el balance y posiciones", () => {
    const trader = new BasicTrading(1000);
    expect(trader.getBalance()).toBe(1000);
    expect(trader.getOpenPositions()).toBe(0);
  });

  it("debería abrir una posición si hay fondos suficientes", () => {
    const trader = new BasicTrading(1000);
    const msg = trader.openPosition(500);
    expect(msg).toContain("Posición abierta");
    expect(trader.getBalance()).toBe(500);
    expect(trader.getOpenPositions()).toBe(1);
  });

  it("no debería abrir una posición si no hay fondos suficientes", () => {
    const trader = new BasicTrading(100);
    const msg = trader.openPosition(200);
    expect(msg).toContain("Fondos insuficientes");
    expect(trader.getBalance()).toBe(100);
    expect(trader.getOpenPositions()).toBe(0);
  });

  it("debería cerrar una posición y actualizar el balance", () => {
    const trader = new BasicTrading(1000);
    trader.openPosition(500);
    const msg = trader.closePosition(600);
    expect(msg).toContain("Posición cerrada");
    expect(trader.getBalance()).toBe(1100);
    expect(trader.getOpenPositions()).toBe(0);
  });

  it("no debería cerrar si no hay posiciones abiertas", () => {
    const trader = new BasicTrading(1000);
    const msg = trader.closePosition(100);
    expect(msg).toContain("No hay posiciones abiertas");
    expect(trader.getBalance()).toBe(1000);
    expect(trader.getOpenPositions()).toBe(0);
  });
});
