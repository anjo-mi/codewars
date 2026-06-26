 
export type StrLen<T extends string, Acc extends unknown[] = []> =
    T extends `${infer _1}${infer _2}${infer _3}${infer _4}${infer _5}${infer _6}${infer _7}${infer _8}${infer _9}${infer _10}${infer Rest}`
        ? StrLen<Rest, [...Acc,0,0,0,0,0,0,0,0,0,0]>
        : T extends `${infer _}${infer Rest}`
            ? StrLen<Rest, [...Acc, 0]>
            : Acc["length"];
​