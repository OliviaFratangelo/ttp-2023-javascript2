// Code your solution here
/* eslint-disable no-unused-vars, no-prototype-builtins */
function createBook(id, title, author, price, rating) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.price = price;
  let rating = ['*', '*', '*', '*', '*'];
  this.getInfo = function () {
    return `${this.title} by ${this.author}`; }
  this.getPrice = function() {
    return `${this.price}`; }
  };

let book 1 = new createBook(1, 'The Great Gatsby','F. Scott Fitzgerald', '$20', ['*','*'])
createBook.prototype.getInfo(title, author);
createBook.prototype.getPrice(price);

