var retab = require('../');

describe('retab', function () {
  it('should expose a function', function () {
    retab.should.be.a.function;
  });

  it('should throw an error if no file is passed', function () {
    (function () {
      retab();
    }).should.throw('You must specify a file or files.');
  });

  it('should throw an error for invalid tab size', function () {
    (function () {
      retab('test.js');
    }).should.throw('You must specify a valid tab size.');
  });

});
