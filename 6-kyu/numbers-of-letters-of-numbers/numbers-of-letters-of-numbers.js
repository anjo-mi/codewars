 
function numbersOfLetters(int) {
  const lengths = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'onezero',
    11: 'oneone',
    12: 'onetwo',
    13: 'onethree',
    14: 'onefour',
    15: 'onefive'
  };
  int = int.toString().split('').map(el => lengths[el]).join('');
  const steps = [int];
  while (int !== 'four'){
    int = lengths[int.length];
    steps.push(int);
  }
  return steps;
}