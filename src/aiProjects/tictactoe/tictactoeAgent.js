// Tic Tac Toe

// James McHugh
// 2/7/2020

var Agent = function () {
}

Agent.prototype.selectMove = function(board) {
    var player = board.playerOne ? "X" : "O";
    var bestScore = -Infinity;
    var bestMove;

    var freeCells = [];
    for (var i = 1; i < 10; i++) {
        if (board.cellFree(i)) freeCells.push(i);
    }

    if (freeCells.length == 9) {
        return 8;
    }

    for (var i = 1; i < 10; i++) {
        var tempBoard = board.clone();

        if (board.cellFree(i)) {
            if (player == "X") {
                tempBoard.X.push(i);
                var tempScore = this.minimax(tempBoard, 0, false, player);
                tempBoard.X.pop();
            }
            else {
                tempBoard.O.push(i);
                var tempScore = this.minimax(tempBoard, 0, false, player);
                tempBoard.O.pop();

            }
            if (tempScore > bestScore) {
                bestScore = tempScore;
                bestMove = i;
            }
        }
    }
    return bestMove;

}

Agent.prototype.minimax = function(board, depth, isMax, player) {

    var lastMove = board.gameOver();
    if (player == "X") {
        if (lastMove == 1) return 10;
        if (lastMove == 2) return -10;
    }
    else {
        if (lastMove == 1) return -10;
        if (lastMove == 2) return 10;
    }
    if (lastMove == 3) return 0;

    if (isMax) {
        var bestScore = -Infinity;
        for (var i = 1; i < 10; i++) {
            if (board.cellFree(i)) {
                if (player == "X"){
                    board.X.push(i);
                    var tempScore = this.minimax(board, depth + 1, false, player);
                    board.X.pop();
                }
                else{
                    board.O.push(i);
                    var tempScore = this.minimax(board, depth + 1, false, player);
                    board.O.pop();
                }
                bestScore = Math.max(bestScore, tempScore)
            }
            
        }
        return bestScore;
    }
    
    else {
        var bestScore = Infinity;
        for (var i = 1; i < 10; i++) {
            if (board.cellFree(i)) {
                if (player == "X"){
                    board.O.push(i);
                    var tempScore = this.minimax(board, depth + 1, true, player);
                    board.O.pop();
                }
                else{
                    board.X.push(i);
                    var tempScore = this.minimax(board, depth + 1, true, player);
                    board.X.pop();
                }
                bestScore = Math.min(bestScore, tempScore)
            }    
        }
        return bestScore;
    }
}
