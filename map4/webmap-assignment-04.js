function coolmap4 () {
  let mymap = L.map('coolmap4').setView([39, -98], 4)

  L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(mymap)

  function mapStyle (feature) {
    let household = feature.properties.AVE_HH_SZ
    let stateColor = 'darkblue'
    if (household < 2.58) { stateColor = 'red' }
    let mapStyle = {
      color: stateColor,
      weight: 2,
      fillOpacity: 0.5
    }
    return mapStyle
  }

  function myPopup (feature, layer) {
    let name = feature.properties.STATE_NAME
    let household = feature.properties.AVE_HH_SZ
    layer.bindPopup('Average household size of ' + name + ': ' + household + '<br>National average: 2.58')
  }

  let mapOptions = {
    style: mapStyle,
    onEachFeature: myPopup
  }

  L.geoJSON(USmap, mapOptions).addTo(mymap)
}
coolmap4()
