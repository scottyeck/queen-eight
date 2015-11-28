'use strict';

var expect = require('chai').expect,
	rfr = require('rfr'),
	_ = require('lodash');

var Board = rfr('src/board'),
	Queen = rfr('src/queen'),
	Position = rfr('src/position'),
	PositionList = rfr('src/position-list');

describe('Queen()', function() {

	var queen = new Queen({
		x: 4,
		y: 5
	});

	it('We can verify the existence of a Board reference.', function() {
		expect(function() {
			queen.verifyBoardRef();
		}).to.throw;

		queen.board = new Board();

		expect(function() {
			queen.verifyBoardRef();
		}).to.not.throw;
	});

	it('We can construct.', function() {
		expect(queen).to.be.ok;
		expect(queen.position.get('x')).to.equal(4);
		expect(queen.position.get('y')).to.equal(5);
	});

	it('We can assess reachability from the north', function() {

		var expected = new PositionList([
			new Position({x: 4, y: 0}),
			new Position({x: 4, y: 1}),
			new Position({x: 4, y: 2}),
			new Position({x: 4, y: 3}),
			new Position({x: 4, y: 4}),
			new Position({x: 4, y: 6}),
			new Position({x: 4, y: 7})
		]);

		var result = queen.getReachableFromNorth();

		expect(result.containsSameAs(expected)).to.be.true;
	});

	it('We can assess reachability from the east', function() {

		var expected = new PositionList([
			new Position({x: 0, y: 5}),
			new Position({x: 1, y: 5}),
			new Position({x: 2, y: 5}),
			new Position({x: 3, y: 5}),
			new Position({x: 5, y: 5}),
			new Position({x: 6, y: 5}),
			new Position({x: 7, y: 5})
		]);

		var result = queen.getReachableFromEast();

		expect(result.containsSameAs(expected)).to.be.true;

	});

	it('We can assess reachability from the northeast', function() {

		var result = queen.getReachableFromNorthEast();

		var expected = new PositionList([
			new Position({x: 0, y: 1}),
			new Position({x: 1, y: 2}),
			new Position({x: 2, y: 3}),
			new Position({x: 3, y: 4}),
			new Position({x: 5, y: 6}),
			new Position({x: 6, y: 7})
		]);

		expect(result.containsSameAs(expected)).to.be.true;
	});

	it('We can assess reachability from the northwest', function() {

		var result = queen.getReachableFromNorthWest();

		var expected = new PositionList([
			new Position({x: 2, y: 7}),
			new Position({x: 3, y: 6}),
			new Position({x: 5, y: 4}),
			new Position({x: 6, y: 3}),
			new Position({x: 7, y: 2})
		]);

		expect(result.containsSameAs(expected)).to.be.true;
	});

	it('We can assess overall reachability.', function() {
		expect(_.isFunction(queen.getReachable)).to.be.true;
		expect(queen.getReachable() instanceof PositionList).to.be.true;
	});
});