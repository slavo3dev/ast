const parse = require('json-to-ast');

const settings = {
    // Appends location information. Default is <true>
    loc: true,
    // Appends source information to node’s location. Default is <null>
    source: 'data.json'
};

console.log(parse('{"a": 1}', settings));