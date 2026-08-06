import {
  FaWallet,
  FaDollarSign,
  FaChartLine,
  FaTrophy,
  FaArrowUp,
  FaArrowDown,
  FaCoins,
  FaPercentage,
  FaHome,
  FaExchangeAlt,
  FaShieldAlt,
  FaCog,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

import SummaryCard from "./components/SummaryCard";
import TradeTable from "./components/TradeTable";
import RiskCard from "./components/RiskCard";
import EquityChart from "./components/EquityChart";

import { account, trades } from "./data/trades";
import { calculateStats } from "./utils/calculations";

function App() {
  const stats = calculateStats(account, trades);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 bg-slate-900 border-r border-slate-800 flex-col">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-blue-400">
            📈 TradeScape
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Trading Dashboard
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-3">

          <button className="flex items-center gap-3 w-full p-3 rounded-lg bg-blue-600">
            <FaHome />
            Dashboard
          </button>

          <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-800 transition">
            <FaChartLine />
            Analytics
          </button>

          <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-800 transition">
            <FaExchangeAlt />
            Trades
          </button>

          <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-800 transition">
            <FaShieldAlt />
            Risk
          </button>

          <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-800 transition">
            <FaCog />
            Settings
          </button>

        </nav>

        <div className="p-6 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            React • Tailwind • Recharts
          </p>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">

        {/* Navbar */}
        <header className="flex justify-between items-center px-8 py-6 border-b border-slate-800 bg-slate-900">

          <div>
            <h1 className="text-3xl font-bold">
              📊 TradeScape Dashboard
            </h1>

            <p className="text-slate-400 text-sm">
              Last Updated • {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <FaBell className="text-2xl cursor-pointer hover:text-blue-400 transition" />
            <FaUserCircle className="text-4xl cursor-pointer hover:text-blue-400 transition" />
          </div>

        </header>

        <div className="p-8 space-y-8">

          {/* Quick Overview */}

          <div className="grid md:grid-cols-3 gap-5">

            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
              <p className="text-slate-400 text-sm">
                Today's Return
              </p>

              <h2 className="text-3xl font-bold text-green-400">
                +3.25%
              </h2>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
              <p className="text-slate-400 text-sm">
                Open Trades
              </p>

              <h2 className="text-3xl font-bold">
                {trades.length}
              </h2>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-5">
              <p className="text-slate-400 text-sm">
                Risk Status
              </p>

              <h2 className="text-3xl font-bold text-green-400">
                Safe
              </h2>
            </div>

          </div>

          {/* Summary Cards */}

          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <SummaryCard
              title="Starting Balance"
              value={`$${account.startingBalance.toLocaleString()}`}
              icon={<FaWallet />}
              trend="Initial Capital"
            />

            <SummaryCard
              title="Current Balance"
              value={`$${stats.currentBalance.toLocaleString()}`}
              icon={<FaDollarSign />}
              color="text-green-400"
              trend="+3.25%"
            />

            <SummaryCard
              title="Total P&L"
              value={`$${stats.totalPnL.toLocaleString()}`}
              icon={<FaChartLine />}
              color={
                stats.totalPnL >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }
              trend="Today's Performance"
            />

            <SummaryCard
              title="Win Rate"
              value={`${stats.winRate.toFixed(0)}%`}
              icon={<FaPercentage />}
              color="text-blue-400"
              trend="Trading Accuracy"
            />

          </section>

          {/* Statistics */}

          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <SummaryCard
              title="Winning Trades"
              value={stats.winners}
              icon={<FaTrophy />}
              color="text-green-400"
            />

            <SummaryCard
              title="Losing Trades"
              value={stats.losers}
              icon={<FaArrowDown />}
              color="text-red-400"
            />

            <SummaryCard
              title="Largest Winner"
              value={`+$${stats.largestWinner}`}
              icon={<FaArrowUp />}
              color="text-green-400"
            />

            <SummaryCard
              title="Largest Loser"
              value={`-$${Math.abs(stats.largestLoser)}`}
              icon={<FaCoins />}
              color="text-red-400"
            />

          </section>

          {/* Equity Chart */}

          <EquityChart
            trades={trades}
            startingBalance={account.startingBalance}
          />

          {/* Risk + Analytics */}

          <section className="grid xl:grid-cols-3 gap-6">

            <RiskCard
              title="Maximum Drawdown"
              used={stats.currentDrawdown}
              remaining={stats.remainingDrawdown}
              limit={account.maxDrawdown}
            />

            <RiskCard
              title="Daily Loss Limit"
              used={stats.currentDayLoss}
              remaining={stats.remainingDailyLoss}
              limit={account.dailyLossLimit}
            />

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">

              <h2 className="text-xl font-bold mb-6">
                Performance Analytics
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Average Win
                  </span>

                  <span className="text-green-400 font-bold">
                    ${stats.averageWin.toFixed(0)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Average Loss
                  </span>

                  <span className="text-red-400 font-bold">
                    ${stats.averageLoss.toFixed(0)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Profit Factor
                  </span>

                  <span className="text-blue-400 font-bold">
                    {stats.profitFactor}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Total P&L
                  </span>

                  <span className="text-green-400 font-bold">
                    ${stats.totalPnL.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Win Rate
                  </span>

                  <span className="text-blue-400 font-bold">
                    {stats.winRate.toFixed(0)}%
                  </span>
                </div>

              </div>

            </div>

          </section>

          {/* Trades */}

          <TradeTable trades={trades} />

          {/* Footer */}

          <footer className="text-center text-slate-500 border-t border-slate-800 pt-6">
            © {new Date().getFullYear()} TradeScape Dashboard • Built with React,
            Tailwind CSS & Recharts
          </footer>

        </div>

      </main>
    </div>
  );
}

export default App;