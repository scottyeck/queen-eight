'use strict';

var _ = require('lodash'),
	rfr = require('rfr');

var Queen = rfr('src/queen');

var helpers = {};

/**
 * Helper function used to determine whether or not an argument
 * represents a config object to be passed to Queen.
 * 
 * @param  {???}  arg	The argument to inspect
 * @return {Boolean}    Whether or not the argument has the
 *                      desired properties
 */
helpers.isQueenConfig = function(arg) {
	return (arg instanceof Object && (!_.isUndefined(arg.x)) && (!_.isUndefined(arg.y)));
}

module.exports = helpers;