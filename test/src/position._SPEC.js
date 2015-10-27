'use strict';

var expect = require('chai').expect,
	rfr = require('rfr');

var Position = rfr('src/position');

describe('Position()', function() {

	var config, pos;

	beforeEach(function() {
		config = {x: 3, y: 4};
		pos = new Position(config);
	});
	
	it('We can construct.', function() {
		expect(pos).to.be.ok;
		expect(pos.config).to.equal(config);
	});

	it('We can access via get.', function() {
		expect(pos.get('x')).to.equal(config.x);
		expect(pos.get('y')).to.equal(config.y);
	});

	it('We can access via set.', function() {
		pos.set('x', 4);
		expect(pos.get('x')).to.equal(4);
		pos.set('y', 5);
		expect(pos.get('y')).to.equal(5);

		config = {x: 6, y: 7};
		pos.set(config);
		expect(pos.get('x')).to.equal(config.x);
		expect(pos.get('y')).to.equal(config.y);
	});

	it('We can clone.', function() {
		var clonePos = pos.clone();

		expect(clonePos).to.not.equal(pos);
		expect(clonePos.get('x')).to.equal(pos.get('x'));
		expect(clonePos.get('y')).to.equal(pos.get('y'));
	});

	it('We can clone and extend.', function() {

		// Check extend works as expected.
		var newConfig = { x: 7 };
		var newPos = pos.cloneExtend(newConfig);

		expect(newPos.get('x')).to.equal(newConfig.x);
		expect(newPos.get('y')).to.equal(pos.get('y'));


		// Initial pos object is unaffected
		expect(pos.get('x')).to.equal(config.x);
		expect(pos.get('y')).to.equal(config.y);
	});
});