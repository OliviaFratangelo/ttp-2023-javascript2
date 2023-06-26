// Code your solution here
function multiplicationTable(rows, columns) {
  let table = [];
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      table.push(i * j);
    }
  }
  return table;
}
console.log(multiplicationTable(3, 5));
