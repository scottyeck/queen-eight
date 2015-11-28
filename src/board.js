'use strict';

var _ = require('lodash');

var DEFAULTS = {
	height: 8,
	width: 8
};

function Board(config) {
	config = _.extend({}, DEFAULTS, config);
	this.height = config.height;
	this.width = config.width;
}

module.exports = Board;