import { Bar } from 'react-chartjs-2';

const CountryDistributionChart = ({ data }) => {
  const countryCount = data.reduce((acc, curr) => {
    acc[curr.County] = (acc[curr.County] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(countryCount),
    datasets: [
      {
        label: 'Number of Vehicles',
        data: Object.values(countryCount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Changed color for variety
      },
    ],
  };

  const options = {
    indexAxis: 'y', // Horizontal bar chart
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Vehicles',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default CountryDistributionChart;
