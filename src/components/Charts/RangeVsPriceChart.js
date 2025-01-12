import { Scatter } from 'react-chartjs-2';

const RangeVsPriceChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Electric Range vs. Base MSRP',
        data: data.map((item) => ({
          x: item["Electric Range"],
          y: item["Base MSRP"],
        })),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Electric Range (miles)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Base MSRP ($)',
        },
      },
    },
  };

  return <Scatter data={chartData} options={options} />;
};

export default RangeVsPriceChart;
