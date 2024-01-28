const fs = require('fs');

//r = read, w = write, a = append, r+ = read and write
//w+ = read and write, a+ = read and append
//ws = write and sync, rs = read and sync
//wx = write and exclusive, rs+ = read and sync
//wx+ = write and exclusive, w+ = read and write
fs.open('data.txt', 'r+', (err, fd) => {
    if (err) throw err;
    console.log('File opened successfully!');

    // fs.read(fd, (err, data) => {
    //     if (err) throw err;

    //     console.log(`Type of data: ${typeof data}`);
    //     console.log(data);
    // })

    const bufferData = Buffer.alloc(10);
    fs.read(fd, bufferData, 0, bufferData.length, 0, (err, data) => {
        if (err) throw err;

        console.log(`Type of data: ${typeof bufferData}`);
        console.log(bufferData);
        console.log(bufferData.toString());
    })

    fs.write(fd, Buffer.from('Welcome to GBC!'), (err) => {
        if (err) throw err;
        console.log('Write success!');
    })
   

    fs.close(fd, (err) => {
        if (err) throw err;
        console.log('File closed successfully!');
    });
})