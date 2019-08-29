import React, { useEffect }from 'react';

const backgroundColor = ['darkmagenta','darkred','darkorange',
  'indigo', 'teal', 'tomato', 'olivedrab'];

const Donut = ({ currMonth }) => {
  const keys = currMonth? Object.values(currMonth.expenditure) : [];
  const name = currMonth? `${currMonth.month}_${currMonth.year}` : '';
  useEffect(() => {
    if (currMonth) {
      const keys = Object.keys(currMonth.expenditure);
      const data = [];
      for (let i = 0; i < keys.length; i++) {
        data[i] = currMonth.expenditure[keys[i]];
      }
      const canvas = document.getElementById(name);
      const ctx = canvas.getContext('2d'); 
      const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
          labels: Object.keys(currMonth.expenditure),
          datasets: [{
            backgroundColor,
            data,
          }]
        },
      })
      return () => chart.destroy();
    }
  }, [...keys, currMonth])
  return (
    <canvas id ={ name } ></canvas>
  )
}

export default Donut;
