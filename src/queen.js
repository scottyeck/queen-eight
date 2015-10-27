'use strict';

var rfr = require('rfr');

var Board = rfr('src/board'),
	Position = rfr('src/position');

function Queen(config) {
	this.position = new Position(config);
	this.board = config.board || new Board();
}

Queen.prototype.setPosition = function(position) {
	this.position = position;
}

Queen.prototype.getPosition = function() {
	return this.position;
}

Queen.prototype.getReachable = function() {
	// Get all positions reachable from this position
	var reachable = [],
		tmpPos, i, j;

	// Horizontal
	for (i = 0; i < this.board.width; i++) {
		if (i !== this.position.get('x')) {
			tmpPos = this.position.cloneExtend({x: i});
			reachable.push(tmpPos);
		}
	}

	// Vertical
	for (i = 0; i < this.board.height; i++) {
		if (i !== this.position.get('y')) {
			tmpPos = this.position.cloneExtend({y: i});
			reachable.push(tmpPos);
		}
	}

	// Diagnoal
	var x = this.position.get('x'),
		y = this.position.get('y');

	while (x > -1 && y > -1) {
		tmpPos = new Position({ x: x, y: y });
		reachable.push(tmpPos);
		x--;
		y--;
	}

	x = this.position.get('x');
	y = this.position.get('y');

	while (x < this.board.width && y < this.board.height) {
		tmpPos = new Position({ x: x, y: y });
		reachable.push(tmpPos);
		x++;
		y++;
	}

	x = this.position.get('x');
	y = this.position.get('y');

	while (x < this.board.width && y > -1) {
		tmpPos = new Position({ x: x, y: y });
		reachable.push(tmpPos);
		x++;
		y--;
	}

	x = this.position.get('x');
	y = this.position.get('y');

	while (x > -1 && y > this.board.height) {
		tmpPos = new Position({ x: x, y: y });
		reachable.push(tmpPos);
		x--;
		y++;
	}
}

module.exports = Queen;