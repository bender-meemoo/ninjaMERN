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
        console.log(`My power is great, ${this.name} is my name. Marvel at my abundant ${this.health} health, my quicksilver ${this.speed} dexterity, and my virile ${this.strength} brawn!`);
    }
    drinkSake() {
        this.health += 10;
    }
}
class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        this.drinkSake
        console.log(`${this.name} says, do not pee downwind from yourself.`);
    }
    showStats(){
        console.log(`My power is great, ${this.name} is my name. Marvel at my abundant ${this.health} health, my quicksilver ${this.speed} dexterity, and my virile ${this.strength} brawn! I am also ${this.wisdom} wise like a wet fox!`);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();