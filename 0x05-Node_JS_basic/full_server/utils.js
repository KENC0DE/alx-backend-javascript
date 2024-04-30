const fs = require('fs');

async function readDatabase(dbName) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbName, 'utf8', (err, data) => {
      if (err) {
        reject(err);
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
      resolve(fields);
    });
  });
}

module.exports = readDatabase;
