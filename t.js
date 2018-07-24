const {contentTypes: {
        INSIGHT
    }} = require('@enkidevs/curriculum-helpers');
const {getParser} = require('@enkidevs/curriculum-parser');
const {getCompiler: getJSONCompiler} = require('@enkidevs/curriculum-compiler-json');
const {getCompiler: getStringCompiler} = require('@enkidevs/curriculum-compiler-string');

const stringCompiler = getStringCompiler(INSIGHT);
const jsonCompiler = getJSONCompiler(INSIGHT);
const parser = getParser(INSIGHT);

console.assert(sampleInsight === stringCompiler.compileSync(astCompiler(jsonCompiler.compileSync(parser.parseSync(sampleInsight)))), 'works!');

// some might find it more readable with composition

console.assert(equal(sampleInsight, compose(stringCompiler.compileSync, astCompiler, jsonCompiler.compileSync, parser.parseSync)(sampleInsight)), 'works');

function astCompiler(json) {
    // ... returns AST
}