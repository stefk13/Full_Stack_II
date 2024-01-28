const fs = require('fs');
const student_file_name = 'student.csv';

function addTitle(){
    const title="sid,fnm,lnm,city"
    fs.writeFileSync(student_file_name,title);
    //fs.writeFile(student_file_name,title, () => {flag:'a'})
}

function addStudent(sid,fnm,lnm,city){
    const student = `\n${sid},${fnm},${lnm},${city}`;
    fs.appendFileSync(student_file_name,student);
}

addTitle();
addStudent(1,'John','Smith','Toronto');
addStudent(2,'Jane','Doe','Toronto');
addStudent(3,'Mary','Brown','Toronto');

//Read file
fs.readFile(student_file_name, 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ', err)
  } else {
    console.log(data)
    console.log(`Type of data: ${typeof data}`)
    //String manipulation
    data.split('\n').forEach((line) => {
        console.log(line.split(','));
    })
  }
})
