console.log('Week 02 - FS module and streams')
var fs = require('fs')

//Read file
fs.readFile('data.txt', 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ', err)
  } else {
    console.log('1 Data: ', data)
  }
})
console.log('1 End')
var data = fs.readFileSync('data.txt', 'utf8')
console.log('2 Data: ', data)
console.log('2 End')

//Write file
// const str = 'Welcome to GBC!'
// fs.writeFile('data.txt', str,  (err) => {
//   if (err) {
//     console.log('Error: ', err)
//   } else {
//     console.log('Write success!')
//   }
// })
// console.log('1 Write End')
// var data = fs.writeFileSync('data.txt', str);

//Append file
var newData = ' - The best college!'
fs.appendFile('data.txt', newData,  (err) => {
  if (err) {
    console.log('Error: ', err)
  } else {
    console.log('Append success!')
  }
})

// var data = fs.appendFileSync('data.txt', newData);