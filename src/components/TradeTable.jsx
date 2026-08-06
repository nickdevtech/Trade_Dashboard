import {
  FaArrowUp,
  FaArrowDown,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const TradeTable = ({ trades }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-5 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white">Recent Trades</h2>
          <p className="text-slate-400 text-sm">
            Latest trading activity
          </p>
        </div>

        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
          {trades.length} Trades
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-800">
            <tr className="text-slate-400 text-sm uppercase">
              <th className="px-6 py-4 text-left">#</th>
              <th className="px-6 py-4 text-left">Pair</th>
              <th className="px-6 py-4 text-left">Position</th>
              <th className="px-6 py-4 text-right">P&amp;L</th>
              <th className="px-6 py-4 text-center">Status</th>
            </tr>
          </thead>

          <tbody>
            {trades.map((trade, index) => {
              const isProfit = trade.pnl >= 0;

              return (
                <tr
                  key={trade.id}
                  className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors"
                >
                  <td className="px-6 py-5 text-slate-400">
                    {index + 1}
                  </td>

                  <td className="px-6 py-5 font-semibold text-white">
                    {trade.pair}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                        trade.side === "Long"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {trade.side === "Long" ? (
                        <FaArrowUp />
                      ) : (
                        <FaArrowDown />
                      )}

                      {trade.side}
                    </span>
                  </td>

                  <td
                    className={`px-6 py-5 text-right font-bold ${
                      isProfit
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {isProfit
                      ? `+$${trade.pnl.toLocaleString()}`
                      : `-$${Math.abs(trade.pnl).toLocaleString()}`}
                  </td>

                  <td className="px-6 py-5 text-center">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                        isProfit
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {isProfit ? (
                        <FaCheckCircle />
                      ) : (
                        <FaTimesCircle />
                      )}

                      {isProfit ? "Profit" : "Loss"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeTable;