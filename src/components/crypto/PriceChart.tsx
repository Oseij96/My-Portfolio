import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

interface PriceChartProps {
  data: number[];
  color: string;
  height?: number;
}

const PriceChart: React.FC<PriceChartProps> = ({ 
  data, 
  color,
  height = 80
}) => {
  const labels = Array.from({ length: data.length }, (_, i) => `Day ${i + 1}`);
  
  const chartData = {
    labels,
    datasets: [
      {
        data,
        fill: true,
        backgroundColor: `${color}20`,
        borderColor: color,
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };
  
  return (
    <div style={{ height: `${height}px` }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default PriceChart;