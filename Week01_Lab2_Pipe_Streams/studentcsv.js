const fs = require('fs');
const student_file_name = 'student.csv';

function addTitle(){
    const title="sid,fnm,lnm,city"
    fs.writeSync(student_file_name,title);
}

function addStudent(sid,fnm,lnm,city){
    const student = `${sid},${fnm},${lnm},${city}`;
    fs.appendFileSync(student_file_name,student);
}

addTitle();
addStudent(1,'John','Smith','Toronto');
addStudent(2,'Jane','Doe','Toronto');
addStudent(3,'Mary','Brown','Toronto');
