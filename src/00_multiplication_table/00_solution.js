// Code your solution here
let multiplicationTable = function (rows, columns) {
  // create multiplicationTable function that takes two parameters, rows and columns
  let table = []; // initialize table as an empty array. this is going to be our two dimensional array
  for (let i = 1; i <= rows; i++) {
    // creating a for loop that increments starting from 1 and going up to the number of rows
    currentRow = []; // this creates the currentRow array that will have the product values for the corresponding row and column numbers
    for (let j = 1; j <= columns; j++) {
      //this is our nested for loop to increment the columns from 1
      currentRow.push(i * j); //this pushes the products of i (row value) and j (column value) to the current row
    }
    table.push(currentRow); //this pushes the currentRow array to the table array
  }
  return table; // this returns the whole multiplication table
};

console.log(multiplicationTable(3, 5)); // this is an example with 3 rows and 5 columns
