import React from 'react';
import {Bar, Line} from 'react-chartjs-2';

//Gráfico Horizontal
const Grafico = () => {
  const barData = {
    labels: ['Pedro lenin', 'Rogerio', 'Gloria Almeida', 'Ruan', 'Daneil Castro', 'José'],
    datasets: [
      {
        label: 'Sales',
        data: [10, 7, 8, 5, 3, 4],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  //Gráfico linear
  const lineData = {
    labels: ['Pedro lenin', 'Rogerio', 'Gloria Almeida', 'Ruan', 'Daneil Castro', 'José'],
    datasets: [
      {
        label: 'Sales',
        data: [10, 7, 8, 5, 3, 4],
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
  };

  return (
    <div>
      <Bar data={barData} />
      <Line data={lineData} />
    </div>
  );
};

export default Grafico;