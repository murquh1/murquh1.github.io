let projectArray = [
  1,
  'http://arcg.is/2GhrICS',
  'Las Vegas Tour',
  'Map of famous Las Vegas locations',
  true,
  ['gambling', 'casino', 'hotels', 'vegas']
]

let projectObject = {
  id: 1,
  url: 'http://arcg.is/2GhrICS',
  title: 'Las Vegas Tour',
  desc: 'Map of famous Las Vegas locations',
  thumb: true,
  keywords: [
    'gambling',
    'casino',
    'hotels',
    'vegas'
  ]
}

console.log(projectArray[5])
console.log(projectObject.keywords)
console.log(projectObject["keywords"])
