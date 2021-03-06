'use strict';

var rfr = require('rfr');

var Board = rfr('src/board'),
	Position = rfr('src/position'),
	PositionList = rfr('src/position-list');

function Queen(config) {
	this.position = new Position(config);
	this.board = config.board;
}

Queen.prototype.setPosition = function(position) {
	this.position = position;
}

Queen.prototype.getPosition = function() {
	return this.position;
}

Queen.prototype.verifyBoardRef = function() {
	if (! this.board instanceof Board) {
		throw Error('This Queen has no Board reference.');
	}
	return this;
}

Queen.prototype.getReachableFromNorth = function() {

	this.verifyBoardRef();

	var pos = this.getPosition().getNeighbor('north'),
		reachable = new PositionList();

	while (pos.isOn(this.board)) {
		reachable.add(pos);
		pos = pos.getNeighbor('north');
	}

	pos = this.getPosition().getNeighbor('south');

	while (pos.isOn(this.board)) {
		reachable.add(pos);
		pos = pos.getNeighbor('south');
	}

	return reachable;
}

Queen.prototype.getReachableFromEast = function() {

	this.verifyBoardRef();

	var pos = this.getPosition().getNeighbor('east'),
		reachable = new PositionList();

	while (pos.isOn(this.board)) {
		reachable.add(pos);
		pos = pos.getNeighbor('east');
	}

	pos = this.getPosition().getNeighbor('west');

	while (pos.isOn(this.board)) {
		reachable.add(pos);
		pos = pos.getNeighbor('west');
	}

	return reachable;
}

Queen.prototype.getReachableFromNorthEast = function() {

	this.verifyBoardRef();

	var pos = this.getPosition().getNeighbor('northeast'),
		reachable = new PositionList();

	while (pos.isOn(this.board)) {
		reachable.add(pos);
		pos = pos.getNeighbor('northeast');
	}

	pos = this.getPosition().getNeighbor('southwest');

	while (pos.isOn(this.board)) {
		reachable.add(pos);
		pos = pos.getNeighbor('southwest');
	}

	return reachable;
}

Queen.prototype.getReachableFromNorthWest = function() {

	this.verifyBoardRef();

	var pos = this.getPosition().getNeighbor('northwest'),
		reachable = new PositionList();

	while (pos.isOn(this.board)) {
		reachable.add(pos);
		pos = pos.getNeighbor('northwest');
	}

	pos = this.getPosition().getNeighbor('southeast');

	while (pos.isOn(this.board)) {
		reachable.add(pos);
		pos = pos.getNeighbor('southeast');
	}

	return reachable;
}

Queen.prototype.getReachable = function() {

	var reachable = new PositionList();

	reachable
		.combine(this.getReachableFromNorth())
		.combine(this.getReachableFromEast())
		.combine(this.getReachableFromNorthEast())
		.combine(this.getReachableFromNorthWest());

	return reachable;
}

Queen.prototype.isReachable = function(enemyQueen) {

	var reachable = this.getReachable();

}

module.exports = Queen;