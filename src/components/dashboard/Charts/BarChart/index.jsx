import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart = ({ data }) => {
  const labels = data.map(item => item.transactionID);
  const barChartData = {
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
        data={barChartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              stacked: true,
            },
            x: {
              stacked: true,
              ticks: {
                font: {
                  size: 10,
                },
                maxTicksLimit: 5,
              },
            },
          },
          plugins: {
            legend: {
              position: 'top',
              labels: {
                font: {
                  size: 10,
                },
                padding: 8,
              },
            },
          },
          barThickness: 20,
          barPercentage: 0.8,
          maintainAspectRatio: false,
          aspectRatio: 0.5,
        }}
      />
    </div>
  );
};

export default BarChart;
