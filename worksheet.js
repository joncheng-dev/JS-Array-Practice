const animal = (specialNoise) => {
  const sound = specialNoise;
  return {
    talk: () => console.log(sound),
  };
};
// const bird = animal("chirp");
// bird.talk();
// const cow = animal("moo");
// cow.talk();

const thingThatMakesNoise = (specialNoise) => {
  const sound = specialNoise;
  return {
    talk: (nameOfThing) => console.log(`The ${nameOfThing} goes ${sound}`),
  };
};

// const aCar = thingThatMakesNoise("vroom").talk("car");
// aCar;
// const aLaser = thingThatMakesNoise("beem").talk("laser");
// aLaser;
// const aSheep = thingThatMakesNoise("baaa").talk("sheep");
// aSheep;

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

// //***MAP***
// //1. Get array of all names
// const namesArray = characters.map((character) => character.name);
// // console.log(namesArray);
// //2. Get array of all heights
// const heightsArray = characters.map((character) => character.height);
// // console.log(heightsArray);
// //3. Get array of objects with just name and height properties
// const namesAndHeights = characters.map((character) => ({ name: character.name, height: character.height }));
// // console.log(namesAndHeights);
// //4. Get array of all first names
// const firstNamesOnly = characters.map((character) => character.name.split(" ")[0]);
// // console.log(firstNamesOnly);

// //***REDUCE***
// //1. Get total mass of all characters
// const totalAllMasses = characters.reduce((total, charEntry) => {
//   // loops through all entries
//   return total + charEntry.mass; // current total + current charEntry's mass
// }, 0); // starting value for adding all together.
// // console.log(`Sum of all characters' masses: ${totalAllMasses}`);

// //1. Shortened code solution:
// const totalMassesShort = characters.reduce((total, charEntry) => total + charEntry.mass, 0);
// // console.log(`Sum of all characters' ages: ${totalMassesShort}`);

// //2. Get total height of all characters
// const addAllHeights = characters.reduce((currentTotal, charEntry) => currentTotal + charEntry.height, 0);
// // console.log(`Sum of all characters' heights: ${addAllHeights}`);

// 3. Get total number of characters by eye color
// const charactersByEyeColor = characters.reduce((acc, currentEntry) => {
//   if (acc[currentEntry.eye_color]) {
//     acc[currentEntry.eye_color] = acc[currentEntry.eye_color] + 1;
//   } else {
//     acc[currentEntry.eye_color] = 1;
//   }
//   return acc;
// }, {});
// console.log(charactersByEyeColor);
// const charEyeColorCount = characters.reduce((acc, currEntry) => {
//   if (acc[currEntry.eye_color]) {
//     acc[currEntry.eye_color] += 1;
//   } else {
//     acc[currEntry.eye_color] = 1;
//   }
//   return acc;
// }, {});
// // console.log(charEyeColorCount);
// //4. Get total number of characters in all the character names
// const charNameCount = characters.reduce((acc, currEntry) => (acc += currEntry.name.length), 0);
// // console.log(`Total alpha characters in all names: ${charNameCount}`);

// //***FILTER***
// //1. Get characters with mass greater than 100
// const charsWithHighMass = characters.filter((e) => e.mass > 100);
// // console.log(charsWithHighMass);
// //2. Get characters with height less than 200
// const charsWithLowHeight = characters.filter((e) => e.height < 200);
// // console.log(charsWithLowHeight);
// //3. Get all male characters
// const charsMaleOnly = characters.filter((char) => char.gender === "male");
// // console.log(charsMaleOnly);
// //4. Get all female characters
// const charsFemaleOnly = characters.filter((char) => char.gender === "female");
// // console.log(charsFemaleOnly);

// //***SORT***
// //1. Sort by mass
// //2. Sort by height
// //3. Sort by name
// //4. Sort by gender

// //***EVERY***
// //1. Does every character have blue eyes?
// //2. Does every character have mass more than 40?
// //3. Is every character shorter than 200?
// //4. Is every character male?

// //***SOME***
// //1. Is there at least one male character?
// //2. Is there at least one character with blue eyes?
// //3. Is there at least one character taller than 210?
// //4. Is there at least one character that has mass less than 50?

// // --------------------------------------------------------------------------- //
// const friends = [
//   {
//     name: "Jasmine",
//     wantToDo: ["hike", "go out to eat", "swim"],
//   },
//   {
//     name: "Ada",
//     wantToDo: ["play games", "hike", "cook meals"],
//   },
//   {
//     name: "Desmond",
//     wantToDo: ["sleep", "swim", "play games"],
//   },
//   {
//     name: "Andres",
//     wantToDo: ["hike", "swim", "play games"],
//   },
// ];

// // MAP

// // REDUCE
// // 1. Which is the most popular activity?
// const arrayOfActivityLists = friends.reduce((arrayOfActivities, currEntry) => arrayOfActivities.concat(currEntry.wantToDo), []);
// // console.log(arrayOfActivityLists);

// const mostPopActivity = arrayOfActivityLists.reduce((acc, currEntry) => {
//   if (acc[currEntry]) {
//     acc[currEntry] += 1;
//   } else {
//     acc[currEntry] = 1;
//   }
//   return acc;
// }, {});
// // console.log(mostPopActivity);

// // Sort object mostPopActivity in descending order -- into an array of arrays
// const mostPopActivitySorted = Object.entries(mostPopActivity).sort(function (a, b) {
//   return b[1] - a[1];
// });
// // console.log(mostPopActivitySorted);

// // ------------------------------------------------------------------------------ //

// const employees = [
//   {
//     name: "Ada",
//     role: "developer",
//   },
//   {
//     name: "Tom",
//     role: "HR",
//   },
//   {
//     name: "Jasmine",
//     role: "developer",
//   },
//   {
//     name: "Hank",
//     role: "administrative assistant",
//   },
// ];

// // ***FILTER***
// // Find all employees at company that are developers -- using this array of objects.
// const developersFiltered = employees.filter((e) => e.role === "developer");
// // console.log(developersFiltered);
// //

// // ------------------------------------------------------

// const storeState = function () {
//   let currentState = {};
//   return function (stateChangeFunction) {
//     const newState = stateChangeFunction(currentState); // we call line 17 of a specific changeState function! (ie, blueFood(currentState))
//     currentState = { ...newState };

//     return newState;
//   };
// };

// const plantPhil = storeState();
// // contents of plantPhil here:
// {
//   // here state is stored
//   let currentState = {};
//   return function (stateChangeFunction) {
//     const newState = stateChangeFunction(currentState); // we call line 17 of a specific changeState function! (ie, blueFood(currentState))
//     currentState = { ...newState };

//     return newState;
//   };
// }
