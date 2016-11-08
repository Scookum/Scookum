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

// console.log(doc);


var syntax = doc.syntax;

var lexdef = {lex: {rules: [] } };
var bnfdef = {bnf: {} };

syntax.forEach(function(grammer) {
  Object.keys(grammer).forEach(function(key) {
    if (/[A-Z].*/.test(key)) {
      var action = "return '" + key + "';";
      lexdef.lex.rules.push([grammer[key], action]);
    } else if (/[a-z].*/.test(key)) {
      var action = "$$ = $1;";
      if (! bnfdef.bnf[key] ) {
	bnfdef.bnf[key] = [];
      }
      var newgr = bnfdef.bnf[key].concat(grammer[key]);
      bnfdef.bnf[key] = newgr;
    } else if (key === '_o_left') {
    } else if (key === '_o_right') {
    }
  });
});


// console.log(lexdef);
// console.log(lexdef.lex.rules);
// console.log(bnfdef);

var jison = reuiqre('jison');


