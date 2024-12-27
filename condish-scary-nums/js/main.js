var AmIAfraid = function(day, num){
    const days = { 'Monday' : 1, 'Tuesday' : 2, 'Wednesday' : 3, 'Thursday' : 4,
                   'Friday' : 5, 'Saturday' : 6, 'Sunday' : 7}
    return  days[day] === 1 && num === 12 ? true : 
            days[day] === 2 && num >   95 ? true : 
            days[day] === 3 && num === 34 ? true : 
            days[day] === 4 && num === 0  ? true : 
            days[day] === 5 && num % 2 === 0 ? true : 
            days[day] === 6 && num === 56 ? true : 
            days[day] === 7 && Math.abs(num) === 666 ? true : false
  }


console.log(AmIAfraid("Monday", 13), false, 'Should return false');
console.log(AmIAfraid("Sunday", -666), true, 'Should return true');
console.log(AmIAfraid("Tuesday", 2), false, 'Should return false');
console.log(AmIAfraid("Tuesday", 965), true, 'Should return true');
console.log(AmIAfraid("Friday", 2), true, 'Should return true');