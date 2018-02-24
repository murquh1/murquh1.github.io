let projectArray = [
  1,
  'http://arcg.is/2GhrICS',
  'Las Vegas Tour',
  'Map of very famous Las Vegas locations',
  true,
  ['gambling', 'casino', 'hotels', 'vegas']
]

let projectObject = {
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

console.log(projectArray[3])
console.log(projectObject.desc)
console.log(projectObject["desc"])
