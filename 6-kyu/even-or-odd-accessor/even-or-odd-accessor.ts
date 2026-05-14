 
export type EvenOdd = {
  (n:number): string;
  [key:number]: string;
}
​
export const evenOrOdd = new Proxy(
  function(n:number): string {
    return n % 2 ? 'Odd' : 'Even';
  },
  {
    get(t, p:string): string {
      const n = +p;
      return n % 2 ? 'Odd' : 'Even';
    }
  }
) as unknown as EvenOdd;