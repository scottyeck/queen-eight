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

module.exports = Position;