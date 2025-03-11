 
function bowlingPins(arr) {
  const map = {
    '1': (arr) => arr[3][3] = 'I',
    '2': (arr) => arr[2][2] = 'I',
    '3': (arr) => arr[2][4] = 'I',
    '4': (arr) => arr[1][1] = 'I',
    '5': (arr) => arr[1][3] = 'I',
    '6': (arr) => arr[1][5] = 'I',
    '7': (arr) => arr[0][0] = 'I',
    '8': (arr) => arr[0][2] = 'I',
    '9': (arr) => arr[0][4] = 'I',
    '10': (arr) => arr[0][6] = 'I',
  }
  const alley = Array(4).fill().map(() => Array(7).fill(' '));
  const rem = [1,2,3,4,5,6,7,8,9,10].filter(el => !arr.includes(el));
  for (const pin of rem){
    map[pin.toString()](alley);
  }
  return alley.map(line => line.join('')).join('\n');
}