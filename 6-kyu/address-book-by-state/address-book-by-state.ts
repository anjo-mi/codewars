 
export const stateCodes:Record<string,string> = {
  'AZ': 'Arizona',
  'CA': 'California',
  'ID': 'Idaho',
  'IN': 'Indiana',
  'MA': 'Massachusetts',
  'OK': 'Oklahoma',
  'PA': 'Pennsylvania',
  'VA': 'Virginia'
}
​
export function byState(str: string): string {
  const states:Record<string,string[]> = {};
  const addresses = str.trim().split('\n');
  for (const line of addresses){
    const stateCode = line.slice(-2);
    const state = stateCodes[stateCode];
    if (!states[state]) states[state] = [];
    states[state].push(`..... ${line.split(',').join('').replace(stateCode,state)}`);
  }
  const res = Object.entries(states).sort((a,b) => a[0].localeCompare(b[0])).map(([state, adds],i) => {
    if (i !== 0) state = ' ' + state;
    return state + '\r\n' + adds.sort((a,b) => a.localeCompare(b)).join('\r\n');
  }).join('\r\n');
  return res;
}
​