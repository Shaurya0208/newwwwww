import React from 'react';
import { TrendingUp, DollarSign, ArrowRight } from 'lucide-react';

type Investment = {
  type: string;
  allocation: number;
  description: string;
  expectedReturn: string;
};

type InvestmentSuggestionProps = {
  budget: number;
  riskLevel: 'low' | 'medium' | 'high';
};

const InvestmentSuggestion: React.FC<InvestmentSuggestionProps> = ({ budget, riskLevel }) => {
  const getInvestments = (risk: string): Investment[] => {
    switch (risk) {
      case 'low':
        return [
          { type: 'Government Bonds', allocation: 40, description: 'Safe, fixed-income securities', expectedReturn: '5-7%' },
          { type: 'Blue-chip Stocks', allocation: 30, description: 'Stable, large-cap companies', expectedReturn: '8-10%' },
          { type: 'Index Funds', allocation: 30, description: 'Diversified market exposure', expectedReturn: '7-9%' }
        ];
      case 'medium':
        return [
          { type: 'Growth Stocks', allocation: 40, description: 'Companies with high growth potential', expectedReturn: '12-15%' },
          { type: 'Corporate Bonds', allocation: 30, description: 'Medium-risk corporate debt', expectedReturn: '7-9%' },
          { type: 'Real Estate SIPs', allocation: 30, description: 'Property investment trusts', expectedReturn: '10-12%' }
        ];
      case 'high':
        return [
          { type: 'Small-cap Stocks', allocation: 50, description: 'High-potential smaller companies', expectedReturn: '15-20%' },
          { type: 'Sector ETFs', allocation: 30, description: 'Focused sector investments', expectedReturn: '12-18%' },
          { type: 'Crypto SIPs', allocation: 20, description: 'Digital asset investments', expectedReturn: '20-25%' }
        ];
      default:
        return [];
    }
  };

  const investments = getInvestments(riskLevel);

  return (
    <div className="space-y-6">
      <div className="bg-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-blue-500/10 rounded-xl">
            <DollarSign className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-2xl font-semibold text-white">
            Monthly Investment: <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">₹{budget.toLocaleString()}</span>
          </h3>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {investments.map((investment, index) => (
            <div 
              key={index} 
              className="group bg-gray-950/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                  {investment.type}
                </h4>
                <span className="text-sm font-semibold bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded-full">
                  {investment.allocation}%
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{investment.description}</p>
              <div className="flex items-center gap-2 text-green-400 mb-3">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">{investment.expectedReturn}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Monthly: ₹{((budget * investment.allocation) / 100).toLocaleString()}
                </span>
                <ArrowRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentSuggestion;