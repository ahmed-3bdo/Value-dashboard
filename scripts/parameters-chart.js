var options = {
    series: [50, 70, 120, 150, 80],
    chart: {
    height: 286,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      track: {
        show: true,
        background: '#f2f2f2',
        width: 100,
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
    colors: ['#1C9FD6' , '#0A2F85', '#14A9BC', '#6E7C82', '#24C6C8'],
  },
  labels: ['Countries', 'Sectors', 'Companies', `Without Values(Co.)`, 'Without Values(Co.)'],
  };
  
  var chart = new ApexCharts(document.querySelector("#parameters-chart"), options);
  chart.render();
  
  
  