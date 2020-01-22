const fs = require('fs');
const path = require('path');
const { version } = require('../package');

fs.writeFileSync(path.join(__dirname, '../src/build-info.json'), JSON.stringify({
  version,
  buildTIme: new Date().toLocaleString(),
}));
