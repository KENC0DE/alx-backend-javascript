const fs = require('fs');

async function countStudents(dbName) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbName, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const stdList = data.split('\n').slice(1, -1);
      const ldb = [];
      const fields = {};
      for (const l of stdList) {
        const temp = l.split(',');
        ldb.push(temp);
        fields[temp[temp.length - 1]] = [];
      }
      for (const s of ldb) {
        if (s[s.length - 1] === 'CS') fields.CS.push(s[0]);
        else if (s[s.length - 1] === 'SWE') fields.SWE.push(s[0]);
      }
      const info = {
        count: stdList.length,
        cs: {
          count: fields.CS.length,
          names: fields.CS.join(', '),
        },
        swe: {
          count: fields.SWE.length,
          names: fields.SWE.join(', '),
        },
      };
      console.log(`Number of students: ${info.count}`);
      console.log(`Number of students in CS: ${info.cs.count}. List: ${info.cs.names}`);
      console.log(`Number of students in SWE: ${info.swe.count}. List: ${info.swe.names}`);

      resolve();
    });
  });
}

module.exports = countStudents;
