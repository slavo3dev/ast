// JSON to AST Parser

let fs = require('fs');
let retext = require('retext');
let report = require('vfile-reporter');
let spacing = require('./index.js');

let doc = fs.readFileSync('enki.json');

retext()
    .use(spacing)
    .process(doc, function (err, file) {
        console.error(report(err || file));
    });