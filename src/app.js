import { BasicTrading } from "./BasicTrading";
document.addEventListener("DOMContentLoaded", () => {
    var _a, _b;
    // Cargar estado desde LocalStorage o inicializar
    const saved = localStorage.getItem("tradingState");
    let initialBalance = 1000;
    let openPositions = 0;
    if (saved) {
        try {
            const state = JSON.parse(saved);
            initialBalance = (_a = state.balance) !== null && _a !== void 0 ? _a : 1000;
            openPositions = (_b = state.openPositions) !== null && _b !== void 0 ? _b : 0;
        }
        catch (_c) { }
    }
    const trader = new BasicTrading(initialBalance);
    // Ajustar posiciones abiertas si se guardó
    trader.openPositions = openPositions;
    const balanceInfo = document.getElementById("balance-info");
    const openBtn = document.getElementById("open-btn");
    const closeBtn = document.getElementById("close-btn");
    const amountInput = document.getElementById("amount");
    const profitInput = document.getElementById("profit");
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
