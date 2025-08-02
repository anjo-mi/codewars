 
function naughtyOrNice(data) {
  let bad = 0, good = 0;
  for (const month in data){
    for (const day in data[month]){
      if (data[month][day] === 'Naughty') bad++;
      if (data[month][day] === 'Nice') good++;
    }
  }
  return good >= bad ? "Nice!" : "Naughty!";
}