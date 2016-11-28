//
var fs = require('fs');
var q = require('q');
var readFile = q.denodeify(fs.readFile);

var proc_cpu ="/proc/stat";

/**
   user/nice/system/idle/iowait/irq/softirq/steal
--------------------------------------------
cpu  3455 241 1432 182120 1632 0 23 721 0 0
cpu0 3455 241 1432 182120 1632 0 23 721 0 0
*/


function rawdata() {
  return readFile(proc_cpu, 'ascii').then(function(data) {
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
  }, function(reason) {
    return reason;
  });
}

rawdata().then(function(data) {
  console.log(data);
});
