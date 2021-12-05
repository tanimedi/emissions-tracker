
    const labels =
        [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut"
    ];

    const data ={
        labels:labels,
    datasets: [
      {
        label: "Coal",
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 1,
        data: [5, 2, 10, 10,1, 3, 5]
      },
      {
        label: "Natural Gas",
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 1,
        data: [10, 1, 5, 3, 3,4,8]
      },
      {
        label: "Petroleum",
        backgroundColor: "yellow",
        borderColor: "green",
        borderWidth: 1,
        data: [2,9,6,9,3,3,10]
      }
    ]
}

 const config={
  type: "bar",
  data: data,
  options: {
        responsive: true,
        legend: {
          position: "top"
        },
        plugins: {
            title: {
                display: true,
                text: 'US CO2 Emissions'
            }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
 };

 window.onload = function() {
 const ctx = document.getElementById('myChart');
 new Chart(ctx, config);
 }