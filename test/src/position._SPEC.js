'use strict';

var expect = require('chai').expect,
	rfr = require('rfr');

var Position = rfr('src/position'),
	Board = rfr('src/board');

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

	it('We can check identity.', function() {

		var samePos = new Position({x: 3, y: 4});
		expect(pos.isSameAs(samePos)).to.be.true;

		var diffPos = new Position({x: 2, y: 4});
		expect(pos.isSameAs(diffPos)).to.be.false;
	});

	it('We can get neighbors...', function() {

		var northNeighbor = pos.getNeighbor('north');
		expect(northNeighbor.get('x')).to.equal(3);
		expect(northNeighbor.get('y')).to.equal(5);

		var southNeighbor = pos.getNeighbor('south');
		expect(southNeighbor.get('x')).to.equal(3);
		expect(southNeighbor.get('y')).to.equal(3);

		var eastNeighbor = pos.getNeighbor('east');
		expect(eastNeighbor.get('x')).to.equal(4);
		expect(eastNeighbor.get('y')).to.equal(4);

		var westNeighbor = pos.getNeighbor('west');
		expect(westNeighbor.get('x')).to.equal(2);
		expect(westNeighbor.get('y')).to.equal(4);

		var northEastNeighbor = pos.getNeighbor('northeast');
		expect(northEastNeighbor.get('x')).to.equal(4);
		expect(northEastNeighbor.get('y')).to.equal(5);

		var southWestNeighbor = pos.getNeighbor('southwest');
		expect(southWestNeighbor.get('x')).to.equal(2);
		expect(southWestNeighbor.get('y')).to.equal(3);

		var northWestNeighbor = pos.getNeighbor('northwest');
		expect(northWestNeighbor.get('x')).to.equal(2);
		expect(northWestNeighbor.get('y')).to.equal(5);

		var southEastNeighbor = pos.getNeighbor('southeast');
		expect(southEastNeighbor.get('x')).to.equal(4);
		expect(southEastNeighbor.get('y')).to.equal(3);
	});

	it('We can check if it is on a board.', function() {

		var board = new Board();
		expect(pos.isOn(board)).to.be.true;

		var negXPos = pos.cloneExtend({x: -1});
		expect(negXPos.isOn(board)).to.not.be.true;

		var negYPos = pos.cloneExtend({y: -1});
		expect(negYPos.isOn(board)).to.not.be.true;

		var bigXPos = pos.cloneExtend({x: board.width + 1});
		expect(bigXPos.isOn(board)).to.not.be.true;

		var bigYPos = pos.cloneExtend({y: board.height + 1});
		expect(bigYPos.isOn(board)).to.not.be.true;
	});
});