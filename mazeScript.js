(function() {
  const maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 3, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 0, 0, 0, 4],
  [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  var playerx;
  var playery;
  let c = 0;
  function mazeShow(maze, element) {
  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze.length; col++) {
      let cell = document.createElement("div");
      if (maze[row][col] === 1) {
        cell.innerHTML = c;
        cell.classList.add("cell");
        cell.classList.add("wall");
      } else if (maze[row][col] === 0) {
        cell.innerHTML = c;
        cell.classList.add("cell");
        cell.classList.add("ground");
      } else if (maze[row][col] === 3) {
        playerx = row;
        playery = col;
        console.log(playerx, playery);
        cell.innerHTML = c;
        cell.classList.add("cell");
        cell.classList.add("person");
      } else if (maze[row][col] === 4) {
        cell.innerHTML = c;
        cell.classList.add("cell");
        cell.classList.add("win");
      }
      element.appendChild(cell);
      c++;
    }
  }
  }
  let mazeElement = document.getElementById("maze");
  document.onload = mazeShow(maze, mazeElement);

  document.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    case 87:
    case 38:
      if (maze[playerx - 1][playery] === 1) {
        document.getElementById("text").innerHTML = "You hit a Wall";
      } else {
        playerx += -1;
        let previousPosition = playerx + 1;
        if (maze[playerx][playery] === 0 || maze[playerx][playery] === 3) {
          const getParentDom = document.getElementById("maze");
          const getCellDom = getParentDom.getElementsByClassName("cell");
          getCellDom["" + playerx + playery].classList.replace("ground", "person");
          console.log(playerx, playery);
          console.log("" + previousPosition + playery);
          if (maze[playerx][playery] === 3) {
            let tempStart = "1";
            getCellDom[tempStart].classList.replace("ground", "person");
          }
          getCellDom["" + previousPosition + playery].classList.replace("person", "ground");
        }
      }
      break;
    case 65:
    case 37:
      if (maze[playerx][playery - 1] === 1) {
        document.getElementById("text").innerHTML = "You hit a Wall";
      } else {
        playery += -1;
        let previousPosition = playery + 1;
        if (maze[playerx][playery] === 0) {
          const getParentDom = document.getElementById("maze");
          const getCellDom = getParentDom.getElementsByClassName("cell");
          getCellDom["" + playerx + playery].classList.replace("ground", "person");
          getCellDom["" + playerx + previousPosition].classList.replace("person", "ground");
        }
      }
      break;
    case 83:
    case 40:
      if (maze[playerx + 1][playery] === 1) {
        document.getElementById("text").innerHTML = "You hit a Wall";
      } else {
        playerx += 1;
        let previousPosition = playerx - 1;
        if (maze[playerx][playery] === 0) {
          const getParentDom = document.getElementById("maze");
          const getCellDom = getParentDom.getElementsByClassName("cell");
          getCellDom["" + playerx + playery].classList.replace("ground", "person");
          if ("" + previousPosition + playery == "01") {
            let tempStart = "1";
            getCellDom[tempStart].classList.replace("person", "ground");
          }
          getCellDom["" + previousPosition + playery].classList.replace("person", "ground");
        }
      }
      break;
    case 68:
    case 39:
      if (maze[playerx][playery + 1] === 1) {
        document.getElementById("text").innerHTML = "You hit a Wall";
      } else {
        playery += 1;
        let previousPosition = playery - 1;
        if (maze[playerx][playery] === 0) {
          const getParentDom = document.getElementById("maze");
          const getCellDom = getParentDom.getElementsByClassName("cell");
          getCellDom["" + playerx + playery].classList.replace("ground", "person");
          getCellDom["" + playerx + previousPosition].classList.replace("person", "ground");
        }
      }
      if (maze[playerx][playery] === 4) {
        alert("You WIN");
      }
      break;
    default:
      break;
  }
  });
})();