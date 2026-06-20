 
export function shoppingCalculation(input: string[]): [string, string, string][] {
  const stock:Record<string,number> = {};
  const people:Record<string,Record<string,number>> = {};
  let monies = '';
  for (const line of input){
    const words = line.split(' ');
    if (words[1] === 'is') stock[words[0]?.toLowerCase()] = +words[2]?.slice(1);
    if (words[1] === 'has') {
      if (!(words[0] in people)){
        people[words[0]] = {["wallet"]:0};
      }
      people[words[0]]["wallet"] = +words[2]?.slice(1);
      monies = words[2]?.slice(0,1);
    }
    if (words[1] === 'buys'){
      const cost = stock[words[3].slice(0,-2)] || stock[words[3].slice(0,-1)];
      people[words[0]]["wallet"] -= (cost * +words[2]);
      people[words[0]][words[3].slice(0,-1)] = +words[2];
    }
  }
  const formatted:[string,string,string][] = [];
  for (const person in people){
    formatted.push([
      `${ person }`,
      `${ monies }${ people[person]["wallet"] }`,
      `${ Object.entries(people[person]).reduce((a,el) => {
        const key = el[0];
        const val = el[1];
        if (key === 'wallet') return a;
        a.push(`${ val } ${ key }`);
        return a;
      }, [] as string[]).join(', ') }`
    ])
  }
  return formatted;
}
​