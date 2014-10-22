var Transform = require('readable-stream').Transform;
var util      = require('util');

function Retab(file) {
  if (!(this instanceof Retab)) {
    return new Retab(file);
  }

  Transform.call(this);
}

util.inherits(Retab, Transform);

Retab.prototype._transform = function (chunk, encoding, fn) {
  console.log(chunk);

  // data.toString()
  //   .replace(/^\s+/, function (m) {
  //     return m.replace(/\s/g, '.');
  //   })
  fn();
};

module.exports = Retab;
