import nconf from "nconf";
import path from "path";

nconf.argv()
    .env()
    .file(process.env.NODE_ENV, path.join(__dirname, './',process.env.NODE_ENV + '.json'))
    .file('default', path.join(__dirname, './default.json'));

module.exports = nconf;
