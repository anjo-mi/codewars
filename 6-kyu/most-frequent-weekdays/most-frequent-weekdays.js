function mostFrequentDays(year){
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const index = new Date(`01-01-${year}`).getDay();
  
  const leap = year % 100 === 0 && year % 1000 !== 0
                  ? weekDays.slice(index,index+1)
              :year % 4 === 0 
                  ? weekDays.slice(index,index+2)
                  : weekDays.slice(index,index+1);
  
  return leap[1] === 'Monday' 
            ? leap.reverse() 
            : leap;
}