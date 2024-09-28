// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
    // this.health = this.health - damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) {
    super.receiveDamage(damage)

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    }
    return `${this.name} has died in act of combat`
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage)

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    }
    return `A Saxon has died in combat`
  }
}

function selectRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(viking /* new Viking() */) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  attack(attackerArmy, victimArmy) {
    const attackerIndex = selectRandomIndex(attackerArmy)
    const attacker = attackerArmy[attackerIndex];

    const victimIndex = selectRandomIndex(victimArmy)
    const victim = victimArmy[victimIndex];

    const result = victim.receiveDamage(attacker.attack())

    if (victim.health <= 0) {
      victimArmy.splice(victimIndex, 1)
    }

    return result
  }

  vikingAttack() {
    return this.attack(this.vikingArmy, this.saxonArmy)
  }

  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy)
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    }

    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    }

    return "Vikings and Saxons are still in the thick of battle."
  }
}
