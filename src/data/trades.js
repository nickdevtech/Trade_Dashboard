export const account = {
  startingBalance: 100000,
  maxDrawdown: 10000,
  dailyLossLimit: 5000,
};

export const trades = [
  {
    id: 1,
    pair: "BTC",
    side: "Long",
    pnl: 1200,
  },
  {
    id: 2,
    pair: "ETH",
    side: "Short",
    pnl: -450,
  },
  {
    id: 3,
    pair: "BTC",
    side: "Short",
    pnl: 800,
  },
  {
    id: 4,
    pair: "SOL",
    side: "Long",
    pnl: -300,
  },
  {
    id: 5,
    pair: "ETH",
    side: "Long",
    pnl: 2000,
  },
];