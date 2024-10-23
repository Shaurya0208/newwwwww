import React, { useState } from 'react';
import { Wallet, CircleDollarSign, Sparkles } from 'lucide-react';
import RiskLevel from './components/RiskLevel';
import InvestmentSuggestion from './components/InvestmentSuggestion';

function App() {
  const [budget, setBudget] = useState<number>(10000);
  const [riskLevel, setRiskLevel] = useState<'low' | 'medium' | 'high'>('medium');

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated background gradients */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.9),rgba(0,0,0,1))]"></div>
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="relative">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="flex justify-center mb-6 relative">
                <div className="absolute inset-0 animate-pulse bg-blue-400/20 blur-xl rounded-full"></div>
                <CircleDollarSign className="w-20 h-20 text-blue-400 relative animate-float" />
              </div>
              <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
                Smart Investment Advisor
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Get personalized investment suggestions based on your budget and risk tolerance
              </p>
            </div>

            {/* Budget Input */}
            <div className="bg-gray-900/40 backdrop-blur-xl rounded-2xl shadow-lg p-8 mb-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <Wallet className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Monthly Investment Budget</h2>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mb-4 accent-blue-500"
              />
              <div className="text-center">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                  ₹{budget.toLocaleString()}
                </span>
                <span className="text-gray-400 text-lg"> per month</span>
              </div>
            </div>

            {/* Risk Level Selection */}
            <div className="bg-gray-900/40 backdrop-blur-xl rounded-2xl shadow-lg p-8 mb-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-blue-400" />
                Select Your Risk Tolerance
              </h2>
              <div className="grid grid-cols-3 gap-6">
                <RiskLevel level="low" selected={riskLevel === 'low'} onClick={() => setRiskLevel('low')} />
                <RiskLevel level="medium" selected={riskLevel === 'medium'} onClick={() => setRiskLevel('medium')} />
                <RiskLevel level="high" selected={riskLevel === 'high'} onClick={() => setRiskLevel('high')} />
              </div>
            </div>

            {/* Investment Suggestions */}
            <InvestmentSuggestion budget={budget} riskLevel={riskLevel} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;