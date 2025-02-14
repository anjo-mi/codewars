 
function driver(data) {
  let firstName = data[0].toUpperCase();
  let midName = data[1].toUpperCase();
  let lastName = data[2].toUpperCase();
  let birth = new Date(data[3]);
  let birthYear = birth.getFullYear();
  let birthMonth = birth.getMonth() + 1;
  let birthDay = birth.getDate();
  let gender = data[4];
  while (lastName.length < 5){
    lastName += '9';
  }
  let decade = birthYear.toString()[2];
  if (gender === 'F'){
    birthMonth += 50;
  }
  if (birthMonth.toString().length < 2){
    birthMonth = '0' + birthMonth;
  }
  if (birthDay.toString().length < 2){
    birthDay = '0' + birthDay;
  }
  let year = birthYear.toString()[3];
  let initials = firstName[0] + (midName ? midName[0] : '9');
  return `${lastName}${decade}${birthMonth}${birthDay}${year}${initials}9AA`
}