// Code your solution here
let soup = function (phrase, bank) {
  if (bank.length < phrase.length) {
    return false;
  }
  if (bank.length >= phrase.length) {
    for (let x = 0; x < phrase.length; x++) {
      let check = false;
      for (let y = 0; y < bank.length; y++) {
        if (phrase[x] === bank[y]) {
          check = true;
          break;
        }
      }
      if (!check) {
        return false;
      }
    }
    return true;
  }
};
phrase = 'hello';
bank = 'jakdksldsfo';
console.log(soup(phrase, bank));

phrase = 'olivia';
bank = 'otlmihviwa';
console.log(soup(phrase, bank));
