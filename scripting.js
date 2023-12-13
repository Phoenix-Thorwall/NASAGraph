temps=[];
years=[];

async function getData(){
    const response = await
    fetch("NASA.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    rows.forEach((elem) => {
        const row = elem.split(",");
        years.push(row[0])
        temps.push(Number(row[1])+14);
    });
    makeChart(temps, years)
}



function makeChart(temp, year){
    const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: 'Temperature per year',
        data: temp,
        borderWidth: 1,
        backgroundColor:'#FFC0CB'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      },
      plugins: {
        legend: {
            labels: {
                font: {
                    size: 40
                }
            }
        }
      }
    }
  });
}

getData(); 