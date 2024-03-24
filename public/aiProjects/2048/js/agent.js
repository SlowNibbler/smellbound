// James McHugh

// helper functions
function randomInt(n) {
    return Math.floor(Math.random() * n);
};

function AgentBrain(gameEngine) {
    this.size = 4;
    this.previousState = gameEngine.grid.serialize();
    this.reset();
    this.score = 0;
};

AgentBrain.prototype.reset = function () {
    this.score = 0;
    this.grid = new Grid(this.previousState.size, this.previousState.cells);
};

// Adds a tile in a random position
AgentBrain.prototype.addRandomTile = function () {
    if (this.grid.cellsAvailable()) {
        var value = Math.random() < 0.9 ? 2 : 4;
        var tile = new Tile(this.grid.randomAvailableCell(), value);

        this.grid.insertTile(tile);
    }
};

AgentBrain.prototype.moveTile = function (tile, cell) {
    this.grid.cells[tile.x][tile.y] = null;
    this.grid.cells[cell.x][cell.y] = tile;
    tile.updatePosition(cell);
};

// Move tiles on the grid in the specified direction
AgentBrain.prototype.move = function (direction) {
    // 0: up, 1: right, 2: down, 3: left
    var self = this;

    var cell, tile;

    var vector = this.getVector(direction);
    var traversals = this.buildTraversals(vector);
    var moved = false;

    //console.log(vector);

    //console.log(traversals);

    // Traverse the grid in the right direction and move tiles
    traversals.x.forEach(function (x) {
        traversals.y.forEach(function (y) {
            cell = { x: x, y: y };
            tile = self.grid.cellContent(cell);

            if (tile) {
                var positions = self.findFarthestPosition(cell, vector);
                var next = self.grid.cellContent(positions.next);

                // Only one merger per row traversal?
                if (next && next.value === tile.value && !next.mergedFrom) {
                    var merged = new Tile(positions.next, tile.value * 2);
                    merged.mergedFrom = [tile, next];

                    self.grid.insertTile(merged);
                    self.grid.removeTile(tile);

                    // Converge the two tiles' positions
                    tile.updatePosition(positions.next);

                    // Update the score
                    self.score += merged.value;

                } else {
                    self.moveTile(tile, positions.farthest);
                }

                if (!self.positionsEqual(cell, tile)) {
                    moved = true; // The tile moved from its original cell!
                }
            }
        });
    });
    //console.log(moved);
    if (moved) {
        //this.addRandomTile();
    }
    return moved;
};

// Get the vector representing the chosen direction
AgentBrain.prototype.getVector = function (direction) {
    // Vectors representing tile movement
    var map = {
        0: { x: 0, y: -1 }, // Up
        1: { x: 1, y: 0 },  // Right
        2: { x: 0, y: 1 },  // Down
        3: { x: -1, y: 0 }   // Left
    };

    return map[direction];
};

// Build a list of positions to traverse in the right order
AgentBrain.prototype.buildTraversals = function (vector) {
    var traversals = { x: [], y: [] };

    for (var pos = 0; pos < this.size; pos++) {
        traversals.x.push(pos);
        traversals.y.push(pos);
    }

    // Always traverse from the farthest cell in the chosen direction
    if (vector.x === 1) traversals.x = traversals.x.reverse();
    if (vector.y === 1) traversals.y = traversals.y.reverse();

    return traversals;
};

AgentBrain.prototype.findFarthestPosition = function (cell, vector) {
    var previous;

    // Progress towards the vector direction until an obstacle is found
    do {
        previous = cell;
        cell = { x: previous.x + vector.x, y: previous.y + vector.y };
    } while (this.grid.withinBounds(cell) &&
             this.grid.cellAvailable(cell));

    return {
        farthest: previous,
        next: cell // Used to check if a merge is required
    };
};

AgentBrain.prototype.positionsEqual = function (first, second) {
    return first.x === second.x && first.y === second.y;
};

function Agent() {
    this.weights = this.weights();
};

Agent.prototype.selectMove = function (gameManager) {
    var bestMove = -1;
    var highScore = 0;
    var openCells = gameManager.grid.availableCells().length;
    var tempScore;
    var brain = new AgentBrain(gameManager);
    for (var i = 0; i < 4; i++) {
        if (brain.move(i)) {
            if (openCells > 4) {
                tempScore = this.expectimax(brain, 4, false);
            }
            else {
                tempScore = this.expectimax(brain, 6, false);
            }
            if (tempScore >= highScore) {
                highScore = tempScore;
                bestMove = i;
            }
            brain.reset();
        }
        

    }
    // incase the move selection doesn't work for some reason
    if (bestMove == -1) {
        if (brain.move(0)) return 0;
        if (brain.move(1)) return 1;
        if (brain.move(3)) return 3;
        if (brain.move(2)) return 2;
    }
    return bestMove;
};

Agent.prototype.moves = function (brain) {
    var tempBrain = new AgentBrain(brain); 
    var moves = [];
 
    for (var i = 0; i < 4; i++) {
        if (tempBrain.move(i)) {
            moves.push(i);
            tempBrain.reset();
        }
    } return moves;
 }

Agent.prototype.expectimax = function(brain, depth, isMax) {
    var tempBrain = new AgentBrain(brain); 
    var moves = this.moves(tempBrain);
    
    // penalty for losing states
    if (moves.length == 0) {
        return -10;
    }

    if (depth > 0) {
        if (isMax) {
            var highScore = 0;
            for (var i = 0; i < moves.length; i++) {
                tempBrain.move(moves[i]);
                var tempScore = this.expectimax(tempBrain, depth - 1, false);
                highScore = Math.max(tempScore, highScore);
                tempBrain.reset();
            }
            return highScore;
        } 
        else {
            var score = 0;

            var openCells = tempBrain.grid.availableCells();
            var num = openCells.length;
            for (var i = 0; i < num; i++) {
                var tile = new Tile({x: openCells[i].x, y: openCells[i].y}, 2);
                tempBrain.grid.insertTile(tile);
                score += this.expectimax(tempBrain, depth--, true);
                tempBrain.reset();
            }

            return score / num;
        }
    }
    else {
        return this.evaluateGrid(tempBrain);
    }
};



Agent.prototype.evaluateGrid = function (gameManager) {
    var sum = 0;
    var penalty = 0;
    // multiply tile values against weighted matrix
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (gameManager.grid.cellOccupied({x: i, y: j})) {
                var tempVal = gameManager.grid.cellContent({x: i, y: j}).value;
                sum += tempVal * tempVal * this.weights[i][j];
            }
            
        }
    }

    // reward clustering of tiles with similar values
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (gameManager.grid.cellOccupied({x: i, y: j})) {
                for (var q = -1; q < 2; q++) {
                    for (var w = -1; w < 2; w++) {
                        if (gameManager.grid.withinBounds({x: i + q, y: j + w}) && gameManager.grid.cellOccupied({x: i + q, y: j + w})) {
                            var neighbor = gameManager.grid.cellContent({x: q + i, y: w + j}).value;
                            penalty += Math.abs((gameManager.grid.cellContent({x: i, y: j}).value) * 1 - neighbor);
                        }
                    }
                }
            }
        }
    }
    return sum - penalty;
};


Agent.prototype.weights = function () {
    var cells = [];
    for (var x = 0; x < 4; x++) {
        var row = cells[x] = [];
        for (var y = 0; y < 4; y++) {
            row.push(null);
        }
    }

    cells[0][0] = 0;
    cells[1][0] = 0;
    cells[2][0] = 1;
    cells[3][0] = 2;

    cells[0][1] = 2;
    cells[1][1] = 5;
    cells[2][1] = 5;
    cells[3][1] = 7;

    cells[0][2] = 18;
    cells[1][2] = 15;
    cells[2][2] = 10;
    cells[3][2] = 7;

    cells[0][3] = 20;
    cells[1][3] = 25;
    cells[2][3] = 30;
    cells[3][3] = 40;


    return cells;
};