let project1 = {
  id: 1,
  url: 'http://arcg.is/2GhrICS',
  title: 'Las Vegas Tour',
  desc: 'Map of very famous Las Vegas locations',
  thumb: true,
  keywords: [
    'gambling',
    'casino',
    'hotels',
    'vegas'
  ]
}

let project2 = {
  id: 2,
  url: 'https://arcg.is/14qj9v',
  title: 'Past Day Earthquakes',
  desc: 'Map showing all earthquakes within the past 24 hours greater than 2.5 magnitude',
  thumb: true,
  keywords: [
    'earthquakes',
    'map',
    '2.5+ magnitude'
  ]
}

let projects = [
  project1,
  project2
]

for (let i = 0; i < projects.length; i++) {
  console.log('Project ' + projects[i].id + ' title: ' + projects[i].title)
  console.log('Project ' + projects[i].id + ' URL: ' + projects[i].url)
  console.log('Project ' + projects[i].id + ' description: ' + projects[i].desc)
    if (projects[i].thumb === true) {
      console.log('Project ' + projects[i].id + ' thumbnail:' + ' images/ss-project-' + projects[i].id + '.png')
  }
}
