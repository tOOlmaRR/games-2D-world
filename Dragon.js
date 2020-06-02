
class Dragon
{
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    attackWall(wall) {
        const dragonType = this.type === undefined ? 'regular' : this.type;
        console.log(`(${this.name} the ${dragonType} Dragon): SCREEEEECH!`);

        let actualDamage = this.damage;
        if (this.type === wall.strength) {
            // no damage
            console.log(`The wall is strong against ${wall.strength} attacks... no damage taken!`);
            actualDamage = 0;
        } else if (this.type === wall.weakness) {
            // double-damage
            console.log(`The wall is weak against ${wall.weakness} attacks... double-damage taken!`);
            actualDamage = this.damage * 2;
        } else {
            // normal (ie. unadjusted) damage
            actualDamage = this.damage;
        }
        wall.takeDamage(actualDamage);
    }
}



class FireDragon extends Dragon
{
    constructor(name, damage) {
        super(name, damage);
        this.type = 'fire';
    }
}



class IceDragon extends Dragon
{
    constructor(name, damage) {
        super(name, damage);
        this.type = 'ice';
    }
}



class ElectricDragon extends Dragon
{
    constructor(name, damage) {
        super(name, damage);
        this.type = 'electric';
    }
}



module.exports = {
    RegularDragon: Dragon,
    FireDragon,
    IceDragon,
    ElectricDragon
}