compose a function called sound().
\*.sound()
faucet.sound() --> "Drip drip drip."
oldCar.sound() --> "Grumble grumble"
sleepyBear.sound() --> "Grrr...yawn"

---

const noiseMaker = function(noise) {
const obj = {
sound: function() {
return `${noise}`;
}
};
return obj;
}

const faucet = noiseMaker("Drip drip drip.");
console.log(faucet.sound());
