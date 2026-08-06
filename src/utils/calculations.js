export const calculateStats = (account, trades) => {
  const totalPnL = trades.reduce((sum, trade) => sum + trade.pnl, 0);

  const winners = trades.filter((trade) => trade.pnl > 0);
  const losers = trades.filter((trade) => trade.pnl < 0);

  const currentBalance = account.startingBalance + totalPnL;

  const currentDrawdown = Math.max(
    0,
    account.startingBalance - currentBalance
  );

  const remainingDrawdown = Math.max(
    0,
    account.maxDrawdown - currentDrawdown
  );

  const totalLoss = Math.abs(
    losers.reduce((sum, trade) => sum + trade.pnl, 0)
  );

  const remainingDailyLoss = Math.max(
    0,
    account.dailyLossLimit - totalLoss
  );

  const averageWin =
    winners.length > 0
      ? winners.reduce((sum, t) => sum + t.pnl, 0) / winners.length
      : 0;

  const averageLoss =
    losers.length > 0
      ? Math.abs(losers.reduce((sum, t) => sum + t.pnl, 0)) /
        losers.length
      : 0;

  const profitFactor =
    totalLoss > 0
      ? (
          winners.reduce((sum, t) => sum + t.pnl, 0) /
          totalLoss
        ).toFixed(2)
      : "∞";

  const winRate =
    trades.length > 0
      ? (winners.length / trades.length) * 100
      : 0;

  return {
    totalPnL,
    currentBalance,

    winners: winners.length,
    losers: losers.length,

    winRate,

    largestWinner:
      winners.length > 0
        ? Math.max(...winners.map((t) => t.pnl))
        : 0,

    largestLoser:
      losers.length > 0
        ? Math.min(...losers.map((t) => t.pnl))
        : 0,

    averageWin,
    averageLoss,

    profitFactor,

    currentDrawdown,
    remainingDrawdown,

    currentDayLoss: totalLoss,
    remainingDailyLoss,
  };
};