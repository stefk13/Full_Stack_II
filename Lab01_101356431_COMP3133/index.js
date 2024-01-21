console.log('Week 02 - FS module and streams - Lab\nStefan Kepinski - 101356431\n')

const fs = require('fs')
const csv = require('csv-parser')

const readStream = fs.createReadStream('input_countries.csv')

const canadaOutput = 'canada.txt'
const usaOutput = 'usa.txt'

if (fs.existsSync(canadaOutput)) {
    fs.unlinkSync(canadaOutput)
    fs.writeFileSync(canadaOutput, 'Country,Year,Population\n\n')
} 

if (fs.existsSync(usaOutput)) {
    fs.unlinkSync(usaOutput)
    fs.writeFileSync(usaOutput, 'Country,Year,Population\n\n')
}

readStream.pipe(csv()).on('data', (row) => {
    const country = row['country']
    if (country === 'Canada') {
        fs.appendFileSync(canadaOutput, `${country},${row['year']},${row['population']}\n`)
    } else if (country === 'United States') {
        fs.appendFileSync(usaOutput, `${country},${row['year']},${row['population']}\n`)
    }
})

readStream.on('error', (err) => {  
    console.log('Error: ', err)
})

