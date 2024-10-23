import React from 'react';
import { Shield, ShieldAlert, ShieldCheck } from 'lucide-react';

type RiskLevelProps = {
  level: 'low' | 'medium' | 'high';
  selected: boolean;
  onClick: () => void;
};

const RiskLevel: React.FC<RiskLevelProps> = ({ level, selected, onClick }) => {
  const baseClasses = "flex flex-col items-center p-6 rounded-xl cursor-pointer transition-all duration-500 group";
  const selectedClasses = selected 
    ? "bg-gray-700/50 border-2 border-blue-400 transform scale-105 shadow-lg shadow-blue-500/20" 
    : "bg-gray-800/30 border-2 border-gray-700/50 hover:border-blue-400/50 hover:scale-105";

  const getIconColor = (level: string) => {
    const colors = {
      low: "from-green-400 to-green-600",
      medium: "from-yellow-400 to-yellow-600",
      high: "from-red-400 to-red-600"
    };
    return colors[level as keyof typeof colors];
  };

  const icons = {
    low: <ShieldCheck className={`w-12 h-12 transition-transform duration-500 group-hover:scale-110 bg-gradient-to-br ${getIconColor(level)} text-transparent bg-clip-text`} />,
    medium: <Shield className={`w-12 h-12 transition-transform duration-500 group-hover:scale-110 bg-gradient-to-br ${getIconColor(level)} text-transparent bg-clip-text`} />,
    high: <ShieldAlert className={`w-12 h-12 transition-transform duration-500 group-hover:scale-110 bg-gradient-to-br ${getIconColor(level)} text-transparent bg-clip-text`} />
  };

  const labels = {
    low: "Conservative",
    medium: "Moderate",
    high: "Aggressive"
  };

  return (
    <div className={`${baseClasses} ${selectedClasses}`} onClick={onClick}>
      <div className="mb-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-xl rounded-full"></div>
        {icons[level]}
      </div>
      <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
        {labels[level]}
      </span>
    </div>
  );
};

export default RiskLevel;