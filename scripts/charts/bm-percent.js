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