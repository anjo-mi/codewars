 
export type EvenOdd = {
  (n: number): string;
  [key: number]: () => string;
  new (n: number): { value: string };
}
​
export const evenOrOdd = new Proxy(
  function(n: number): string {
    return n % 2 ? 'Odd' : 'Even';
  },
  {
    get(t, p: string) {
      const n = +p;
      const result = n % 2 ? 'Odd' : 'Even';
      function Ctor(this: any) { return new String(result); }
      Ctor.toString = () => result;
      Ctor.valueOf = () => result;
      return Ctor;
    },
    construct(target, [n]: [number]) {
      return new String(n % 2 ? 'Odd' : 'Even' );
    }
  }
) as unknown as EvenOdd;