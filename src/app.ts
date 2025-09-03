import { BasicTrading } from "./BasicTrading";

document.addEventListener("DOMContentLoaded", () => {
  // Cargar estado desde LocalStorage o inicializar
  const saved = localStorage.getItem("tradingState");
  let initialBalance = 1000;
  let openPositions = 0;
  if (saved) {
    try {
      const state = JSON.parse(saved);
      initialBalance = state.balance ?? 1000;
      openPositions = state.openPositions ?? 0;
    } catch {}
  }
  const trader = new BasicTrading(initialBalance);
  // Ajustar posiciones abiertas si se guardó
  (trader as any).openPositions = openPositions;

  const balanceInfo = document.getElementById("balance-info");
  const openBtn = document.getElementById("open-btn") as HTMLButtonElement;
  const closeBtn = document.getElementById("close-btn") as HTMLButtonElement;
  const amountInput = document.getElementById("amount") as HTMLInputElement;
  const profitInput = document.getElementById("profit") as HTMLInputElement;
  const logDiv = document.getElementById("log");

  function persist() {
    localStorage.setItem("tradingState", JSON.stringify({
      balance: trader.getBalance(),
      openPositions: trader.getOpenPositions()
    }));
  }

  function updateUI() {
    if (balanceInfo)
      balanceInfo.innerHTML = `<strong>Balance:</strong> ${trader.getBalance()} EUR<br><strong>Posiciones abiertas:</strong> ${trader.getOpenPositions()}`;
  }

  if (openBtn && amountInput && logDiv) {
    openBtn.onclick = () => {
      const amount = Number(amountInput.value);
      const msg = trader.openPosition(amount);
      logDiv.innerHTML = msg;
      updateUI();
      persist();
    };
  }

  if (closeBtn && profitInput && logDiv) {
    closeBtn.onclick = () => {
      const profit = Number(profitInput.value);
      const msg = trader.closePosition(profit);
      logDiv.innerHTML = msg;
      updateUI();
      persist();
    };
  }

  updateUI();
});
