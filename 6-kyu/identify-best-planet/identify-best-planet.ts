 
export const REQUIRED_ELEMENTS = ['H', 'C', 'N', 'O', 'P', 'Ca'];
​
export function bestPlanet(solarSystem: string[], maxSize: number): string {
  let maxDiff = Infinity;
  let res = '';
  for (const planet of solarSystem){
    const [elements, size] = planet.split('_');
    if (+size > maxSize || maxSize - +size > maxDiff) continue;
    const indices = new Set<number>();
    for (let i = 0 ; i < elements.length ; i++){
      const index = REQUIRED_ELEMENTS.findIndex(el => el === elements[i]);
      if (elements[i] === 'C' && elements[i+1] === 'a') indices.add(5);
      else if (elements[i+1] && elements[i+1] === elements[i+1].toLowerCase()) continue;
      else if (index > -1) indices.add(index);
    }
    if (indices.size === 6){
      maxDiff = maxSize - +size;
      res = planet;
    }
  }
  return res;
}
​