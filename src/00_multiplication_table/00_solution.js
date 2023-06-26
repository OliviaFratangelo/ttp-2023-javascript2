// Code your solution here
let multiplicationTable = function (rows, columns) {
  let table = [];
  for (let i = 1; i <= rows; i++) {
    currentRow = [];
    for (let j = 1; j <= columns; j++) {
      currentRow.push(i * j);
    }
    table.push(currentRow);
  }
  return table;
};

console.log(multiplicationTable(3, 5));
