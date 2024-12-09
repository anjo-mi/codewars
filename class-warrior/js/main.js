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
//     - if enemy._level is ! 1 <= level <= 100, RETURN 'Invalid level'
//     - if warrior.level === enemy._level, +10 experience
//          - RETURN 'A good fight'
//     - if warrior.level > enemy._level by 1, +5 experience
//          - RETURN 'A good fight'
//     - if warrior.level > enemy._level by 2 or more, +0 experience
//          - RETURN 'Easy fight'
//     - if warrior.level < enemy._level by 5 or more, &&&&&&&&&
//          - warrior.rank < enemy.rank, RETURN 'You've been defeated'
//     - if warrior.level < enemy._level
//          - diff = enemy._level - warrior.level
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

    level(){
        return this._level;
    }

    experience(){
        return this._experience;
    }

    rank(){
        return this._rank;
    }

    achievements(){
        return this._achievements;
    }

    battle(enemyLevel){
        if (enemyLevel < 1 || enemyLevel > 100){
            return 'Invalid level';
        }
        if (this._level === enemyLevel){
            this.addXP(10);
            return 'A good fight';
        }else if(this._level === enemyLevel + 1){
            this.addXP(5);
            return 'A good fight';
        }else if(this._level >= enemyLevel + 2){
            return 'Easy fight';
        }else if(this._level + 5 <= enemyLevel && Math.floor(this._level/10) < Math.floor(enemyLevel/10)){
            return `You've been defeated`;
        }else if(this._level < enemyLevel){
            let diff = enemyLevel - this._level;
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
        this._achievements.push(desc);
        this.addXP(xp);
        return desc;
    }
}

var Goku = new Warrior();

console.log(Goku.level(), 1, "All warriors must start as LV 1")
console.log(Goku.rank(), "Pushover", "All warriors must start as a Pushover")
console.log(Goku.achievements(), [], "All warriors must start off with no achievements to their name")
console.log(Goku.training(["Do ten push-ups", 95, 1]), "Do ten push-ups", "After obtaining a mastery, the achievement must be listed and returned")
console.log(Goku.level(), 1, "After your warriors's first training, he/she must still be LV 1")
console.log(Goku.battle(0), "Invalid level", "LV 0 enemies do not exist. This must be a mistake!")
console.log(Goku.battle(1), "A good fight", "After fighting against a warrior of equal level, your warrior should provide the appropiate response")
console.log(Goku.level(), 2, "With that fight under your belt, your warrior should now be ascended to LV 2")
console.log(Goku.achievements(), ["Do ten push-ups"], "Don't forget what your warrior has achieved so far")
console.log(Goku.rank(), "Pushover", "A pushover, however, your warrior should remain")
console.log(Goku.battle(3), "An intense fight", "Another battle, this time with a slightly more skilled enemy, should have your warrior provide an appropiate response")
console.log(Goku.level(), 2, "Your should still remain LV 2")
console.log(Goku.training(["Survive one night at the Forest of Death", 170, 2]), "Survive one night at the Forest of Death", "After obatining a mastery, your achievement must be listed and returned")
console.log(Goku.training(["Mastered the Spirit Bomb", 1580, 10]), "Not strong enough", "Your warrior isn't skilled enough to do everything just yet")
console.log(Goku.achievements(), ["Do ten push-ups", "Survive one night at the Forest of Death"], "Your warrior shouldn't forget his achievements")
console.log(Goku.battle(2), "A good fight", "Your enemy isn't exactly your level. Provide the appropriate response")
console.log(Goku.level(), 4, "Your warrior should now be LV 3")
console.log(Goku.experience(), 400, "Your warrior's experience should be relative to his level")
console.log(Goku.battle(9), "An intense fight", "Your warrior picked a fight with a relatively strong enemy. Nothing he can't hold his/er own to. Prpvide the appropiate response")
console.log(Goku.battle(14), "You've been defeated", "Your warrior picked a fight he/she can't win.")
console.log(Goku.level(), 9, "Your level should be high than our last viewing, regardless of our recent defeat")
console.log(Goku.battle(12), "An intense fight", "Your enemy's in a whole other league, but he's still within your reach")
console.log(Goku.battle(8), "Easy fight", "Going back to the small fry, huh? Provide the appropiate respone") 
console.log(Goku.rank(), "Novice", "You definately ain't no pushover anymore!")
console.log(Goku.experience(), 1080, "Startin' to get some serious experience points?")
console.log(Goku.battle(140), "Invalid level", "Something not right here...")
console.log(Goku.training(["Mastered the Spirit Bomb", 1580, 10]), "Mastered the Spirit Bomb", "Remember that training you weren't strong enough to do before? What's different now?")
console.log(Goku.level(), 26, "Finally got some decent skill in you")
console.log(Goku.rank(), "Fighter", "You ain't in the beginner tiers anymore!")
console.log(Goku.battle(30), "An intense fight", "The enemy's strong, but you can hold your own")
console.log(Goku.rank(), "Fighter", "Still a fighter at heart")
console.log(Goku.level(), 29, "Your ascention nears...")
console.log(Goku.experience(), 2980, "...ever so closely")
console.log(Goku.training(["Mastered the Shadow Clone Jutsu", 19, 6]), "Mastered the Shadow Clone Jutsu", "Another technique doesn't hurt")
console.log(Goku.experience(), 2999, "...sooooo very close")
console.log(Goku.level(), 29, "But no cigar")
console.log(Goku.battle(32), "An intense fight", "Gotta get your gain right. What kinda fight helps with that?")
console.log(Goku.rank(), "Warrior", "You ain't the greatest, but you still a...")
console.log(Goku.experience(), 3179, "Keep rackin' the experience")
console.log(Goku.battle(39), "An intense fight", "Keep the big fights poppin'")
console.log(Goku.rank(), "Veteran", "I think you're onto something with this whole fighting thing")
console.log(Goku.experience(), 4459, "Think you know your way around a fight now?")
console.log(Goku.level(), 44, "...Well, do you")
console.log(Goku.training(["Defeat Superman", 10000, 100]), "Not strong enough", "Don't jump the gun just yet!")
console.log(Goku.training(["Mastered the Spirit Gun", 1340, 43]), "Mastered the Spirit Gun", "That's more up your alley")
console.log(Goku.rank(), "Sage", "What becomes of veterans when they start to become old?")
console.log(Goku.experience(), 5799, "Quite the fighter now, aren't ya?")
console.log(Goku.level(), 57, "Keep rising!")
console.log(Goku.battle(61), "An intense fight", "Nothin' a Sage can't handle!")
console.log(Goku.rank(), "Elite", "You're very good at what you do")
console.log(Goku.experience(), 6119, "Experience needs to match the title")
console.log(Goku.training(["Mastered the Perfect Roundhouse Kick", 1781, 60]), "Mastered the Perfect Roundhouse Kick", "Patrick Swayze would be proud")
console.log(Goku.rank(), "Conqueror", "You're becoming a legend, yo!")
console.log(Goku.experience(), 7900, "Ten lifetimes' worth of experience right here!")
console.log(Goku.battle(83), "An intense fight", "A conqueror's gonna conquer, amirite?")
console.log(Goku.level(), 82, "This is a level to be feared")
console.log(Goku.rank(), "Champion", "The world looks to you for your skills now")
console.log(Goku.experience(), 8220, "You're geeting too good that this fighting stuff")
console.log(Goku.training(["Defeat The Four Horsemen", 1100, 82]), "Defeat The Four Horsemen", "Can the judgement of the Gods stop you anymore?")
console.log(Goku.battle(100), "You've been defeated", "Your power is godlike, but there is still greater")
console.log(Goku.rank(), "Master", "Your competition is quickly strinking")
console.log(Goku.level(), 93, "Your greatness is rarely matched")
console.log(Goku.experience(), 9320, "Your power is rising...overflowing!")
console.log(Goku.training(["Win the Intergalaxtic Tournament", 679, 91]), "Win the Intergalaxtic Tournament", "Can you prove to be the Master of Masters?")
console.log(Goku.experience(), 9999, "Only one stands in your way now...")
console.log(Goku.training(["Fight Superman to a draw", 11000, 99]), "Fight Superman to a draw", "If you can do this... I think you might be the one")
console.log(Goku.level(), 100, "..Wait, can it be?")
console.log(Goku.experience(), 10000, "..Is it really you?")
console.log(Goku.rank(), "Greatest", "Yes, you truly are the greatest!!! ... as soon as you pass this test at least")
console.log(Goku.training(["Defeat Superman", 10000, 100]), "Defeat Superman", "*creates shrine in your honor*")
console.log(Goku.achievements(), ['Do ten push-ups', 'Survive one night at the Forest of Death', 'Mastered the Spirit Bomb', 'Mastered the Shadow Clone Jutsu', 'Mastered the Spirit Gun', 'Mastered the Perfect Roundhouse Kick', 'Defeat The Four Horsemen', 'Win the Intergalaxtic Tournament', 'Fight Superman to a draw', 'Defeat Superman' ], "What a career you have!")