function getData(){
  
//console.log(api2);
/*
const api1 = `http://api.eia.gov/series/?api_key=${eiaKey}&series_id=EMISS.CO2-TOTV-TT-TO-AL.A`
const api2 = `http://api.eia.gov/series/?api_key=${eiaKey}&series_id=EMISS.CO2-TOTV-TT-TO-AK.A`
const api3 = `http://api.eia.gov/series/?api_key=${eiaKey}&series_id=EMISS.CO2-TOTV-TT-TO-CT.A`
note
*/


const responses = Promise.all([
  fetch(api1),
  fetch(api2),
  fetch(api3)
]).then(function (responses){
  
  return Promise.all(responses.map(function (response) {
     
		return response.json();
	}));
}).then(function (dataObjs){
  return Promise.all(dataObjs.map(function (dataObj) {
		return dataObj.response.data.map(function(el){
      // console.log(el.value)
      return el.value
    }
    ).reverse();
      // console.log("dataObj");
      // console.log(dataObj.data);
             
	}))
}).then(function(dataArrays){
  const labels = [];
  // console.log("dataArrays")
  // console.log(dataArrays);
  for (var i = 1970; i <= 2020; i++) {
     labels.push(i);
  }
  // console.log(labels);
  Chart.defaults.font.size = 18;
  Chart.defaults.color = '#000000';
  const data ={
          labels:labels,
      datasets: [
        {
          label: state1,
          backgroundColor: "red",
          borderColor: "red",
          borderWidth: 1,
          data: dataArrays[0]
        },
        {
          label:state2,
          backgroundColor: "blue",
          borderColor: "blue",
          borderWidth: 1,
          data: dataArrays[1]
        },
        {
          label: state3,
          backgroundColor: "yellow",
          borderColor: "green",
          borderWidth: 1,
          data: dataArrays[2],
          
        }
      ]
  }
  
  const config={
    type: "line",
    data: data,
    options: {
          responsive: true,
          
          plugins: {
              title: {
                  display: true,
                  text: 'US CO2 Emissions'
              },
              legend: {
            
                position: "top",
                  labels: {
                      usePointStyle:true,
                      
                  }
              }
          },
          scales: {
              y: {
                  min: 0,
                  max: 500,
                  display: true,
                  title: {
                    display: true,
                    text: 'million metric tons CO2'
                  }
                }
          }
        }
   };
    const ctx = document.getElementById('myChart');
    new Chart(ctx, config);
})    

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
        return dataObj.response.data.map(function(el){
      // console.log(el.value)
      return el.value
    }
    ).reverse();
    }));
}).then(function(dataArrays){
  const labels = [];

  for (var i = 1970; i <= 2020; i++) {
     labels.push(i);
  }
  
  Chart.defaults.font.size = 18;
  Chart.defaults.color = '#000000';
  const data ={
          labels:labels,
      datasets: [
        {
          label: "coal",
          backgroundColor: "#ff33cf",
          borderColor: "#ff33cf",
          borderWidth: 1,
          data: dataArrays[0],
          pointStyle: 'rectRot'
        },
        {
          label:"petroleum",
          backgroundColor: "#6a33ff",
          borderColor: "#6a33ff",
          borderWidth: 1,
          data: dataArrays[1],
          pointStyle: 'rectRot'
        },
        {
          label: "natural gas",
          backgroundColor: "#ff9033",
          borderColor: "#ff9033",
          borderWidth: 1,
          data: dataArrays[2],
          pointStyle: 'rectRot'
        }
      ]
  }
  
  const config={
    type: "line",
    data: data,
    options: {
          responsive: true,
          
          plugins: {
              title: {
                  display: true,
                  text: stateFuel + ' CO2 Emissions'
              },
              legend: {
            
                position: "top",
                  labels: {
                      usePointStyle:true,
                      
                  }
              }
          },
          scales: {
              y: {
                  min: 0,
                  max: 500,
                  display: true,
                  title: {
                    display: true,
                    text: 'million metric tons CO2'
                  }
                }
          }
        }
   };
    const ctx2 = document.getElementById('myChart2');
    new Chart(ctx2, config);
})    
 
document.getElementById('dropdown4').onchange = function() {
  localStorage.setItem('choice', document.getElementById('dropdown4').value);
};

if (localStorage.getItem('choice')) {
  document.getElementById('dropdown4').value=localStorage.getItem('choice');
}

}


getData()


