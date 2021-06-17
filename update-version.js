var replace = require('replace-in-file');
var ngplPackage = require("./projects/ngpl/package.json");
console.log(ngplPackage);

var buildVersion = ngplPackage.version;
const options = {
  files: './package.json',
  from: /version: '(.*)'/g,
  to: "version: '" + buildVersion + "'",
  allowEmptyPaths: false,
};

try {
  let changedFiles = replace.sync(options);
  if (changedFiles == 0) {
    throw "Please make sure that file '" + options.files + "' has \"version: ''\"";
  }
  console.log('Build version set: ' + buildVersion);
} catch (error) {
  console.error('Error occurred:', error);
  throw error
}
