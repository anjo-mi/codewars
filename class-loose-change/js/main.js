function looseChange(cents){
    class Change{
      constructor(change){
        this.Nickels = 0
        this.Pennies = 0
        this.Dimes = 0
        this.Quarters = 0
        
        this.setNickels(change)
        this.setPennies(change)
        this.setDimes(change)
        this.setQuarters(change)
      }
      setQuarters(change){
        if (change < 25){
          this.Quarters = 0
        }else{
          this.Quarters = Math.floor(change / 25)
        }
      }
      setDimes(change){
        if (change < 10){
          this.Dimes = 0
        }else{
          this.Dimes = Math.floor((change % 25) / 10)
        }
      }
      setNickels(change){
        if (change < 5){
          this.Nickels = 0
        }else{
          this.Nickels = Math.floor(((change % 25) % 10) / 5)
        }
      }
      setPennies(change){
        if (change < 1){
          this.Pennies = 0
        }else{
          this.Pennies = Math.floor((change % 5))
        }
      }
    }
    return new Change(cents)
  }

(console.log(looseChange(56), {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}));
(console.log(looseChange(100),{'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 4}));
(console.log(looseChange(0),  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}));
(console.log(looseChange(-3), {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}),"no looseChange for -3 cents");
(console.log(looseChange(7.9),{'Nickels': 1, 'Pennies': 2, 'Dimes': 0, 'Quarters': 0}),"7.9 cents should be rounded down to 7");
