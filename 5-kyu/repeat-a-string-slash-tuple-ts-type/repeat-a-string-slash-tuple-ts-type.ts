 
export type RepeatString<S extends string, N extends number, Acc extends string = "", C extends unknown[] = []> =
  C["length"] extends N ? Acc : RepeatString<S, N, `${Acc}${S}`, [...C, unknown]>;
​
export type RepeatArray<A extends unknown[], N extends number, Acc extends unknown[] = [], C extends unknown[] = []> =
  C["length"] extends N ? Acc : RepeatArray<A, N, [...Acc, ...A], [...C, unknown]>;
​
export type Repeat<T, R extends number> =
  T extends string ? RepeatString<T, R>
  : T extends unknown[] ? RepeatArray<T, R>
  : T;