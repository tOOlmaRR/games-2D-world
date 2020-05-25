const Dragon = require('./Dragon.js');

class FireDragon extends Dragon
{
    constructor(name, damage) {
        super(name, damage);
        this.type = 'fire';
    }
}

module.exports = FireDragon;