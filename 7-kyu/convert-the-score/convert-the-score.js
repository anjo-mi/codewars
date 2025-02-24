 
function scoreboard(str) {
  const scores = [];
  str = str.split(' ');
  const conversions = {
    nil:0, one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9
  };
  for (const word of str){
    if (word in conversions) scores.push(conversions[word]);
  }
  return scores;
}