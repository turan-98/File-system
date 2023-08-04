const fs = require('fs').promises;
module.exports = (pathFilhe) => fs.readFile(pathFilhe, 'utf-8');
