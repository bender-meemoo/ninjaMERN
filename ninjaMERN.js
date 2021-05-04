class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`My ninja name is ${this.name}!`);
    }
    showStats(){
        console.log(`My power is great. Marvel at my abundant ${this.health} health, my quicksilver ${this.speed} dexterity, and my virile ${this.strength} brawn!`);
    }
    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
