/* 
- ask the user to provide information describing their player and an enemy that they have to fight against.
- allow player and enemy to take turns attacking each other until one of them is defeated
*/

// import readline-sync package
// "npm install --save readline-sync" in Node to install
let readlineSync = require('readline-sync');

// get user input about their character
const playerName = readlineSync.question('Player name: ');
const playerHP = +readlineSync.question('Player HP: ');
const playerDamage = +readlineSync.question('Player Damage (per attack): ');
//console.log("Player:", [playerName, playerHP, playerDamage]);

// get user input about the monster
const enemyName = readlineSync.question('Enemy name: ');
const enemyHP = +readlineSync.question('Enemy HP: ');
const enemyDamage = +readlineSync.question('Enemy Damage (per attack): ');
//console.log("Enemy:", [enemyName, enemyHP, enemyDamage]);

// this object takes character info and returns a character object
const makeCharacter = (name, hp, damage) => ({
    name,
    hp,
    damage,
});

const player = makeCharacter(playerName, playerHP, playerDamage);
const enemy = makeCharacter(enemyName, enemyHP, enemyDamage);
console.log("\n", player, enemy);
console.log("\n\n\n");

// this function will print out current stats of characters
const doCharacterReport = () => {
    console.log(`${player.name}: ${player.hp}hp || ${enemy.name}: ${enemy.hp}hp`, "\n\n");
}

// this function forces character A to do damage to character B
const aDamageB = (characterA, characterB) => {
    console.log(`${characterA.name} hits ${characterB.name} for ${characterA.damage} damage.` )
    characterB.hp -= characterA.damage;
}

// player always gets to go first
let nextAttackingCharacter = player;

// loop until someone is defeated
doCharacterReport();
while (player.hp >= 0 && enemy.hp >= 0) {
    // player's turn
    if (nextAttackingCharacter === player) {
        aDamageB(player, enemy);
        nextAttackingCharacter = enemy;
    }
    // enemy's turn
    else {
        aDamageB(enemy, player);
        nextAttackingCharacter = player;
    }

    // reporting phase
    doCharacterReport();
}

console.log(`${player.hp >= 0 ? player.name : enemy.name} WINS!`);

// if (player.hp >= 0) {
//     console.log(`${player.name} WINS!`);
// } else {
//     console.log(`${enemy.name} WINS!`);
// }