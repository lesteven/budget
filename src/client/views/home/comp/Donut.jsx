import React, { useEffect }from 'react';


// Graph data for donut chart using Chart.js

const backgroundColor = ['darkmagenta','darkred','darkorange',
  'indigo', 'teal', 'tomato', 'olivedrab'];

const Donut = ({ currMonth }) => {
  const values = Object.values(currMonth.expenditure);
  const name = `${currMonth.month}_${currMonth.year}`;
  useEffect(() => {
    const keys = Object.keys(currMonth.expenditure).filter(key => {
      return currMonth.expenditure[key] > 0;
    });
    const data = [];
    for (let i = 0; i < keys.length; i++) {
      data[i] = currMonth.expenditure[keys[i]];
    }
    const canvas = document.getElementById(name);
    const ctx = canvas.getContext('2d'); 
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: keys,
        datasets: [{
          backgroundColor,
          data,
        }]
      },
    })
    return () => chart.destroy();
  }, [values, currMonth])
  const style = { maxWidth:'650px' }
  return (
    <canvas id ={ name } style = {style} ></canvas>
  )
}

export default Donut;
