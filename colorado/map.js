function coloradoMap () {
  let mainMap = L.map('coloradoMap').setView([39, -106], 7)

  let MattBase1 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png')
  let MattBase3 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(mainMap)
  let MattBase2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')

  let MattBasemaps = {
    'Black and White': MattBase3,
    'Topographic': MattBase1,
    'Satellite': MattBase2
  }

  function circleStyle (feature) {
    let mountHeight = feature.properties.height
    let symbolColor = '#ff1900'
    if (mountHeight < 14400) { symbolColor = '#ff9e16' }
    if (mountHeight < 14250) { symbolColor = '#ffff00'}
    if (mountHeight < 14100) { symbolColor = '#7cdd75'}
    let circleStyle = {
      color: symbolColor,
      radius: 4,
      fillOpacity: 100
    }
    return circleStyle
  }

  function makeCircles (feature, latlng) {
    return L.circleMarker(latlng, circleStyle)
  }

  function layerPopup (feature, layer) {
    let mountName = feature.properties.name
    let mountHeight = feature.properties.height
    let mountProminence = feature.properties.prominence
    layer.bindPopup ('Name: ' + mountName + '<br>Height: ' + mountHeight + ' ft' + '<br>Prominence: ' + mountProminence + ' ft')
  }

  let layerSettings = {
    style: circleStyle,
    pointToLayer: makeCircles,
    onEachFeature: layerPopup
  }

  L.control.layers(MattBasemaps).addTo(mainMap)
  L.geoJSON(coPeaksThree, layerSettings).addTo(mainMap)
}

coloradoMap()
