import React, { useState, useEffect, useRef } from 'react';
import { DollarSign, Clipboard, CheckCircle, TrendingUp, Eye, Send, Activity, Briefcase, BarChart2, Plus, List, Search } from 'lucide-react';

// Reusable component for animated numbers
const AnimatedNumber = ({ targetValue, duration = 1000, suffix = '', prefix = '' }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startValue = 0;
          const increment = targetValue / (duration / 16); // ~60fps
          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;
            const animatedValue = Math.min(targetValue, startValue + increment * (currentTime - startTime) / 16);
            setCurrentValue(animatedValue);

            if (animatedValue < targetValue) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [targetValue, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {Math.round(currentValue).toLocaleString()}
      {suffix}
    </span>
  );
};

const Dashboard = () => {
  // Static data for the dashboard elements
  const statsData = [
    {
      id: 'total-earnings',
      icon: DollarSign,
      title: 'TOTAL EARNINGS',
      value: 12450,
      suffix: '',
      subText: 'USD equivalent',
      trend: '+12.5%',
      trendColor: 'text-green-400',
      trendIcon: TrendingUp,
      prefix: '$',
    },
    {
      id: 'active-projects',
      icon: Clipboard,
      title: 'ACTIVE PROJECTS',
      value: 5,
      subText: 'In progress',
      trend: '+2',
      trendColor: 'text-green-400',
      trendIcon: TrendingUp,
    },
    {
      id: 'completed',
      icon: CheckCircle,
      title: 'COMPLETED',
      value: 23,
      subText: 'Projects finished',
      trend: '100%',
      trendColor: 'text-green-400',
      trendIcon: TrendingUp,
    },
    {
      id: 'success-rate',
      icon: TrendingUp, // Changed icon to reflect success rate
      title: 'SUCCESS RATE',
      value: 98.5,
      suffix: '%',
      subText: 'Client satisfaction',
      trend: '+0.5%',
      trendColor: 'text-green-400',
      trendIcon: TrendingUp,
    },
  ];

  const recentProjectsData = [
    {
      title: 'ICP Canister Development - Social Media dApp',
      category: 'icp development',
      budget: '$8000 - $12000',
      status: 'OPEN',
      duration: '5-8 weeks',
    },
    {
      title: 'UI/UX Design for Arbitrum Wallet',
      category: 'design',
      budget: '$2500 - $4000',
      status: 'OPEN',
      duration: '3-4 weeks',
    },
    {
      title: 'React Frontend for NFT Marketplace',
      category: 'web development',
      budget: '$3000 - $5000',
      status: 'OPEN',
      duration: '4-5 weeks',
    },
    {
      title: 'AI Trading Bot Development',
      category: 'ai/ml',
      budget: '$6000 - $10000', // Fixed syntax error here
      status: 'OPEN',
      duration: '5-6 weeks',
    },
  ];

  const performanceData = [
    { label: 'Profile Views', value: '1,247' },
    { label: 'Proposals Sent', value: '18' },
    { label: 'Response Rate', value: '89%', color: 'text-green-400' },
    { label: 'Avg. Project Value', value: '$2,658', color: 'text-blue-300' }, // Changed color to text-blue-300
  ];

  return (
    // Outermost div: Removed flex, items-center, justify-center, and changed py-16 to pt-0
    <div className="min-h-screen pt-0 pb-16" style={{ backgroundColor: 'transparent' }}>
      {/* Main content container with blur, background, and max-width, mimicking AIOfferingsSection */}
      <div className="relative z-20 p-8 rounded-2xl bg-gray-900/40 backdrop-blur-md max-w-6xl mx-auto w-full space-y-6">

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="bg-gray-900/40 backdrop-blur-md rounded-xl p-4 border border-gray-700 shadow-lg
                         transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-500/20
                         flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <stat.icon size={20} />
                  <span className="text-xs font-semibold uppercase">{stat.title}</span>
                </div>
                {stat.trend && (
                  <div className={`flex items-center text-xs font-medium ${stat.trendColor}`}>
                    {stat.trendIcon && <stat.trendIcon size={14} className="mr-1" />}
                    {stat.trend}
                  </div>
                )}
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                <AnimatedNumber targetValue={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-sm text-gray-400">{stat.subText}</p>
            </div>
          ))}
        </div>

        {/* Recent Projects and Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Projects */}
          <div className="lg:col-span-2 bg-gray-900/40 backdrop-blur-md rounded-xl p-6 border border-gray-700 shadow-lg
                         transition-all duration-300 hover:scale-[1.005] hover:shadow-xl hover:shadow-blue-500/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Recent Projects</h3>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200">
                Browse All
              </button>
            </div>
            <div className="space-y-4">
              {recentProjectsData.map((project, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 rounded-lg
                             transition-colors duration-200 hover:bg-gray-800/50 cursor-pointer"
                >
                  <div>
                    <h4 className="text-lg font-medium text-white">{project.title}</h4>
                    <p className="text-sm text-gray-400">{project.category}</p>
                    <p className="text-sm text-gray-300 font-medium">{project.budget}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-green-600/20 text-green-400 text-xs font-semibold px-2 py-1 rounded-full">
                      {project.status}
                    </span>
                    <p className="text-sm text-gray-400 mt-1">{project.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance (now directly a grid item, occupying the remaining 1 column) */}
          <div className="bg-gray-900/40 backdrop-blur-md rounded-xl p-6 border border-gray-700 shadow-lg
                         transition-all duration-300 hover:scale-[1.005] hover:shadow-xl hover:shadow-blue-500/20
                         flex flex-col justify-between"> {/* Added flex-col justify-between for spreading content */}
            <h3 className="text-xl font-semibold text-white mb-6">Performance</h3>
            <div className="flex-grow flex flex-col justify-around"> {/* This div will spread the items */}
              {performanceData.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-gray-800/50 transition-colors duration-200">
                  <span className="text-gray-300">{item.label}</span>
                  <span className={`font-medium ${item.color || 'text-white'}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
