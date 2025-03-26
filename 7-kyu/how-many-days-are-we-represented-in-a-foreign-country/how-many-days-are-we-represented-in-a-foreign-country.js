 
function daysRepresented(trips){
  const days = Array(365).fill('').map(el => false);
  trips = trips.map(([start,end]) => [start-1, end-1]);
  trips.forEach(([start,end]) => {
    for (let i = start ; i <= end ; i++){
      days[i] = true;
    }
  });
  return days.filter(day => day === true).length;
}