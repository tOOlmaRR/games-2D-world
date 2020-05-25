/*
Step 1: Create a wall class that takes in height, a strong type and a weak type as arguments.
Based on this, the instance should create data to store the values passed in as arguments.
Additionally, the wall should maintain a current height property, an ability to take damage, and be able to print out the wall based on it's current height
*/

class Wall
{
    constructor(height, strength, weakness) {
        this.maxHeight = height;
        this.currentHeight = height;
        this.strength = strength;
        this.weakness = weakness;
    }

    takeDamage(damage) {
        this.currentHeight -= damage;
    }
    show() {
        for (let i = 0; i < this.currentHeight; i++) {
            console.log(" ".repeat(5) + "#".repeat(50));
        }
        console.log("=".repeat(60) + " ".repeat(5) + `Current height = ${this.currentHeight}/${this.maxHeight}`);
        console.log(`Strong Against: ${this.strength} | Week Against: ${this.weakness}`);
        console.log("");
    }
    get hasFallen() {
        return this.currentHeight <= 0;
    }
}

// export code from this file
module.exports = Wall;