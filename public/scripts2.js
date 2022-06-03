

function getData2(){

    const responses2 = Promise.all([
      fetch(coal),
      fetch(petroleum),
      fetch(naturalGas)
    ]).then(function (responses2){
      
      return Promise.all(responses2.map(function (response) {
            return response.json();
        }));
    }).then(function (dataObjs){
      return Promise.all(dataObjs.map(function (dataObj) {
            return dataObj.series[0].data.map(function(el) {
                  return el[1];
                }).reverse()
        }));
    }).then(function(dataArrays){
      const labels = [];
    
      for (var i = 1980; i <= 2018; i++) {
         labels.push(i);
      }
      
      const data ={
              labels:labels,
          datasets: [
            {
              label: coal,
              backgroundColor: "red",
              borderColor: "red",
              borderWidth: 1,
              data: dataArrays[0]
            },
            {
              label:petroleum,
              backgroundColor: "blue",
              borderColor: "blue",
              borderWidth: 1,
              data: dataArrays[1]
            },
            {
              label: naturalGas,
              backgroundColor: "yellow",
              borderColor: "green",
              borderWidth: 1,
              data: dataArrays[2]
            }
          ]
      }
      
      const config={
        type: "line",
        data: data,
        options: {
              responsive: true,
              legend: {
                position: "top"
              },
              plugins: {
                  title: {
                      display: true,
                      text: 'State CO2 Emissions'
                  }
              },
              scales: {
                  y: {
                      min: 0,
                      max: 500,
                      display: true,
                      title: {
                        display: true,
                        text: 'value'
                      }
                    }
              }
            }
       };
        const ctx = document.getElementById('myChart2');
        new Chart(ctx, config);
    })




  }
    
    getData2()


    // document.getElementById('dropdown4').onchange = function() {
    //   localStorage.setItem('selectedtem', document.getElementById('dropdown4').value);
    // };

    // if (localStorage.getItem('selectedtem')) {
    //   document.getElementById('dropdown4').options[localStorage.getItem('selectedtem')].selected = true;
    // }
  
    