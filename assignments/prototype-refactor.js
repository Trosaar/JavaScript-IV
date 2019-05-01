/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

const GameObject = function(info){
  this.createdAt = info.createdAt;
  this.name = info.name;
  this.dimensions = info.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
}

const CharacterStats = function (hp) {
  this.healthPoints = hp.healthPoints;
  GameObject.call(this, hp);
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`
}

const Humanoid = function(info){
 this.team = info.team;
 this.weapons = info.weapons;
 this.language = info.language;
 CharacterStats.call(this, info);
};

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`;
};

const Villain = function(info){
  Humanoid.call(this, info);
}

Villain.prototype = Object.create(Humanoid.prototype)

Villain.prototype.slash = function(hero) {
  hero.healthPoints = hero.healthPoints - 3;
  return `${this.name} did three damage to ${hero.name}`;
}

const Hero = function(info) {
  Humanoid.call(this, info);
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.purify = function(target) {
  if (target.team === 'Bad Guys') {
    target.healthPoints = target.healthPoints - 5;
    return `${this.name} did five damage to ${target.name}`;
  } else {
    target.healthPoints = target.healthPoints + 10;
    return `${this.name} healed 10 health for ${target.name}`;
  }
}

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/

class GameObject {
  constructor(info) {
    this.createdAt = info.createdAt;
    this.name = info.name;
    this.dimensions = info.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`
  }
}

class CharacterStats extends GameObject {
  constructor(info) {
    super(info);
    this.healthPoints = info.healthPoints;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(info) {
    super(info);
    this.team = info.team;
    this.weapons = info.weapons;
    this.language = info.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

class Villain extends Humanoid {
  constructor(info) {
    super(info)
  }

  slash(hero) {
    hero.healthPoints = hero.healthPoints - 3;
    return `${this.name} did three damage to ${hero.name}`;
  }
}

class Hero extends Humanoid {
  constructor(info) {
    super(info);
  }

  purify(target) {
    if (target.team === 'Bad Guys') {
      target.healthPoints = target.healthPoints - 5;
      return `${this.name} did five damage to ${target.name}`;
    } else {
      target.healthPoints = target.healthPoints + 10;
      return `${this.name} healed 10 health for ${target.name}`;
    }
  }
}

const mage = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

const badGuy = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 4,
  },
  healthPoints: 25,
  name: 'Voldemort',
  team: 'Bad Guys',
  weapons: [
    'Sword',
    'Dagger',
  ],
  language: 'Common Tongue',
})

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(badGuy.slash(swordsman));
console.log(mage.purify(swordsman));
console.log(mage.purify(swordsman));
console.log(mage.purify(swordsman));
console.log(mage.purify(swordsman));
console.log(mage.purify(swordsman));
console.log(swordsman.healthPoints); // 62
console.log(mage.purify(badGuy));
console.log(mage.purify(badGuy));
console.log(mage.purify(badGuy));
console.log(badGuy.healthPoints); // 10
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
