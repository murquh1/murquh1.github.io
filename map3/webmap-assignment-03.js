function coolmap3 () {
  let mymap = L.map('coolmap3').setView([27.98, 86.92], 5)

  L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(mymap)

  let myMountain = L.icon({
  iconUrl: 'mountain2.png',
  shadowUrl: 'mountainshadow.png',
  iconSize: [40, 50],
  shadowSize: [45, 55],
  iconAnchor: [20, 30],
  shadowAnchor: [22, 28],
  popupAnchor: [0, 0]
  })

  let marker = L.marker([27.98, 86.92], {icon: myMountain}).addTo(mymap)

  let myStyle = {
    color: 'pink',
    fillColor: 'black'
  }
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
  let polygon = L.polygon(polylat, myStyle).addTo(mymap)

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
  let polyline = L.polyline(latlngs, {color: 'purple'}).addTo(mymap)

}
coolmap3()
