function map1 () {
  // create a map object
  let mymap = L.map('map1').setView([51.505, -0.09], 13)

  // create basemap layer
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'your.mapbox.access.token'
  }).addTo(mymap);
  
  // place a marker feature at a location
  let marker = L.marker([51.5, -0.09]).addTo(mymap)

  // draw a shape feature with vertices at the specified coordinates
  let polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
  ]).addTo(mymap)

  // add popups to the features drawn on the map
  polygon.bindPopup('St. Katharine\'s and Wapping')
  marker.bindPopup('London Bridge Station')

  // create an even listener that logs the locations of map clicks
  mymap.on('click', function (event) {
    console.log('You clicked the map at ' + event.latlng)
  })

  // TO COMPLETE: create a line feature
}
map1()
