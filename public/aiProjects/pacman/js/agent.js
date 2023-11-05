// James McHugh
// 2/9/2020

var GAMEBOARD = [];
var prevDirs = [];

var getXY = function(x, y) {
  var i = Math.floor((x - BUBBLES_X_START + BUBBLES_GAP/2)/BUBBLES_GAP);
  var j = Math.floor((y - BUBBLES_Y_START + 9)/17.75);

  return {x: i, y: j}
}

var buildGameboard = function () {
  var k = 0;
  GAMEBOARD = [];
  for(var i = 0; i < 26; i++) {
    GAMEBOARD.push([]);
    for(var j = 0; j < 29; j++) {
      GAMEBOARD[i].push({
        index: k,
        x: i,
        y: j,
        bubble: false,
        superBubble: false,
        inky: false,
        pinky: false,
        blinky: false,
        clyde: false,
        pacman: false,
        eaten: false
      });
      k++;
    }
  }

  for(var i = 0; i < BUBBLES_ARRAY.length; i++) {
    var bubbleParams = BUBBLES_ARRAY[i].split( ";" );
    var y = parseInt(bubbleParams[1]) - 1;
    var x = parseInt(bubbleParams[2]) - 1;
    var type = bubbleParams[3];
    var eaten = parseInt(bubbleParams[4]);
    if (type === "b") {
      GAMEBOARD[x][y].bubble = true;
    } else {
      GAMEBOARD[x][y].superBubble = true;
    }
    if(eaten === 0) {
      GAMEBOARD[x][y].eaten = false;
    } else {
      GAMEBOARD[x][y].eaten = true;
    }
  }

  for(var i = 0; i < 26; i++) {
    for(var j = 0; j < 29; j++) {
      if(!GAMEBOARD[i][j].bubble && !GAMEBOARD[i][j].superBubble){
          GAMEBOARD[i][j] = null;
      }
    }
  }

  for(var i = 0; i < 26; i++) {
    for(var j = 0; j < 29; j++) {
      if((i === 0 && (j === 13)) ||
      (i === 1 && (j === 13)) ||
      (i === 2 && (j === 13)) ||
      (i === 3 && (j === 13)) ||
      (i === 4 && (j === 13)) ||
      (i === 6 && (j === 13)) ||
      (i === 7 && (j === 13)) ||
      (i === 8 && (j >= 10 && j <= 18)) ||
      (i === 9 && (j === 10 || j === 16)) ||
      (i === 10 && (j === 10 || j === 16)) ||
      (i === 11 && (((j >= 8) && (j <= 10)) || j === 16)) ||
      (i === 12 && (j === 10 || j === 16)) ||
      (i === 13 && (j === 10 || j === 16)) ||
      (i === 14 && (((j >= 8) && (j <= 10)) || j === 16)) ||
      (i === 15 && (j === 10 || j === 16)) ||
      (i === 16 && (j === 10 || j === 16)) ||
      (i === 17 && (j >= 10 && j <= 18)) ||
      (i === 18 && (j === 13)) ||
      (i === 19 && (j === 13)) ||
      (i === 21 && (j === 13)) ||
      (i === 22 && (j === 13)) ||
      (i === 23 && (j === 13)) ||
      (i === 24 && (j === 13)) ||
      (i === 25 && (j === 13)))  {
        GAMEBOARD[i][j] = {
          bubble: false,
          superBubble: false,
          inky: false,
          pinky: false,
          blinky: false,
          clyde: false,
          pacman: false,
          eaten: false
        };
      }
    }
  }

  var p = getXY(GHOST_INKY_POSITION_X,GHOST_INKY_POSITION_Y);
  if(p.x >= 0 && p.x < 26 && GAMEBOARD[p.x][p.y]) GAMEBOARD[p.x][p.y].inky = true;
  p = getXY(GHOST_PINKY_POSITION_X,GHOST_PINKY_POSITION_Y);
  if (p.x >= 0 && p.x < 26 && GAMEBOARD[p.x][p.y]) GAMEBOARD[p.x][p.y].pinky = true;
  p = getXY(GHOST_BLINKY_POSITION_X,GHOST_BLINKY_POSITION_Y);
  if (p.x >= 0 && p.x < 26 && GAMEBOARD[p.x][p.y]) GAMEBOARD[p.x][p.y].blinky = true;
  p = getXY(GHOST_CLYDE_POSITION_X,GHOST_CLYDE_POSITION_Y);
  if (p.x >= 0 && p.x < 26 && GAMEBOARD[p.x][p.y]) GAMEBOARD[p.x][p.y].clyde = true;

  p = getXY(PACMAN_POSITION_X, PACMAN_POSITION_Y);
  if (p.x >= 0 && p.x < 26 && GAMEBOARD[p.x][p.y]) GAMEBOARD[p.x][p.y].pacman = true;

};

function drawRect(i,j) {
  var ctx = PACMAN_CANVAS_CONTEXT;
  var ygap = 17.75;
  var x = BUBBLES_X_START + i*BUBBLES_GAP - BUBBLES_GAP/2;
  var y = BUBBLES_Y_START + j*ygap- 9;
  var w = BUBBLES_GAP;
  var h = ygap;

  if(GAMEBOARD && GAMEBOARD[0] && GAMEBOARD[i][j]){
    ctx.strokeStyle = "green";
    ctx.rect(x,y,w,h);
    ctx.stroke();
  }
}

function drawDebug() {
  for(var i = 0; i < 26; i++) {
    for(var j = 0; j < 29; j++) {
      drawRect(i,j);
    }
  }
}

function containsGhost(cell) {
  if ((cell.blinky && GHOST_BLINKY_STATE == 0) ||
      (cell.inky && GHOST_INKY_STATE == 0) ||
      (cell.pinky && GHOST_PINKY_STATE == 0) ||
      (cell.clyde && GHOST_CLYDE_STATE == 0)) return true;
  else {
    return false;
  }
}


// He's not perfect, but I love him just the same.

function selectMove() {

    buildGameboard();

    if (!PACMAN_DEAD && !GAMEOVER) { // make sure the game is running
      var p = getXY(PACMAN_POSITION_X, PACMAN_POSITION_Y);

      var adjList = new Map();

      var directions = [];
      for (var i = 1; i < 5; i++) {
          if (canMovePacman(i)) directions.push(i);
      }

      var tempx = p.x;
      var tempy = p.y;

      // if ghosts are nearby
      var gottaGo = false;

      // if any bubbles are nearby
      var anyBub = false;
      var bubbleFound = false;

      //build graph
      for (var i = tempx - 8; i <= tempx + 8; i++) {
        for (var j = tempy - 8; j <= tempy + 8; j++) {
          if ((0 <= i) && (i < 26) && (0 <= j) && (j < 29)) {
            if (GAMEBOARD[i][j] != null){
              if (GAMEBOARD[i][j].eaten == false ) {
                anyBub = true;
              }

              adjList.set(GAMEBOARD[i][j], []);

              if (i + 1 == 26){
                if (adjList.has(GAMEBOARD[i - 1][j])){
                  adjList.get(GAMEBOARD[i][j]).push(GAMEBOARD[i - 1][j]);
                  adjList.get(GAMEBOARD[i - 1][j]).push(GAMEBOARD[i][j]);
                }
                if (adjList.has(GAMEBOARD[i][j + 1])){
                  adjList.get(GAMEBOARD[i][j]).push(GAMEBOARD[i][j + 1]);
                  adjList.get(GAMEBOARD[i][j + 1]).push(GAMEBOARD[i][j]);
                }
                if (adjList.has(GAMEBOARD[i][j - 1])){
                  adjList.get(GAMEBOARD[i][j]).push(GAMEBOARD[i][j - 1]);
                  adjList.get(GAMEBOARD[i][j - 1]).push(GAMEBOARD[i][j]);
                }
              }
              else if (i - 1 == -1) {
                if (adjList.has(GAMEBOARD[i + 1][j])){
                  adjList.get(GAMEBOARD[i][j]).push(GAMEBOARD[i + 1][j]);
                  adjList.get(GAMEBOARD[i + 1][j]).push(GAMEBOARD[i][j]);
                }
                if (adjList.has(GAMEBOARD[i][j + 1])){
                  adjList.get(GAMEBOARD[i][j]).push(GAMEBOARD[i][j + 1]);
                  adjList.get(GAMEBOARD[i][j + 1]).push(GAMEBOARD[i][j]);
                }
                if (adjList.has(GAMEBOARD[i][j - 1])){
                  adjList.get(GAMEBOARD[i][j]).push(GAMEBOARD[i][j - 1]);
                  adjList.get(GAMEBOARD[i][j - 1]).push(GAMEBOARD[i][j]);
                }
              }
              else{
                if (adjList.has(GAMEBOARD[i + 1][j])){
                  adjList.get(GAMEBOARD[i][j]).push(GAMEBOARD[i + 1][j]);
                  adjList.get(GAMEBOARD[i + 1][j]).push(GAMEBOARD[i][j]);
                }
                if (adjList.has(GAMEBOARD[i - 1][j])){
                  adjList.get(GAMEBOARD[i][j]).push(GAMEBOARD[i - 1][j]);
                  adjList.get(GAMEBOARD[i - 1][j]).push(GAMEBOARD[i][j]);
                }
                if (adjList.has(GAMEBOARD[i][j + 1])){
                  adjList.get(GAMEBOARD[i][j]).push(GAMEBOARD[i][j + 1]);
                  adjList.get(GAMEBOARD[i][j + 1]).push(GAMEBOARD[i][j]);
                }
                if (adjList.has(GAMEBOARD[i][j - 1])){
                  adjList.get(GAMEBOARD[i][j]).push(GAMEBOARD[i][j - 1]);
                  adjList.get(GAMEBOARD[i][j - 1]).push(GAMEBOARD[i][j]);
                }
              }
            }
          }
        }
      }
      //end of build graph

      var foundGhosts = [];

      var foundBubbles = [];

      var gottaBub = false;


      // look for bubbles
      var bubLoc;
        for (var i = 0; i < adjList.get(GAMEBOARD[p.x][p.y]).length; i++) {
          if ((adjList.get(GAMEBOARD[p.x][p.y])[i].eaten == false)) {
            if (adjList.get(GAMEBOARD[p.x][p.y])[i].x > p.x) {
              bubbleFound = true;
              bubLoc = 1;
              if (bubLoc == PACMAN_DIRECTION) {
                break;
              }
            }

            else if (adjList.get(GAMEBOARD[p.x][p.y])[i].x < p.x) { 
              bubbleFound = true
              bubLoc = 3;
              if (bubLoc == PACMAN_DIRECTION) {
                break;
              }
            }

            else if (adjList.get(GAMEBOARD[p.x][p.y])[i].y < p.y) { 
              bubbleFound = true
              bubLoc = 4;
              if (bubLoc == PACMAN_DIRECTION) {
                break;
              }
            }

            else if (adjList.get(GAMEBOARD[p.x][p.y])[i].y > p.y) {
              bubbleFound = true
              bubLoc = 2;
              if (bubLoc == PACMAN_DIRECTION) {
                break;
              }
            }
          }
        }
      // end look for bubbles

      //look for ghosts and distant bubbles
      for (let [k, v] of adjList) {

        var tempCounter = 0;
        var numOfGhosts = 0;

        if (k.eaten == false && bubbleFound == false) {
          var tempDistance = 0;

          //we found a bubble
          gottaBub = true;
          var bubX;
          var bubY;
          
          var visitedCells = [];
          for (let [u, o] of adjList) {
            visitedCells[u.index] = false;
          }

          var queue = [];

          visitedCells[k.index] = true;
          queue.push(k);

          while (queue.length != 0) {

            var tempCell = queue.shift();

            if (adjList.get(tempCell).includes(GAMEBOARD[p.x][p.y])){

              tempDistance++;
              bubX = tempCell.x;
              bubY = tempCell.y;

              if ((bubX > p.x) && (directions.includes(1))) {
                foundBubbles.push({bubDir: 1, bubDist: tempDistance});
              } 
              if ((bubX < p.x) && (directions.includes(3))) {
                foundBubbles.push({bubDir: 3, bubDist: tempDistance});
              }
              if ((bubY < p.y) && (directions.includes(4))) {
                foundBubbles.push({bubDir: 4, bubDist: tempDistance});
              }
              if ((bubY > p.y) && (directions.includes(2))) {
                foundBubbles.push({bubDir: 2, bubDist: tempDistance});
              }
              break;
            }
            
            else{
              tempCounter ++;
              tempDistance ++;

              if (tempCounter <= 8) {
                var tempNeigh = adjList.get(tempCell);
                for (var t in tempNeigh) {
                  var neigh = tempNeigh[t];
                  if (!visitedCells[neigh.index]) {
                    visitedCells[neigh] = true;
                    queue.push(neigh);
                  }
                }
              }
              else break;
            }
          }
        }

        if (containsGhost(k)){
          var tempDistance = 0;

          //we found a ghost
          gottaGo = true;
          var ghostX;
          var ghostY;
          
          var visitedCells = [];
          for (let [u, o] of adjList) {
            visitedCells[u.index] = false;
          }

          var queue = [];

          visitedCells[k.index] = true;
          queue.push(k);

          while (queue.length != 0) {

            var tempCell = queue.shift();

            if (adjList.get(tempCell).includes(GAMEBOARD[p.x][p.y])){

              tempDistance++;
              ghostX = tempCell.x;
              ghostY = tempCell.y;

              if ((ghostX > p.x) && (directions.includes(1))) {
                foundGhosts.push({ghostNum: numOfGhosts, ghostDir: 1, ghostDist: tempDistance});
              } 
              if ((ghostX < p.x) && (directions.includes(3))) {
                foundGhosts.push({ghostNum: numOfGhosts, ghostDir: 3, ghostDist: tempDistance});
              }
              if ((ghostY < p.y) && (directions.includes(4))) {
                foundGhosts.push({ghostNum: numOfGhosts, ghostDir: 4, ghostDist: tempDistance});
              }
              if ((ghostY > p.y) && (directions.includes(2))) {
                foundGhosts.push({ghostNum: numOfGhosts, ghostDir: 2, ghostDist: tempDistance});
              }
              break;
            }
            
            else{
              tempCounter ++;
              tempDistance ++;

              if (tempCounter <= 12) {
                var tempNeigh = adjList.get(tempCell);
                for (var t in tempNeigh) {
                  var neigh = tempNeigh[t];
                  if (!visitedCells[neigh.index]) {
                    visitedCells[neigh] = true;
                    queue.push(neigh);
                  }
                }
              }
              else break;
            }
          }
        }
      }
      //end of look for ghosts

      
      // if there's more than one ghost nearby, try to prioritize
      if (foundGhosts.length >= 1) {
        foundGhosts.sort((a, b) => (a.ghostDist > b.ghostDist) ? 1 : -1);
        for (var f = 0; f < foundGhosts.length; f++) {
          if (directions.length > 1) {
            directions.splice(directions.indexOf(foundGhosts[f].ghostDir), 1); 
          }
        }
      }

      var closestBubs = [];
      // pick a bubble direction
      if (foundBubbles.length > 0) {
        foundBubbles.sort((a, b) => (a.bubDist > b.bubDist) ? 1 : -1);
        for (var b = 0; b < foundBubbles.length; b++) {
          if (b == 4) {
            break;
          }
          else {
            closestBubs.push(foundBubbles[b].bubDir);
          }
        }
      }



      // try not to be on the bottom with a ghost
      var ghostOnBottom = false;
      for (var b = 0; b <= 25; b++) {
        if (containsGhost(GAMEBOARD[b][28])) {
          ghostOnBottom = true;
        }
      }
      var alreadyMoved = false;

      // try not to go back and forth
      if (prevDirs.length > 2) {
        if ((prevDirs[prevDirs.length - 1] == prevDirs[prevDirs.length - 3]) && (prevDirs[prevDirs.length - 1] != prevDirs[prevDirs.length - 2])) {
          prevDirs.push(PACMAN_DIRECTION);
          movePacman(PACMAN_DIRECTION);
          alreadyMoved = true;
        }
      }
      
      //the rest of movement
      if (alreadyMoved == false) {

      // ghost movement
      if (gottaGo == true) {

        // dont be on the bottom with a ghost
        if (p.y == 28 && (PACMAN_DIRECTION % 2 == 1) && (directions.includes(4)) && ghostOnBottom) {
          prevDirs.push(4);
          movePacman(4);
        }
        // if theres a bubble nex to pacman and its safe, go there
        else if (directions.includes(bubLoc)) {
          prevDirs.push(bubLoc);
          movePacman(bubLoc);
        }
        // if theres no bubbles next door, try to keep moving
        else if (directions.includes(PACMAN_DIRECTION)){
          //keep moving
        }
        // if he cant move forward, try not to turn around
        else {
          if (directions.length > 1) {
            if (PACMAN_DIRECTION == 1) {
              directions.splice(directions.indexOf(3), 1); 
            }
            else if (PACMAN_DIRECTION == 3) {
              directions.splice(directions.indexOf(1), 1); 
            }
            else if (PACMAN_DIRECTION == 2) {
              directions.splice(directions.indexOf(4), 1); 
            }
            else if (PACMAN_DIRECTION == 4) {
              directions.splice(directions.indexOf(2), 1); 
            }
          }
          var tempMove = directions[Math.floor(Math.random() * directions.length)];
          prevDirs.push(tempMove);
          movePacman(tempMove);
        }
      }
      // end of ghost movement

      // if theres a bubble next door, take it
      else if (bubbleFound == true) {
        prevDirs.push(bubLoc);
        movePacman(bubLoc);
      }

      // if theres a bubble in his radar
      // bubble movement
      else if (gottaGo == false && gottaBub == true) {

        // if theres a bubble in his direction, go for it
          if (closestBubs.includes(PACMAN_DIRECTION)) {
            //keep moving
          }
        // no bubble in his direction
          else {
          
            // try not to turn around
            if (closestBubs.length > 1) {
              if (PACMAN_DIRECTION == 1 && closestBubs.includes(3)) {
                closestBubs.splice(closestBubs.indexOf(3), 1); 
              }
              else if (PACMAN_DIRECTION == 3 && closestBubs.includes(1)) {
                closestBubs.splice(closestBubs.indexOf(1), 1); 
              }
              else if (PACMAN_DIRECTION == 2 && closestBubs.includes(4)) {
                closestBubs.splice(closestBubs.indexOf(4), 1); 
              }
              else if (PACMAN_DIRECTION == 4 && closestBubs.includes(2)) {
                closestBubs.splice(closestBubs.indexOf(2), 1); 
              }
              var tempMove;
              if (closestBubs.includes(1)) {
                tempMove = 1;
              }
              else if (closestBubs.includes(2)) {
                tempMove = 2;
              }
              else if (closestBubs.includes(3)) {
                tempMove = 3;
              }
              else if (closestBubs.includes(4)) {
                tempMove = 4;
              }
              prevDirs.push(tempMove);
              movePacman(tempMove);
            }
            

            // if hes not moving, try not to turn around
            else if (!PACMAN_MOVING) {
              if (PACMAN_DIRECTION == 1) {
                directions.splice(directions.indexOf(3), 1); 
              }
              else if (PACMAN_DIRECTION == 3) {
                directions.splice(directions.indexOf(1), 1); 
              }
              else if (PACMAN_DIRECTION == 2) {
                directions.splice(directions.indexOf(4), 1); 
              }
              else if (PACMAN_DIRECTION == 4) {
                directions.splice(directions.indexOf(2), 1); 
              }
              var tempMove = directions[Math.floor(Math.random() * directions.length)];
              prevDirs.push(tempMove);
              movePacman(tempMove);
            } 
          }
        }
      // end bubble movement


      // dead end movement
      else if (!PACMAN_MOVING || anyBub == false) {

        if (PACMAN_DIRECTION == 1) {
          directions.splice(directions.indexOf(3), 1); 
        }
        else if (PACMAN_DIRECTION == 3) {
          directions.splice(directions.indexOf(1), 1); 
        }
        else if (PACMAN_DIRECTION == 2) {
          directions.splice(directions.indexOf(4), 1); 
        }
        else if (PACMAN_DIRECTION == 4) {
          directions.splice(directions.indexOf(2), 1); 
        }
        var tempMove = directions[Math.floor(Math.random() * directions.length)];
        prevDirs.push(tempMove);
        movePacman(tempMove);
      }
      // end of dead end movement

    }
    if (prevDirs.length > 3) {
      prevDirs.shift();
    }
  }
};

//setInterval(drawDebug, 1000/3);
