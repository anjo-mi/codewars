// warrior.level starts at 1, can grow to 100
//     - each time level is increased to a 10's place, rank increases
//     - rank is capped at "Greatest"

// warrior.ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"]

// warrior.experience starts at 100
//     - each time 100 more is added, level increases by one
//     - experience is capped at 10000, when level is 100

// warrior.battle(var) var always includes (or maybe just is) var.level
//     - experience increases in succesful battles
//          - increase relative to warrior.level and var.level

    // battle rules
//     - if enemy.level is ! 1 <= level <= 100, RETURN 'Invalid level'
//     - if warrior.level === enemy.level, +10 experience
//          - RETURN 'A good fight'
//     - if warrior.level > enemy.level by 1, +5 experience
//          - RETURN 'A good fight'
//     - if warrior.level > enemy.level by 2 or more, +0 experience
//          - RETURN 'Easy fight'
//     - if warrior.level < enemy.level by 5 or more, &&&&&&&&&
//          - warrior.rank < enemy.rank, RETURN 'You've been defeated'
//     - if warrior.level < enemy.level
//          - diff = enemy.level - warrior.level
//          - addedXP = 20 * diff * diff, +addedXP experience
//          - RETURN 'An intense fight'

    // warrior.training([1,2,3])
//      - warrior.achievements = []
//      - 1 is desc 'you defeated kaido'
//      - 2 is XP gained from training
//      - 3 is minLevel required to train
//          - if warrior.level >= minLevel, +XP experience
//              - warrior.achievements.push(desc)
//              - RETURN desc
//          - if warrior.level < minLevel, RETURN 'Not strong enough'


class Warrior{
    constructor(name){
        this.name = name;
        this._level = 1;
        this._experience = 100;
        this._achievements = [];
        this.ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
        this._rank = this.ranks[0];
    }

    setRank(){
        let rank = Math.floor(this._level/10);
        if (rank > 10){
            this._rank = "Greatest";
        } else {
            this._rank = this.ranks[rank];
        }
    }

    setLevel(){
        let level = Math.floor(this._experience/100);
        if (level > 100){
            this._level = 100;
        } else {
            this._level = level;
        }
    }
    
    addXP(xp){
        this._experience += xp;
        if (this._experience > 10000){
            this._experience = 10000;
        }
        this.setLevel();
        this.setRank();
    }

    get level(){
        return this._level;
    }

    get experience(){
        return this._experience;
    }

    get rank(){
        return this._rank;
    }

    get achievements(){
        return this._achievements;
    }

    battle(enemy){
        if (enemy.level < 1 || enemy.level > 100){
            return 'Invalid level';
        }
        if (this._level === enemy.level){
            this.addXP(10);
            return 'A good fight';
        }else if(this._level === enemy.level + 1){
            this.addXP(5);
            return 'A good fight';
        }else if(this._level === enemy.level + 2){
            return 'Easy fight';
        }else if(this._level + 5 < enemy.level && this.ranks.indexOf(this.rank) < this.ranks.indexOf(enemy.rank)){
            return `You've been defeated`;
        }else if(this._level < enemy.level){
            let diff = enemy.level - this._level;
            let addedXP = 20 * diff * diff;
            this.addXP(addedXP);
            return 'An intense fight';
        }
    }


    training(regimen){
        const [ desc, xp, minLevel ] = regimen;
        if (this._level < minLevel){
            return 'Not strong enough';
        }
        this.achievements.push(desc);
        this.addXP(xp);
        return desc;
    }
}