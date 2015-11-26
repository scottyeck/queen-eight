'use strict';

var expect = require('chai').expect,
	_ = require('lodash'),
	rfr = require('rfr');

var helpers = rfr('src/helpers');

var isQueenConfig = helpers.isQueenConfig;

// describe('Helpers', function() {

// 	it('It is defined as desired.', function() {
// 		expect(_.isObject(helpers)).to.be.true;
// 	});

// 	describe('.isQueenConfig()', function() {
// 		it('It identifies arguments to the Queen constructor as desired.', function() {

// 			var badArgs = [0, 1, 2, '', 'hello', {}, []];
// 			_.each(badArgs, function(badArg) {
// 				expect(isQueenConfig(badArg)).to.be.false;
// 			});

// 			var goodArg = { x: 1, y: 2 };
// 			expect(isQueenConfig(goodArg)).to.be.true;
// 		});
// 	});
// });