// Code your solution here
/* eslint-disable no-unused-vars, no-prototype-builtins */
function createBook(id, title, author, price, rating) {
  //createBook function that takes 5 arguments
  let Book = Object.create(createBook); //creates a book object that takes the createBook function as its parameter

  Book.id = id;
  Book.title = title;
  Book.author = author;
  Book.price = price;
  Book.rating = []; //initialize rating as an array
  return Book;
}

createBook.getInfo = function () {
  //add getInfo method to the createBook function prototype
  return `${this.title} by ${this.author}`; //make getInfo method return title and author provided
};

createBook.getPrice = function () {
  //add getPrice method to the createBook function prototype
  return this.price; //make getPrice method return price
};

createBook.addRating = function (rating) {
  //addRating method allows for a rating parameter of one to five stars
  this.rating.push(rating); //pushes individual rating to the rating array to make an array of strings
};

createBook.getRating = function () {
  //gets the average of the ratings added
  let sum = 0;
  for (let i = 0; i < this.rating.length; i++) {
    sum += this.rating[i].length;
  }
  return sum / this.rating.length;
};

let bookCreate = new createBook(1, 'Wonder', 'R.J. Palacio', '$10', [
  //creates and sets parameter values for new book object
  '*',
  '***',
]);
console.log(bookCreate.getInfo());
console.log(bookCreate.getPrice());
console.log(bookCreate.addRating(`${this.rating}`));
console.log(bookCreate.getRating());
