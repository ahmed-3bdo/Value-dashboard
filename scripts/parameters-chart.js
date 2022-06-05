var options = {
    series: [204, 13, 704, 300, 404],
    chart: {
    height: 286,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      track: {
        show: true,
        background: '#f2f2f2',
      },
      dataLabels: {
        name: {
          fontSize: '22px',
          // color: "#636363",
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Core Value',
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 1700
          }
        },
      },
    }
  },
  fill: {
    type: 'gradient',
    colors: ['#0096ab' , '#0096ab', '#0096ab', '#0096ab', '#0096ab'],
  },
  labels: ['Countries', 'Sectors', 'Companies', `Comp Without Values`, 'Com Without Values'],
  };
  
  var chart = new ApexCharts(document.querySelector("#parameters-chart"), options);
  chart.render();
  
  
  