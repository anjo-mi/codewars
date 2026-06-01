 
const a = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
const e =["Wood","Wood", "Fire","Fire", "Earth","Earth", "Metal","Metal", "Water","Water"];
function chineseZodiac(year){
  const animal = a[(year-4) %12];
  const element = e[(year-4) % 10];
  
  return `${element} ${animal}`
}