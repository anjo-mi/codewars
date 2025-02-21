 
function rpsls(pl1,pl2){
  if (pl1 === pl2) return 'Draw!'
  const rules = {
    scissors: {paper:true, lizard:true},
    paper: {rock:true, spock:true},
    rock: {lizard:true, scissors:true},
    lizard: {spock:true, paper:true},
    spock: {scissors:true, rock:true}
  }
  return rules[pl1][pl2] 
            ? 'Player 1 Won!' 
        :rules[pl2][pl1] 
            ? 'Player 2 Won!'
            : 'Invalid Entry!';
}