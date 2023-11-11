const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names
let allNamesArray = characters.map((entry) => entry.name);
// console.log(allNamesArray);
//2. Get array of all heights
let allHeightsArray = characters.map((entry) => entry.height);
// console.log(allHeightsArray);
//3. Get array of objects with just name and height properties
let nameAndHeightObject = characters.map((entry) => ({ name: entry.name, height: entry.height }));
// console.log(nameAndHeightObject);
//4. Get array of all first names
let firstNamesArray = characters.map((entry) => entry.name.split(" ")[0]);
// console.log(firstNamesArray);

//***REDUCE***
//1. Get total mass of all characters
let massOnly = characters.reduce((counter, entry) => counter + entry.mass, 0);
// console.log(massOnly);
//2. Get total height of all characters
let heightOnly = characters.reduce((counter, entry) => counter + entry.height, 0);
// console.log(heightOnly);
//3. Get total number of characters by eye color
// let eyeColorTally = characters.reduce(
//   (accumulator, entry) => (accumulator[entry.eye_color] ? accumulator[entry.eye_color]++ : (accumulator[entry.eye_color] = 1)),
//   {}
// );
const eyeColorTally2 = characters.reduce((accumulator, entry) => {
  if (accumulator[entry.eye_color]) {
    accumulator[entry.eye_color] += 1;
  } else {
    accumulator[entry.eye_color] = 1;
  }
  return accumulator;
}, {});
// console.log(eyeColorTally2);
//4. Get total number of characters in all the character names
const namesLetterCount = characters.reduce((counter, entry) => counter + entry.name.length, 0);
// console.log(namesLetterCount);

//***FILTER***
//1. Get characters with mass greater than 100
let massOver100 = characters.filter((entry) => entry.mass > 100);
// console.log(massOver100);
//2. Get characters with height less than 200
let heightLessThan200 = characters.filter((entry) => entry.height < 200);
// console.log(heightLessThan200);
//3. Get all male characters
let maleCharacters = characters.filter((entry) => entry.gender === "male");
// console.log(maleCharacters);
//4. Get all female characters
let femaleCharacters = characters.filter((entry) => entry.gender === "female");
// console.log(femaleCharacters);

//***SORT***
//1. Sort by mass
let sortByMassAscending = characters.sort((first, second) => first.mass - second.mass);
// console.log(sortByMassAscending);
//2. Sort by height
let sortByHeightDescend = characters.sort((a, b) => b.height - a.height);
// console.log(sortByHeightDescend);
//3. Sort by name
let sortByNameDescend = characters.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
});
// console.log(sortByNameDescend);
//4. Sort by gender
let sortByGender = characters.sort((a, b) => {
  if (a.gender < b.gender) {
    return -1;
  } else {
    return 1;
  }
});
console.log(sortByGender);

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
