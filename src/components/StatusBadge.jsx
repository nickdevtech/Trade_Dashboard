import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from "react-icons/fa";

const StatusBadge = ({ status }) => {
  const badgeStyles = {
    Safe: {
      bg: "bg-green-500/20",
      text: "text-green-400",
      border: "border border-green-500/30",
      icon: <FaCheckCircle />,
    },
    "Approaching Limit": {
      bg: "bg-yellow-500/20",
      text: "text-yellow-400",
      border: "border border-yellow-500/30",
      icon: <FaExclamationTriangle />,
    },
    "At Risk": {
      bg: "bg-red-500/20",
      text: "text-red-400",
      border: "border border-red-500/30",
      icon: <FaTimesCircle />,
    },
  };

  const style = badgeStyles[status];

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${style.bg} ${style.text} ${style.border}`}
    >
      {style.icon}
      {status}
    </span>
  );
};

export default StatusBadge;