//
var fs = require('fs');
var q = require('q');
var readFile = q.denodeify(fs.readFile);

var taskdef = {
  type: 'cumulative',
  infile: "/proc/stat",
  filter: function(data) {
    var lines = data.split('\n');
    var cpus = [];
    lines.forEach(function(line) {
      var record = line.split(/\s+/);
      if (/cpu[0-9]*/.test(record[0])) {
	cpus.push({
	  source: record[0],
	  user: record[1],
	  nice: record[2],
	  sys: record[3],
	  idle: record[4],
	  iowait: record[5],
	  irq: record[6],
	  softirq: record[7],
	  steal: record[8]
	});
      }
    });
    return cpus;
  },
};


var TaskRunner = function TaskRunner() {
};

var _TaskRunner_constructor = TaskRunner.prototype.constructor;
TaskRunner.prototype = {
  
};
TaskRunner.prototype.constructor = _TaskRunner_constructor;

/**
   user/nice/system/idle/iowait/irq/softirq/steal
--------------------------------------------
cpu  3455 241 1432 182120 1632 0 23 721 0 0
cpu0 3455 241 1432 182120 1632 0 23 721 0 0
*/

