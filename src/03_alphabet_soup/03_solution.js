// Code your solution here
let soup = function (phrase, bank) {
  if (bank.length < phrase.length) {
    return false;
  }
  elif (bank.length >= phrase.length && bank.includes(phrase)) {
    return true;
  }
};
