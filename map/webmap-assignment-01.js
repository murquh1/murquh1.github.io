function coolmap () {
  let mymap = L.map('coolmap').setView([27.98, 86.92], 5)

  L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(mymap)

  let marker = L.marker([27.98, 86.92]).addTo(mymap)

  let polylat = [
    [32.50, 76.50],
    [30.25, 78.00],
    [28.0, 83.00],
    [26.75, 89.00],
    [27.25, 94.00],
    [28.50, 96.00],
    [29.50, 95.00],
    [28.00, 93.00],
    [28.00, 88.00],
    [28.50, 85.00],
    [29.50, 83.00],
    [30.50, 80.00],
  ];
  let polygon = L.polygon(polylat, {color: 'orange'}).addTo(mymap)

  polygon.bindPopup('Himalayas mountain range')
  marker.bindPopup('Mt. Everest')

  mymap.on('click', function (event) {
    console.log('You clicked the map at ' + event.latlng)
  })

  let latlngs = [
    [31.75, 77.25],
    [30.00, 80.00],
    [28.75, 83.00],
    [27.75, 86.00],
    [27.25, 89.00],
    [27.50, 91.00],
    [27.50, 93.00],
    [28.75, 95.25],
  ];
  let polyline = L.polyline(latlngs, {color: 'red'}).addTo(mymap)

}
coolmap()
