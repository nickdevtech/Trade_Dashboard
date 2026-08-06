import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

const EquityChart = ({ trades, startingBalance }) => {
  let balance = startingBalance;

  const data = [{ trade: "Start", balance }];

  trades.forEach((trade, index) => {
    balance += trade.pnl;

    data.push({
      trade: `T${index + 1}`,
      balance,
    });
  });

  const minBalance = Math.min(...data.map((d) => d.balance));
  const maxBalance = Math.max(...data.map((d) => d.balance));

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">
            Equity Curve
          </h2>

          <p className="text-slate-400 text-sm">
            Balance after each trade
          </p>
        </div>

        <div className="text-green-400 font-semibold">
          +${(balance - startingBalance).toLocaleString()}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="equity" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#22c55e" stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="#334155"
            strokeDasharray="4 4"
            vertical={false}
          />

          <XAxis
            dataKey="trade"
            tick={{ fill: "#94a3b8" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            domain={[minBalance - 500, maxBalance + 500]}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            tick={{ fill: "#94a3b8" }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "12px",
              color: "#fff",
            }}
            formatter={(value) => [`$${value.toLocaleString()}`, "Balance"]}
          />

          <Area
            type="monotone"
            dataKey="balance"
            stroke="none"
            fill="url(#equity)"
          />

          <Line
            type="monotone"
            dataKey="balance"
            stroke="#22c55e"
            strokeWidth={4}
            dot={{
              r: 4,
              fill: "#22c55e",
              strokeWidth: 2,
              stroke: "#0f172a",
            }}
            activeDot={{
              r: 7,
              fill: "#22c55e",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EquityChart;