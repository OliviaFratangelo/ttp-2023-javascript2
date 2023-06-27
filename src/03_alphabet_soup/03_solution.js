// Code your solution here
let soup = function (phrase, bank) {
  if (bank.length < phrase.length) {
    return false;
  } else {
    for (let x = 0; x < phrase.length; x++) {
      continue;
      for (let y = 0; y < bank.length; y++) {
        if (phrase[x] === bank[y]) {
          let check = true;
          break;
        }
      }
      if (check) {
        return true;
      }
    }
    return true;
  }
};
phrase = 'hello';
bank = 'jakdksldsfo';
console.log(soup(phrase, bank));
