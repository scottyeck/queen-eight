'use strict';

var _ = require('lodash'),
	rfr = require('rfr');

function PositionList(array) {
	this.entries = array || [];
}

PositionList.prototype.add = function(entry) {
	this.entries.push(entry);
	this.removeDuplicates();
}

PositionList.prototype.contains = function(desiredPosition) {

	var entryFound = false;

	_.each(this.entries, function(position) {
		if (position.isSameAs(desiredPosition)) {
			entryFound = true;
		}
	});

	return entryFound;
}

PositionList.prototype.containsSameAs = function(posList) {

	var result = true;

	_.each(this.entries, function(origEntry) {

		var entryFound = false;

		_.each(posList.entries, function(checkEntry) {
			if (origEntry.isSameAs(checkEntry)) {
				entryFound = true;
			}
		});

		if (!entryFound) {
			result = false;
		}
	});

	return result;
}

PositionList.prototype.removeDuplicates = function(list) {
	var self = list || this;

	var entries = self.entries,
		unique = [];

	_.each(entries, function(entry) {

		var isContained = false;

		_.each(unique, function(uniqueEntry) {
			if (entry.isSameAs(uniqueEntry)) {
				isContained = true;
			}
		});

		if (!isContained) {
			unique.push(entry);
		}
	});

	self.entries = unique;
	return self;
}

PositionList.prototype.combine = function(otherList) {
	this.entries.concat(otherList.entries);
	this.removeDuplicates();
	return this;
}

PositionList.prototype.clone = function() {
	var entries = this.array.slice(0);
	return new PositionList(entries);
}

PositionList.prototype.toString = function() {

	var result = '';

	_.each(this.entries, function(entry) {
		result += entry.toString() + '\n';		
	});

	return result;
}

module.exports = PositionList;