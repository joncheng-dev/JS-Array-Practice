const abilityToEat = function (creature) {
  const objToInject = {
    eat: (food) => `The ${creature.name} eats ${food}.`,
  };
  return objToInject;
};

const abilityToSleep = function (creature) {
  const objToInject = {
    sleep: () => `The ${creature.name} sleeps.`,
  };
  return objToInject;
};

// --------------------------------------------------------------
// const cat = abilityToEat("cat");
// console.log(cat);

// console.log(cat.eat("salmon"));
// --------------------------------------------------------------
// Instead of giving the cat just one ability, let's do both abilities.
// First, make a "function factory" that can give both abilities to any creature we make in this way.
const animal = function (name) {
  let stateOfObject = {
    name,
  };

  return { ...stateOfObject, ...abilityToEat(stateOfObject), ...abilityToSleep(stateOfObject) };
};

const cat = animal("cat");
console.log(cat.sleep);
