import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registering Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const HeatMap = ({ data }) => {
  // Prepare the labels and datasets for the heat map
  const labels = data.map(item => item.transactionID);
  const heatmapData = {
    labels,
    datasets: [
      {
        label: 'High Gas Fees',
        data: data.map(item => (item.highGasFees === 'High' ? 1 : item.highGasFees === 'Medium' ? 0.5 : 0)),
        backgroundColor: 'rgba(255, 99, 132)', // Red
      },
      {
        label: 'Questionable Contracts',
        data: data.map(item => (item.questionableContracts === 'High' ? 1 : item.questionableContracts === 'Medium' ? 0.5 : 0)),
        backgroundColor: 'rgba(54, 162, 235)', // Blue
      },
      {
        label: 'Unusual Token Transfer',
        data: data.map(item => (item.unusualTokenTransfer === 'High' ? 1 : item.unusualTokenTransfer === 'Medium' ? 0.5 : 0)),
        backgroundColor: 'rgba(75, 192, 192)', // Teal
      },
      {
        label: 'Repeated Transactions',
        data: data.map(item => (item.repeatedTransactions === 'High' ? 1 : item.repeatedTransactions === 'Medium' ? 0.5 : 0)),
        backgroundColor: 'rgb(253, 239, 180)', // Yellow
      },
      {
        label: 'Suspicious Approvals',
        data: data.map(item => (item.suspiciousApprovals === 'High' ? 1 : item.suspiciousApprovals === 'Medium' ? 0.5 : 0)),
        backgroundColor: 'rgb(255, 187, 24)', // Orange
      },
    ],
  };

  return (
    <div className="h-full">
      <Bar
        data={heatmapData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              stacked: true,
            },
            x: {
              stacked: true,
            },
          },
          plugins: {
            legend: {
              position: 'top',
            },
          },
        }}
      />
    </div>
  );
};

export default HeatMap;