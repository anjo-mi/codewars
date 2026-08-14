 
export const  noSpace = (x:string):string => x.split(' ').map(char => char.trim()).join('');