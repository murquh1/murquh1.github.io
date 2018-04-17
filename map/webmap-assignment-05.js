function coolmap5 () {
  let MattMap = L.map('coolmap5').setView([39, -98], 4)

  let MattBase1 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(MattMap)
  let MattBase2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
  let MattBase3 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png')

  let MattBasemaps = {
    'Topographic': MattBase1,
    'Satellite': MattBase2,
    'Black and White': MattBase3
  }

  L.control.layers(MattBasemaps).addTo(MattMap)
}

coolmap5()
