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
        this.level = 1;
        this.experience = 100;
        this.achievements = [];
        this.ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
        this.rank = this.ranks[0];
    }

    setRank(){
        let rank = Math.floor(this.level/10);
        if (rank > 10){
            this.rank = "Greatest";
        } else {
            this.rank = this.ranks[rank];
        }
    }

    setLevel(){
        let level = Math.floor(this.experience/100);
        if (level > 100){
            this.level = 100;
        } else {
            this.level = level;
        }
    }
    
    addXP(xp){
        this.experience += xp;
        this.setLevel();
        this.setRank();
    }
}