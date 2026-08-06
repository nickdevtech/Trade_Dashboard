import { FaArrowTrendUp } from "react-icons/fa6";

const SummaryCard = ({
  title,
  value,
  color = "text-white",
  icon,
  trend,
}) => {
  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div>
          <p className="text-slate-400 text-sm font-medium">
            {title}
          </p>

          <h2 className={`text-3xl font-bold mt-3 ${color}`}>
            {value}
          </h2>
        </div>

        {icon && (
          <div className="bg-blue-600/20 text-blue-400 p-4 rounded-xl text-2xl group-hover:scale-110 transition">
            {icon}
          </div>
        )}

      </div>

      {/* Footer */}

      {trend && (
        <div className="mt-6 flex items-center gap-2 text-green-400 text-sm font-medium">
          <FaArrowTrendUp />
          {trend}
        </div>
      )}
    </div>
  );
};

export default SummaryCard;