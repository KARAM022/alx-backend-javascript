/**
 * CMNT: This is a simple function that takes a message and logs it to the console.
 * @param {*} path
 */
function countStudents(path) {
  /**
   * CMNT: This is a simple function that takes a message and logs it to the console.
   * @param {*} path
   */
  try {
    const fs = require('fs');
    const data1 = fs.readFileSync(path, 'utf8').split('\n');
    const fields = {};
    const students = {};
    let count = 0;
    let data = data1.map(line => line.replace('\r', ''));
    data.shift();

    for (const line of data) {
      if (line) {
        count++;
        const student = line.split(',');
        if (!fields[student[3]]) fields[student[3]] = [];
        fields[student[3]].push(student[0]);
        students[student[3]] = (students[student[3]] || 0) + 1;
      }
    }

    console.log(`Number of students: ${count}`);
    for (const field in fields) {
      if (field) {
        const list = fields[field];
        const res = 'Number of students in ' + field + ': ' + students[field] + '. List: ' + list.join(', ');
        console.log(res);
      }
    }
  }
  catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
