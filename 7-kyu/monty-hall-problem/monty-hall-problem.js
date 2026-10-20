 
function montyHall(prize, guesses) {
  const opts = [1,2,3];
  const switches = guesses.map(guess => {
    const opened = opts.find(el => el !== prize && el !== guess);
    const taken = [guess,opened];
    const newGuess = opts.find(g => !taken.includes(g));
    return newGuess;
  });
  const right = switches.reduce((a,el) => a += el === prize ? 1:0, 0);
  return Math.round((right / guesses.length) * 100);
}