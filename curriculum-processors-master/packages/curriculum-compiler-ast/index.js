const parse = require('json-to-ast');
const json = require("../curriculum-compiler-json/index");

const settings = {
  // Appends location information. Default is <true>
  loc: true,
  // Appends source information to node’s location. Default is <null>
  source: 'data.json'
};

parse(json, settings);