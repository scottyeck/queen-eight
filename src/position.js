'use strict';

var _ = require('lodash');

function Position(config) {
	if (_.isUndefined(config.x) || _.isUndefined(config.y))	{
		// TODO
		throw Error();
	}
	this.config = config;
}

Position.prototype.get = function(key) {
	if (key) {
		if (_.isUndefined(this.config[key])) {
			throw Error();
		}

		return this.config[key];
	}

	return this.config;
}

Position.prototype.set = function(arg1, arg2) {

	if (_.isObject(arg1)) {
		_.extend(this.config, arg1);
	} else if (_.isString(arg1)) {
		this.config[arg1] = arg2;
	} else {
		throw Error();
	}
}

Position.prototype.clone = function() {
	var config = _.cloneDeep(this.config);
	return new Position(config);
}

Position.prototype.cloneExtend = function(config) {
	config = _.extend({}, this.config, config);
	return new Position(config);
}

Position.prototype.getNeighbor = function(key) {

	// TODO
	// Should only compute what we need to

	var OPS = {
		'north':	{ y: this.get('y') + 1 },
		'south':	{ y: this.get('y') - 1 },
		'east':		{ x: this.get('x') + 1 },
		'west':		{ x: this.get('x') - 1 },
	};

	_.extend(OPS, {
		'northeast': _.extend({}, OPS.north, OPS.east),
		'northwest': _.extend({}, OPS.north, OPS.west),
		'southeast': _.extend({}, OPS.south, OPS.east),
		'southwest': _.extend({}, OPS.south, OPS.west)
	});

	return this.cloneExtend(OPS[key]);
}

Position.prototype.isOn = function(board) {

	return this.get('x') > -1
		&& this.get('y') > -1
		&& this.get('x') < board.width
		&& this.get('y') < board.height;
}

Position.prototype.isSameAs = function(pos) {
	return this.get('x') === pos.get('x') && this.get('y') === pos.get('y');
};

Position.prototype.toString = function() {
	return 'Position({x: ' + this.get('x') + ', y: ' + this.get('y') + '}) '
};

module.exports = Position;