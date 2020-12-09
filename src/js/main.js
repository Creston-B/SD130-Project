// date: "2020-12-09"
// author: Creston Barker
// description: Sudoku site js and puzzle logic



const solve = function () {

}

const importFromFile = function () {

}

const exportToFile = function () {

}

const checkInput = function () {

}

const maxlength = function (e) {
  if (e.value.length > 1) e.value = e.value.slice(0, 1);
}

class Puzzle {
  constructor() {
    this.puzzleArray = Array.from(Array(9), () => new Array(9));
    let tableHTML;

    this.buildNewPuzzle = function () {
      for (let row = 0; row < 9; row++) { //lowercase 97-106
        for (let col = 0; col < 9; col++) {
          this.puzzleArray[row][col] = new Cell();
        }
      }
    }
  }
}

class Cell {
  constructor(val, fix = false) {
    this.value = val;
    this.fixed = fix;
  }
}

const generateTable = function (puzzleArray) {
  let tableHTML = ``;
  for (let row = 0; row < 9; row++) {
    tableHTML += `<tr>\n`
    for (let col = 0; col < 9; col++) {
      tableHTML += generateCell(row, col, puzzleArray) + `\n`;
    }
    tableHTML += `</tr>\n`
  }
  return tableHTML;
}

const generateCell = function (row, col, puzzleArray) {
  let targetCell = puzzleArray[row][col],
    fixed = ``,
    value = ``;

  if (targetCell.fixed) {
    fixed = ` fixed`;
  }

  if (targetCell.value) {
    value = targetCell.value;
  }

  //lowercase letters a-i = 97-106, used in charcode
  let cell = `<td class="puzzleCell${fixed}"><input type="number" id="cell-${String.fromCharCode(row + 97)}${col + 1}" min="1" max="9" step="1" oninput="maxlength(e)"></td>`;
  cell.value = value;
  return (cell);
}



window.addEventListener('DOMContentLoaded', (e) => {
  console.log(`loaded`)

  const puzzleDOM = document.getElementById(`puzzle`);

  let puzzle = new Puzzle();
  puzzle.buildNewPuzzle();
  puzzleDOM.innerHTML = generateTable(puzzle.puzzleArray);

});