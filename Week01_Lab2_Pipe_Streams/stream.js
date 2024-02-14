const fs = require('fs');

const readStream = fs.createReadStream('input_stream.txt')
const writeDataToStream = fs.createWriteStream('write_stream.txt')
//Read Stream data
readStream.on('data', (chunk) => {
    console.log(`Type of chunk: ', ${typeof chunk}`)
    console.log(chunk.toString());
    const newData = chunk.toString().split(' ').join('*').toString()
    writeDataToStream.write(newData)
})  

//Read Stream end
readStream.on('end', () => {
    console.log('End of stream');
    writeDataToStream.end()
})

//Read Stream error
readStream.on('error', (err) => {
    console.log('Error: ', err);
})

//Write Stream
const writeStream = fs.createWriteStream('output_stream.txt')
writeStream.write('Welcome to GBC!\n')
writeStream.write('The best college!\n')
writeStream.end()
// writeStream.write('Pritesh  Patel\n')//This will not be written after end()

writeStream.on('finish', () => {
    console.log('Write success!');
})

writeStream.on('error', (err) => {  
    console.log('Error: ', err);
})

