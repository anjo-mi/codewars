 
export class Kata {
  static getCount(str: string): number {
    const vowels = new Set('aeiou');
    let count = 0;
    for (const c of str){
      if (vowels.has(c)) count++;
    }
    return count;
  }
}