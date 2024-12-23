function fizzBuzzCuckooClock(time) {
    let [hours,mins] = time.split(':')
    if (hours > 12){
      hours = +hours - 12
    }else{
      hours = +hours
    }
    mins = +mins
    
    return  !hours && mins === 0 ? 'Cuckoo '.repeat(12).trim() : 
            mins === 0           ? 'Cuckoo '.repeat(hours).trim() : 
            mins % 30 === 0      ? 'Cuckoo' : 
            mins % 15 === 0      ? 'Fizz Buzz' : 
            mins % 5 === 0       ? 'Buzz' : 
            mins % 3 === 0       ? 'Fizz' : 
                                   'tick'
  }
  

console.log(fizzBuzzCuckooClock("13:34"), "tick");
console.log(fizzBuzzCuckooClock("21:00"), "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo");
console.log(fizzBuzzCuckooClock("11:15"), "Fizz Buzz");
console.log(fizzBuzzCuckooClock("03:03"), "Fizz");
console.log(fizzBuzzCuckooClock("14:30"), "Cuckoo");
console.log(fizzBuzzCuckooClock("08:55"), "Buzz");
console.log(fizzBuzzCuckooClock("00:00"), "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo");
console.log(fizzBuzzCuckooClock("12:00"), "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo");
