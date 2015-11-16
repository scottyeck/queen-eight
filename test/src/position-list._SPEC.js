'use strict';

var expect = require('chai').expect,
	rfr = require('rfr');

var Position = rfr('src/position'),
	PositionList = rfr('src/position-list');

describe('PositionList()', function() {

	var posList = new PositionList([
		new Position({x: 1, y: 1}),
		new Position({x: 2, y: 2})
	]);

	it('We can check if two lists are the same.', function() {

		var sameList = new PositionList([
			new Position({x: 1, y: 1}),
			new Position({x: 2, y: 2})
		]);

		expect(posList.containsSameAs(sameList)).to.be.true;

		var outOfOrderList = new PositionList([
			new Position({x: 2, y: 2}),
			new Position({x: 1, y: 1})
		]);

		expect(posList.containsSameAs(outOfOrderList)).to.be.true;
	});

	it('We can combine them', function() {
		var list1 = new PositionList([
			new Position({x: 1, y: 1})
		]);

		var list2 = new PositionList([
			new Position({x: 2, y: 2})
		]);

		list1.combine(list2);

		var expected = new PositionList([
			new Position({x: 1, y: 1}),
			new Position({x: 2, y: 2})
		]);

		expect(list1.containsSameAs(expected)).to.be.true;
	});

	it('We can remove duplicates', function() {
		var list = new PositionList([
			new Position({x: 1, y: 1}),
			new Position({x: 1, y: 1})
		]);

		var expected = new PositionList([
			new Position({x: 1, y: 1})
		]);

		list.removeDuplicates();

		expect(list.containsSameAs(expected)).to.be.true;
	});
});