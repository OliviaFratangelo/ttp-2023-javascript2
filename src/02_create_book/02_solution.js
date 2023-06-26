// Code your solution here
/* eslint-disable no-unused-vars, no-prototype-builtins */
function createBook(id, title, author, price, rating) {
  let Book = Object.create(createBook);

  Book.id = id;
  Book.title = title;
  Book.author = author;
  Book.price = price;
  Book.rating = [];
  return Book;
}

createBook.getInfo = function () {
  return `${this.title} by ${this.author}`;
};

createBook.getPrice = function () {
  return `${this.price}`;
};

createBook.addRating = function (rating) {
  this.rating.push(rating);
};

createBook.getRating = function (rating) {
  this.rating.length(rating);
};
let bookCreate = new createBook(1, 'Wonder', 'R.J. Palacio', '$10', '*');
console.log(bookCreate.getInfo());
console.log(bookCreate.getPrice());
console.log(bookCreate.addRating());
console.log(bookCreate.getRating());
