const fs = require('fs');
const zlib = require('zlib');
<<<<<<< HEAD:Week01_Lab2_Pipe_Streams/stream_pipe.js
=======
const { Transform } = require('stream') //Custom pipe
>>>>>>> 5c73f60650a9c20375c6d7d2f6e5dfde34bf8603:Week02_Lab2_Pipe_Streams/stream_pipe.js

const readStream = fs.createReadStream('input_stream.txt')
const writeDataToStream = fs.createWriteStream('write_stream.txt')

//Read Stream data and write to another file using pipe
readStream.pipe(writeDataToStream)

//Compress the file
readStream.pipe(zlib.createGzip())
<<<<<<< HEAD:Week01_Lab2_Pipe_Streams/stream_pipe.js
          .pipe(fs.createWriteStream('input_stream.txt.gz'))
=======
          .pipe(fs.createWriteStream('input_stream.txt.gz'))

//Custom pipe
//Ref: https://dev.to/humanfriend22/custom-parser-for-pipe-streams-in-nodejs-2f85
const upperCaseTransform = new Transform({
    transform: (chunk, encoding, done) => {
        const result = chunk.toString().toUpperCase()
        done(null, result)
    }
})

fs.createReadStream('input_stream.txt')
    .pipe(upperCaseTransform)
    .pipe(fs.createWriteStream('custom_output.txt'))
>>>>>>> 5c73f60650a9c20375c6d7d2f6e5dfde34bf8603:Week02_Lab2_Pipe_Streams/stream_pipe.js
