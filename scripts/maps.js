var gdpData = {
  "AF": 16.63,
  "AL": 11.58,
  "DZ": 158.97,
  "EG": 256,
  "LY": 280
};

$('#world-map').vectorMap({
  zoomOnScroll: true,
  map: 'world_mill',
  regionStyle: {
    initial: {
      fill: '#00ebe3',
      "fill-opacity": 1,
      stroke: 'none',
      "stroke-width": 0,
      "stroke-opacity": 1
    },
    hover: {
      "fill-opacity": 0.8,
      cursor: 'pointer'
    },
    selected: {
      fill: 'yellow'
    },
    selectedHover: {
    }
  },
  series: {
    regions: [{
      values: gdpData,
      scale: ['#C8EEFF', '#0071A4'],
      normalizeFunction: 'polynomial'
    }]
  },
  onRegionTipShow: function(e, el, code){
    el.html(el.html()+' (GDP - '+gdpData[code]+')');
  }
});