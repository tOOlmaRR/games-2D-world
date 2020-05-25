// import readline-sync package
// "npm install --save readline-sync" in Node to install
let readlineSync = require('readline-sync');

// print out the world to the display
const printOutWorld = world => {
    // iterate on each row
    for (let i = 0; i < world.length; i++) {
        console.log(world[i]);
    }
}

// write a specific character to a certain position in the world
const writeToWorld = (world, row, column, char) => {
    world[row][column] = char;
}


// make world for user
const worldLength = 10;
const worldWidth = 10;
const world = [];
for (let i = 0; i < worldLength; i++) {
    world.push(' '.repeat(worldWidth).split(''));
}
console.log('Empty world:');
printOutWorld(world);

// place the user (in the middle of the world)
let rowPosition = Math.floor(worldLength / 2);
let columnPosition = Math.floor(worldWidth / 2);
writeToWorld(world, rowPosition, columnPosition, 'P');
console.log('Player joined:');
printOutWorld(world);

// assume user wishes to play
let userWishesToContinue = true;

// loop until user wishes to stop
while (true) {
    // ask user for their move direction
    let input = readlineSync.question(
        '\n\nWhich direction would would you like to go (left,right,up,down,nowhere), or "quit" to quit): '
    );

    // nullify player's current Position
    writeToWorld(world, rowPosition, columnPosition, ' ');

    // move the player RIGHT
    if (input === 'right' && columnPosition < worldWidth - 1) {
        columnPosition += 1;
    }
    
    // move the player LEFT
    else if (input === 'left' && columnPosition > 0) {
        columnPosition -= 1;
    }
    
    // move the player UP
    else if (input === 'up' && rowPosition > 0) {
        rowPosition -= 1;
    }
    
    // move the player DOWN
    else if (input === 'down' && rowPosition < worldLength - 1) {
        rowPosition += 1;
    }
    
    // move the player NO WHERE
    else if (input === 'nowhere') {
        
    }
    
    // user wants to quit
    else if (input === 'quit') {
        break;
    }

    // put player back into the world in the new location
    writeToWorld(world, rowPosition, columnPosition, 'P');
    console.log(`Player moved ${input}:`);
    printOutWorld(world);
}

console.log('Thanks for playing my awesome game!');