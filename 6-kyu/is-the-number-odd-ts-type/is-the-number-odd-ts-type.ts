 
export type IsOdd<N extends number> = `${N}` extends `${string}1` ? true
                                     :`${N}` extends `${string}3` ? true
                                     :`${N}` extends `${string}5` ? true
                                     :`${N}` extends `${string}7` ? true
                                     :`${N}` extends `${string}9` ? true : false;