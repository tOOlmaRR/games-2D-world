const Dragons = require('./Dragon.js');
const Wall = require('./Wall.js');

// import readline-sync package
let readlineSync = require('readline-sync');

// Ask user to set up a wall with a height, strength and weakness
let inputHeight = +readlineSync.question('\n\nHow tall would you like your wall? ');
let inputStrength = readlineSync.question('What is your wall\'s STRENGTH (ice|fire|electric)? ');
let inputWeakness = readlineSync.question('What is your wall\'s WEAKNESS (ice|fire|electric)? ');

const ourWall = new Wall(inputHeight, inputStrength, inputWeakness);
console.log(ourWall);
ourWall.show();

// Ask the user if they would like to add a dragon to the attack.
// If so, ask for the information and add it to the attackers
// Assume user wants a regular Dragon if the type doesn't match one of our subclasses

let addDragon = false;
let allDragons = [];
do {
    const inputDragonType = readlineSync.question('\n\nWhat kind of dragon would you like to add to the fleet (ice|fire|electric|anything else)? ');
    const inputDragonName = readlineSync.question('What is your dragon\'s name? ');
    const inputDragonDamage = +readlineSync.question('How much damage can your dragon inflict? ');
        
    let newDragon = {};
    if (inputDragonType === 'ice') {
        newDragon = new Dragons.IceDragon(inputDragonName, inputDragonDamage);
    } else if (inputDragonType === 'fire') {
        newDragon = new Dragons.FireDragon(inputDragonName, inputDragonDamage);
    } else if (inputDragonType === 'electric') {
        newDragon = new Dragons.ElectricDragon(inputDragonName, inputDragonDamage);
    } else {
        newDragon = new Dragons.RegularDragon(inputDragonName, inputDragonDamage);
    }
    allDragons.push(newDragon);
    console.log('Your dragon has been added to the fleet:', newDragon);
    console.log(`You now have ${allDragons.length} dragons in your fleet`);

    addDragon = readlineSync.question(
        '\n\nWould you like to add a dragon to the attack fleet (y|n)? '
        ) === 'y' ? true : false;
} while (addDragon === true);
console.log(allDragons);

// Ask the user to say how many turns of attacks each dragon can go through
// Use this to cycle through the dragons (back-to-back) and allow each to have a turn
// ie. 2 dragons, a fire and an ice, and they want 3 attacks, fight order is fire, ice, fire, ice, fire, ice
// Attacks should stop if the wall falls (add a getter to the Wall calss to determine if the wall has fallen)
// after the attacks, output the result

console.log('OK, it\'s time for a battle!!');
const inputNumberOfAttacks = +readlineSync.question('How many attacks will each dragon take? ');
for (let i = 0; i < inputNumberOfAttacks; i++) {
    let continueBattle = true;
    console.log(`Attack round ${i+1} begins:`);
    for (let j = 0; j < allDragons.length; j++) {
        const currentDragon = allDragons[j];
        currentDragon.attackWall(ourWall);
        ourWall.show();
        if (ourWall.hasFallen) {
            continueBattle = false;
            break;
        }
    }
    if (!continueBattle) {
        break;
    }
}
console.log('The battle is over');
if (ourWall.hasFallen === true) {
    console.log('The dragons has won the day!');
} else {
    console.log('The wall has withstood the barrage from the dragon fleet');
}

