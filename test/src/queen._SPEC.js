'use strict';

var expect = require('chai').expect,
	rfr = require('rfr');

var Queen = rfr('src/queen');

describe('Queen()', function() {

	var queen = new Queen({
		x: 4,
		y: 5
	});

	it('We can construct.', function() {

		expect(queen).to.be.ok;
		expect(queen.position.get('x')).to.equal(4);
		expect(queen.position.get('y')).to.equal(5);

	});
});