class Fighter{
    constructor(name, health, power, speed, special = null){
        this.name = name
        this.health = health
        this.power = power
        this.speed = speed
        this.special = special
    }

    attack(target){
        target.health -= Math.round(this.power / 3)
        if (this.special.hasOwnProperty('stymie')) {
            target.speed -= Math.round(this.power / 10)
            console.log(`${target.name} takes ${Math.round(target.power / 3)} damage and is slowed ${+(((Math.round(target.power / 10)) / this.speed).toFixed(2)) * 100}%!`)
        }else{
            console.log(`${target.name} attacks ${target.name} for ${this.power / 3} damage!`)
        }
    }

    takeDamage(target){
        this.health -= Math.round(target.power / 5)
        if (target.special.hasOwnProperty('stymie')) {
            this.speed -= Math.round(target.power / 10)
            console.log(`${this.name} takes ${Math.round(target.power / 5)} damage and is slowed ${+(((Math.round(target.power / 10)) / this.speed).toFixed(2)) * 100}%!`)
        }
        else {
            console.log(`${this.name} takes ${Math.round(target.power / 5)} damage!`)
        }
    }

    recover(item){
        this.health += item.bonus
        console.log(`${this.name} recovers ${item.bonus} health from ${item.name}!`)
    }
}

class Item{
    constructor(name, bonus){
        this.name = name
        this.bonus = bonus
    }
}

const ryu = new Fighter('Ryu', 400, 100, 40)
const ken = new Fighter('Ken', 100, 100, 40, {'stymie': true})

const pom = new Item('Pomegranate', 15)
console.log(ryu.health)
ken.attack(ryu)
console.log(ryu.health)
ryu.recover(pom)
console.log(ryu.health)