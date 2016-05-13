var jquery = require('../lib/jquery-html.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['awesome'] = {
  setUp: function(done) {
    done();
  },
  'create-default': function(test) {
    test.expect(1);

    jquery.create(function (window,$,free)
    {
       test.equal($('body').length, 1, 'should be 1');
       free(); 
       test.done();
    });
  },
  'create-source': function(test) {
    test.expect(1);

    jquery.create('<!DOCTYPE html>\n<html><body><div id="me"></div></body></html>',function (window,$,free)
    {
       test.equal($('div#me').length, 1, 'should be 1');
       free(); 
       test.done();
    });
  },
  'source': function(test) {
    test.expect(1);

    jquery.create(function (window,$,free)
    {
       $('body').append('ciao');
       test.equal(jquery.source(window), '<!DOCTYPE html>\n<html><body>ciao</body></html>', 'should contain ciao');
       free(); 
       test.done();
    });
  }
};
