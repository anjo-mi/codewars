 
export const towerBuilder = (nFloors: number): string[] => {
  const base:string[] = ' '.repeat((nFloors * 2) - 1).split('');
  const vanGogh:string[] = [];
  for (let i = 0 ; i < nFloors ; i++){
    const center:number = Math.floor((base.length / 2))
    base[center + i] = '*';
    base[center - i] = '*';
    vanGogh.push(base.join(''));
  }
  return vanGogh;
}