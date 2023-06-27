// Code your solution here
let findObjPropsHasOwn = function (object) {
  //create function with an object as its argument
  let properties = []; //initialize an empty array to store properties of each object
  for (let key in object) {
    //for loop to go through each key in the object
    if (object.hasOwnProperty(key)) {
      //checks if the object has the key as its property
      properties.push(key); //pushes the key into the properties array
    }
  }
  return properties.join(', '); //returns keys that are owned/properties as a comma separated list
};
let person = new Object(); // creates a new object called person
person.name = 'John'; //person has a name property
person.age = '23'; //person has an age property
person.city = 'NY'; //person has a city property
console.log(findObjPropsHasOwn(person)); //returns the values of the properties

let findObjKeys = function (object) {
  //function to return the names of the properties
  let properties = Object.keys(object);
  return properties.join(', ');
};
