 
export class Kata {
  static highAndLow(numbers: string): string {
    const max = Math.max(...numbers.split(' ').map(Number));
    const min = Math.min(...numbers.split(' ').map(Number));
    return `${max} ${min}`;
  }
}