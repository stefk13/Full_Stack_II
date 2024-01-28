const fs = require('fs');

async function appendData(str){
    try{
        await fs.writeFile('data.txt', str, () => {flag:'a'})
    }catch(err){
        if (err){
            console.log('The file has been saved!');
        }
    }
}

const  str = 'Toronto is the capital of Ontario.'
appendData(str);

//Delete file
fs.unlink('data.txt', (err) => {
    if (err) throw err;
    console.log('data.txt was deleted');
})
// fs.unlinkSync('data.txt');