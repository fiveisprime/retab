var fs    = require('fs');
var path  = require('path');

var split   = require('split');
var through = require('through');

module.exports = function (file, tabSize) {
  var files, tab = '';

  if (!file) {
    throw new Error('You must specify a file or files.');
  }

  if (typeof tabSize !== 'number') {
    throw new Error('You must specify a valid tab size.');
  }

  while (tab.length < tabSize) {
    tab += ' ';
  }

  files = [file];

  if (file.indexOf(' ') >= 0) {
    files = file.split(' ');
  }

  files.forEach(function (f) {
    fs.createReadStream(path.resolve(f))
      .pipe(split())
      .pipe(through(function (data) {
        this.queue(data.replace(/^\s+/, function (m) {
          return m.replace(/\s{4}/, tab);
        }) + '\n');
      }))
      .pipe(process.stdout);
  });
};
