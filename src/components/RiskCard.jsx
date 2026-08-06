import { FaShieldAlt, FaExclamationTriangle } from "react-icons/fa";
import StatusBadge from "./StatusBadge";

const getStatus = (remaining, limit) => {
  const percentage = remaining / limit;

  if (percentage > 0.5) return "Safe";
  if (percentage > 0.2) return "Approaching Limit";
  return "At Risk";
};

const RiskCard = ({
  title,
  used,
  remaining,
  limit,
}) => {
  const status = getStatus(remaining, limit);

  const usedPercentage = Math.min((used / limit) * 100, 100);

  const progressColor =
    status === "Safe"
      ? "bg-green-500"
      : status === "Approaching Limit"
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">
          <div className="bg-blue-600/20 p-3 rounded-xl">
            {status === "Safe" ? (
              <FaShieldAlt className="text-blue-400 text-xl" />
            ) : (
              <FaExclamationTriangle className="text-yellow-400 text-xl" />
            )}
          </div>

          <div>
            <h2 className="font-semibold text-lg">{title}</h2>
            <p className="text-slate-400 text-sm">
              Risk Monitoring
            </p>
          </div>
        </div>

        <StatusBadge status={status} />

      </div>

      {/* Values */}
      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">
            Used
          </p>

          <p className="text-red-400 text-2xl font-bold mt-1">
            ${used.toLocaleString()}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">
            Remaining
          </p>

          <p className="text-green-400 text-2xl font-bold mt-1">
            ${remaining.toLocaleString()}
          </p>
        </div>

      </div>

      {/* Progress */}

      <div className="mt-6">

        <div className="flex justify-between text-sm mb-2">

          <span className="text-slate-400">
            Risk Used
          </span>

          <span className="font-semibold">
            {usedPercentage.toFixed(1)}%
          </span>

        </div>

        <div className="h-3 bg-slate-700 rounded-full overflow-hidden">

          <div
            className={`${progressColor} h-full rounded-full transition-all duration-700`}
            style={{
              width: `${usedPercentage}%`,
            }}
          />

        </div>

      </div>

      {/* Footer */}

      <div className="flex justify-between mt-5 text-sm text-slate-400">

        <span>
          Limit: ${limit.toLocaleString()}
        </span>

        <span>
          Status: {status}
        </span>

      </div>

    </div>
  );
};

export default RiskCard;