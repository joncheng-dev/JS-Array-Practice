// let counter = 0;
// for (let i = 0; i < 3; i++) {
//   counter += 1;
// }
// console.log(counter);

// function recursiveCountToThree(number) {
//   if (number >= 3) {
//     return number;
//   }
//   console.log(number);
//   return recursiveCountToThree(number + 1);
// }

// recursiveCountToThree(0);

// Recursive function that returns a factorial of a number given
function factorialCalculator(targetNumber) {
  // termination case
  if (targetNumber <= 0) {
    return;
  }
  // base case
  if (targetNumber === 1) {
    return 1;
  }
  // recursive part
  return factorialCalculator(targetNumber - 1) * targetNumber;
}

// console.log(`The factorial of 4 is: ${factorialCalculator(5)}`);
function ChangeCalculator(value) {
  if (value < 0.01) {
    return "";
  } else {
    if (value >= 0.25) {
      const resultA = Math.floor(value / 0.25);
      const resultB = (value % 0.25).toFixed(2);
      return ChangeCalculator(resultB) + `Quarters: ${resultA},`;
    } else if (value >= 0.1) {
      const resultA = Math.floor(value / 0.1);
      const resultB = (value % 0.1).toFixed(2);
      return ChangeCalculator(resultB) + `Dimes: ${resultA}, `;
    } else if (value >= 0.05) {
      const resultA = Math.floor(value / 0.05);
      const resultB = (value % 0.05).toFixed(2);
      // console.log(`ResultA at Nickels: ${resultA}`);
      // console.log(`ResultB at Nickels: ${resultB}`);
      return ChangeCalculator(resultB) + `Nickels: ${resultA}, `;
    } else if (value >= 0.01) {
      const resultA = Math.floor(value / 0.01);
      const resultB = (value % 0.01).toFixed(2);
      console.log(`ResultA at Pennies: ${resultA}`);
      console.log(`ResultB at Pennies: ${resultB}`);
      return ChangeCalculator(resultB) + `Pennies: ${resultA}, `;
    }
  }
}

// console.log(ChangeCalculator(0.08));

// -----------------------------------------------------------------------------------
// function addPrefix(prefix) {
//   return function (name) {
//     return `${prefix} ${name}`;
//   };
// }

// function addPrefix(prefix) {
//   return (name) => `${prefix} ${name}`;
// }

// const prefixSir = addPrefix("Sir");
// const prefixSquire = addPrefix("Squire");

// console.log(prefixSir("Jon"));
// console.log(prefixSquire("Roddrick"));

// -----------------------------------------------------------------------------------
function soundMaker(specificSound) {
  return function (animal) {
    return `${animal} says ${specificSound}`;
  };
}

function soundMaker2(specificSound) {
  return function () {
    return `${specificSound}`;
  };
}

const lionSound2 = soundMaker2("roar");
const mouseSound2 = soundMaker2("squeak");
// console.log(lionSound2());
// console.log(mouseSound2());
// ---------------------------------------------
function soundMaker3(specificSound) {
  return `${specificSound}`;
}

const lionSound3 = soundMaker3("roar");
const mouseSound3 = soundMaker3("squeak");
// console.log(lionSound3);
// console.log(mouseSound3);

// console.log(lionSound("lion"));
// console.log(mouseSound("mouse"));
// -----------------------------------------------------------------------------------

// function nameEnhancer(titlePrefix) {
//   return function (titleSuffix) {
//     return `${titlePrefix} ${titleSuffix}`;
//   };
// }

function nameEnhancer(titlePrefix) {
  return (titleSuffix) => `${titlePrefix} ${titleSuffix}`;
}

const misterJunior = nameEnhancer("Mister")("Junior");
const duchessThird = nameEnhancer("Duchess")("The Third");

// console.log(misterJunior);
// console.log(duchessThird);

// -----------------------------------------------------------------------------------

function addAMult(numToAddBy) {
  return function (numToMultiplyBy) {
    return function (value) {
      return (value + numToAddBy) * numToMultiplyBy;
    };
  };
}

const addTwoMultiplyByThree = addAMult(2)(3);

const startValueOne = addTwoMultiplyByThree(1);
const startValueTwo = addTwoMultiplyByThree(2);

// console.log(startValueOne);
// console.log(startValueTwo);

// ----------------------------------------------------------------------------------------

const practiceSen = "I am a cat.";

// console.log(string.slice(0, string.indexOf(" ")));
// console.log(string.slice(string.indexOf(" ")).trim());

function recursiveSentence(string) {
  // termination case
  if (typeof string != "string") {
    return;
  }
  // base case
  if (string === "") {
    return "";
  } else if (string.indexOf(" ") != -1) {
    // recursive part
    return recursiveSentence(string.slice(string.indexOf(" ")).trim()) + " " + string.slice(0, string.indexOf(" "));
  } else {
    return string;
  }
}
// console.log(recursiveSentence(practiceSen));

// const storeState = function () {
//   // currentState object save properties:
//   // We use 'let' because the currentState will be mutated
//   // each time the inner function is called
//   let currentState = {};
//   // Our inner function takes a function that will specify
//   // the exact change that should be made to our currentState:
//   // ie, blueFood
//   return function (stateChangeFunction) {
//     // Instead of mutating currentState,
//     // we will save the new state in a constant:
//     const newState = stateChangeFunction(currentState); // we call line 17 of a specific changeState function! (ie, blueFood(currentState))
//     // We 'break the rules' and update currentState,
//     // by making a copy of newState and assigning it to currentState:
//     currentState = { ...newState };

//     return newState;
//   };
// };

// We store our function in another constant:
// Here, we invoke storeState and create a CLOSURE over
// the currentState variable in the outer function.
// const stateControl = storeState();

// Individual Plants
// const plantPhil = storeState();
// const plantLucas = storeState();
// const plantGenevieve = storeState();

// stateControl:
// When we pass blueFood into stateControl, it invokes
// the inner function inside storeState():
// let currentState = {};
// // blueFood is passed in as an argument for the stateChangeFunction parameter.
// return function (blueFood) {
//   const newState s does not directly update curren= blueFood(currentState); // thitState
//   // newState is "currentState" plus any modifications via blueFood.
//   currentState = { ...newState };

//   return newState;
// };

// when blueFood(currentState) is called, it invokes the following function:
//
// function(currentState) {
//  ...currentState,
//  ["soil"]: (currentState["soil"] || 0) + 5
// }

// currentState is passed into the state parameter, because currentState
// doesn't have a soil property yet, it defaults to 0 before 5 is added.

// const changeState = function (prop) {
//   return function (value) {
//     return function (state) {
//       return {
//         ...state,
//         [prop]: (state[prop] || 0) + value,
//       };
//     };
//   };
// };

// const feed = changeState("soil");
// const fireCost = feed(-10);

// // to get into 'state', we need a third set of parens
// fireCost = changeState("soil")(-10)(plant);

// const breatheFire = function (state) {
//   const obj = {
//     fire: function () {
//       state.soil = state.soil - 10;
//     },
//   };
//   return obj;
// };

// function (energy) {
//       fireCost(state);
//       return `The ${state} uses the ${energy} to generate fire.`;
//     }

const canPaint = function (color) {
  const obj = {
    paints: function () {
      return `Paints ${color}!`;
    },
  };
  return obj;
};

// const painter1 = canPaint("green");
// const painter2 = canPaint("yellow");
// const painter3 = canPaint("red");

// console.log(painter1.paints());
// console.log(painter2.paints());
// console.log(painter3.paints());

const noiseMaker = function (noise) {
  const obj = {
    sound: function () {
      return `${noise}`;
    },
  };
  return obj;
};

const faucet = noiseMaker("Drip drip drip.");
const oldCar = noiseMaker("Grumble grumble");
// console.log(faucet.sound());
// console.log(oldCar.sound());

const dog = function () {
  const sound = "woof";
  return {
    talk: function () {
      console.log(sound);
    },
  };
};

const dog2 = () => {
  const sound = "woof";
  return {
    talk: () => console.log(sound),
  };
};

// const sniffles = dog();
// sniffles.talk();
// const sniff1 = dog2;
// const sniffles = dog2();
// console.log(sniff1);
// console.log(sniffles);
// sniffles.talk();

// dog2().talk();

const animal = function (signatureNoise) {
  const sound = signatureNoise;
  return {
    talk: function () {
      console.log(sound);
    },
  };
};

// ---------------------------------------------------------------------------
const animal2 = (signatureNoise) => {
  const sound = signatureNoise;
  return {
    talk: () => console.log(sound),
  };
};

// const aDog = animal("woof");
// aDog.talk();

// const aBird = animal("chirp");
// aBird.talk();
// ---------------------------------------------------------------------------

const noiseMakingThing = function (signatureNoise) {
  const sound = signatureNoise;
  return {
    talk: function (nameOfThing) {
      console.log(`The ${nameOfThing} goes ${sound}`);
    },
  };
};

const noiseMakingThing2 = (signatureNoise) => {
  const sound = signatureNoise;
  return {
    talk: (nameOfThing) => console.log(`${nameOfThing} goes ${sound}`),
  };
};

// const machine = noiseMakingThing2("whirrrr");
// machine.talk("siri");

// ---------------------------------------------------------------------------
const dragonEvents = [
  { type: "attack", value: 12, target: "player-dorkman" },
  { type: "yawn", value: 40 },
  { type: "eat", target: "horse" },
  { type: "attack", value: 23, target: "player-fluffykins" },
  { type: "attack", value: 12, target: "player-dorkman" },
];

const totalDamageOnDorkman = dragonEvents
  .filter((e) => e.type === "attack")
  .filter((e) => e.target === "player-dorkman")
  .reduce((acc, e) => (acc += e.value), 0);

// console.log(totalDamageOnDorkman);

function testing() {
  return console.log(3);
}

const testing2 = () => console.log(3);

// testing();
// testing2();

// ---------------------------------------------------------------------------
// const canDoThings = function(creature) {
//   const obj = {
//     eat: function(food) {
//       return `The ${creature} eats the ${food}.`
//     },
//     sleep: function() {
//       return `The ${creature} sleeps.`
//     }
//   }
//   return obj;
// }

// This is a function factory.
// We can easily create more specific functions that
// alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};
// --------------------------------------------------------------------------------------------

// Template for characters
const storeState = (initialStats) => {
  let currentState = initialStats; // currentState is where the initial properties are stored. Later, currentState is also updated.
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

// Character initial stats
const warriorInitialStats = {
  hitPoints: 200,
  manaPoints: 100,
};

// Character instances
const JojoTheBarbarian = storeState(warriorInitialStats);

const giveName = (newName) => {
  return (state) => {
    return {
      ...state,
      name: newName,
    };
  };
};

// --------------------------------------------------------------------------------------------

const meleeAttack = () => {
  return (state) => {
    return { ...state, attack: () => `You attack.` };
  };
};

// const meleeAttack = function (playerCharacter) {
//   const obj = {
//     ...playerCharacter,
//     attack: function (target) {
//       return `The ${playerCharacter} attacks the ${target}.`;
//     },
//   };
//   return obj;
// };

const castFireball = function (playerCharacter) {
  const obj = {
    sleep: function (target) {
      return `The ${playerCharacter} hurls a ball of flames at ${target}.`;
    },
  };
  return obj;
};

const sleepingEatingCreature = function (playerCharacter) {
  let curretState = {
    playerCharacter,
  };

  return { ...curretState, ...meleeAttack(curretState), ...castFireball(curretState) };
};

// ----------------------------------------------------------------
// const newWarrior = giveName("Jojo");
// const addMeleeAttackAbility = meleeAttack(newWarrior);
// const player = JojoTheBarbarian(newWarrior);
// console.log(player);

// ----------------------------------------------------------------

// (function () {
//   return console.log("immediately invoked function expression");
// })();
