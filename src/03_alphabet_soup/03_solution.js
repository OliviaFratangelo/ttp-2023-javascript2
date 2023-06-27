// Code your solution here
let soup = function (phrase, bank) {
  //create soup function that takes parameters phrase and bank
  if (bank.length < phrase.length) {
    return false; // if the length of the string for bank is less than the length of the phrase string, the function will automatically return false because there can not be enough letters
  }
  if (bank.length >= phrase.length) {
    //if the length of the string bank is greater than or equal to phrase length, go to the nested for loop
    for (let x = 0; x < phrase.length; x++) {
      // nested for loop indexes the string phrase letter by letter until the end of it
      let check = false; //initialize boolean variable check. it is false for now
      for (let y = 0; y < bank.length; y++) {
        //another nested for loop indexes the character bank string letter by letter until the end
        if (phrase[x] === bank[y]) {
          // check if the current character/element of bank being examined matches the one being examined in the phrase
          check = true;
          break; //break out of the nested for loop and go back to the one that indexes the phrase to get a new character
        }
      }
      if (!check) {
        //if check is false it means that we did not find all the characters in phrase in the bank, so we return false
        return false;
      }
    }
    return true;
  }
};
phrase = 'hello';
bank = 'jakdksldsfo';
console.log(soup(phrase, bank)); //testing it to make sure this one is false

phrase = 'olivia';
bank = 'otlmihviwa';
console.log(soup(phrase, bank)); //testing it to make sure this one is true
