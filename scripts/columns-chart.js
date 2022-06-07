var options = {
    series: [{
    name: 'Inflation',
    data: [1398, 826, 819, 709, 610, 539, 397, 310, 307, 284]
  }],
    chart: {
    height: 250,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val ;
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#00ebe3"]
    }
  },
  
  xaxis: {
    categories: ["Integrity", "Integrity", "Respect", "Teamwork", "Excellence", "Accountability", "Commitment", "Quality", "Transparency", "Honesty"],
    position: 'top',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {

      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      gradientToColors: ['#00ebe3'],
      shadeIntensity: 1,
      type: 'horizontal',
      opacityFrom: .9,
      opacityTo: 1,
      stops: [0, 100, 100, 100]
    },
  },
  title: {
    text: 'Monthly Inflation in Argentina, 2002',
    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
      color: '#444'
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#columns-chart"), options);
  chart.render();

