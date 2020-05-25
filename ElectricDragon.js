const Dragon = require('./Dragon.js');

class ElectricDragon extends Dragon
{
    constructor(name, damage) {
        super(name, damage);
        this.type = 'electric';
    }
}

module.exports = ElectricDragon;