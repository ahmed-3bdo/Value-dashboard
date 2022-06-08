// Bench Mark Page Charts
/* #1 Radial Compare Chart */
var options = {
    series: [75],
    chart: {
    height: 200,
    type: 'radialBar',
    toolbar: {
        show: true
    }
    },
    plotOptions: {
    radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
        margin: 0,
        size: '70%',
        background: 'rgb(0, 39, 109)',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
        }
        },
        track: {
        background: 'rgb(0, 3, 32)',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
        }
        },
    
        dataLabels: {
        show: true,
        name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px'
        },
        value: {
            formatter: function(val) {
            return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: true,
        }
        }
    }
    },
    fill: {
    type: 'gradient',
    gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
    }
    },
    stroke: {
    lineCap: 'round'
    },
    labels: ['Percent'],
    };

    var chart = new ApexCharts(document.querySelector("#benchmark-percentage-chart"), options);
    chart.render();


///////////////////////////////////////
/* #1 Radial Compare Chart */
var options = {
    series: [75],
    chart: {
    height: 200,
    type: 'radialBar',
    toolbar: {
        show: true
    }
    },
    plotOptions: {
    radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
        margin: 0,
        size: '70%',
        background: 'rgb(0, 39, 109)',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
        }
        },
        track: {
        background: 'rgb(0, 3, 32)',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
        }
        },
    
        dataLabels: {
        show: true,
        name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px'
        },
        value: {
            formatter: function(val) {
            return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: true,
        }
        }
    }
    },
    fill: {
    type: 'gradient',
    gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
    }
    },
    stroke: {
    lineCap: 'round'
    },
    labels: ['Percent'],
    };

    var chart = new ApexCharts(document.querySelector("#benchmark-percentage-chart-2"), options);
    chart.render();


///////////////////////////////////////
/* #1 Line, Bars & Areas Chart */
var options = {
    series: [{
    name: 'TEAM A',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  }, {
    name: 'TEAM B',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }, {
    name: 'TEAM C',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }],
    chart: {
    height: 366,
    type: 'line',
    stacked: false,
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
    '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
  ],
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    title: {
      text: 'Points',
    },
    min: 0
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
  
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#benchmark-line-mix-chart"), options);
  chart.render();

