const path = require('path');
const fs = require('fs');

let data = fs.readFileSync(path.join(__dirname, '../dist/service-worker.js'))
  .toString();
data = data.replace('https://storage.googleapis.com', '.');
fs.writeFileSync(path.join(__dirname, '../dist/service-worker.js'), data);
