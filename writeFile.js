const fs = require('fs').promises;
module.exports = (pathFile, data) =>{
    fs.writeFile(pathFile,data, {flag:'w',encoding:'utf8'});
}
