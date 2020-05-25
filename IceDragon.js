const Dragon = require('./Dragon.js');

class IceDragon extends Dragon
{
    constructor(name, damage) {
        super(name, damage);
        this.type = 'ice';
    }
}

module.exports = IceDragon;