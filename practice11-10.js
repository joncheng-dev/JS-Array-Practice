// let names = ["Bart", "Homer", "Lisa"];
// let names2 = names;

// // names[1] = "Marge";

// console.log(names);
// console.log(names2);

// Array.from() can make a copy of an array. "shallow copy".
// names.slice() accomplishes the same; makes a copy of the array. It makes a new one.
let names = ["Bart", "Homer", "Lisa"];
let names2 = Array.from(names);
names[1] = "Marge";

console.log(names);
console.log(names2);
