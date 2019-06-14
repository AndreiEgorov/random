const path = require("path");
//when importing the path it any file just start constructing a path from root dir
module.exports = path.dirname(process.mainModule.filename)
