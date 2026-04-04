import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CaretDown } from '@phosphor-icons/react';
import { 
  Chart as ChartJS, CategoryScale, LinearScale, 
  BarElement, Title, Tooltip, Legend 
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesChart = ({ chartData, chartLabels }) => {
  
  const data = {
    labels: chartLabels || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Sales',
      data: chartData || [3000, 4500, 3200, 5000, 4000, 7500, 9000],
      backgroundColor: (context) => {
          const index = context.dataIndex;
          const count = context.dataset.data.length;
          return index === count - 1 ? '#361205' : '#D1A872';
      },
      borderRadius: 6,
      borderSkipped: false,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { grid: { color: 'rgba(0,0,0,0.03)' }, ticks: { font: { size: 10 } } },
      x: { grid: { display: false }, ticks: { font: { size: 11, weight: '600' } } }
    }
  };

  return (
    <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-[#361205] text-lg">Sales Trends</h3>
        <div className="flex items-center gap-2 bg-[#F7F4E8] px-3 py-1.5 rounded-lg cursor-pointer">
          <span className="text-xs font-bold text-[#361205]">Last 7 Days</span>
          <CaretDown size={14} />
        </div>
      </div>
      <div className="h-72">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesChart;