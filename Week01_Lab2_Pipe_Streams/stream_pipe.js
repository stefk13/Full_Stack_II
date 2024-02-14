const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('input_stream.txt')
const writeDataToStream = fs.createWriteStream('write_stream.txt')

//Read Stream data and write to another file using pipe
readStream.pipe(writeDataToStream)

//Compress the file
readStream.pipe(zlib.createGzip())
          .pipe(fs.createWriteStream('input_stream.txt.gz'))