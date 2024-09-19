function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8').split('\n');
        const fields = {};
        const students = {};
        let count = 0;

        // for (const line of data) {
        //     if (line) {
        //         count++;
        //         const student = line.split(',');
        //         if (!fields[student[3]]) fields[student[3]] = [];
        //         fields[student[3]].push(student[0]);
        //         students[student[3]] = (students[student[3]] || 0) + 1;
        //     }
        // }

        // console.log(`Number of students: ${count}`);
        // for (const field in fields) {
        //     if (field) {
        //         const list = fields[field];
        //         console.log(`Number of students in ${field}: ${students[field]}. List: ${list.join(', ')}`);
        //     }
        // }
    }
    catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
