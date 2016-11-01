/**
 * testing simple jison format notation...
 */

/**
 * Rules
 * 1. I use Jison (or Jison-semi-passive) as parser engine.
 * 2. I convert simple syntax notation into Jison syntax(json style).
 * 3. Simple syntax notation is written in yaml(or json).
 * 4. In simple syntax notation, lexical definition MUST start with upper case letter.
 * 5. Otherwise 4. it assumed as bnf definition.
 */

var yaml = require('js-yaml');
var fs = require('fs');

var doc = yaml.safeLoad(fs.readFileSync('./simplesyntax.yaml', 'utf8'));

console.log(doc);
