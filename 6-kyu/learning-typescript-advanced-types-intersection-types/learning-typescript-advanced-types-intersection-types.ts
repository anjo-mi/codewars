 
export function intersect<T extends Object, U extends Object>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        if (id in second) (<any>result)[id] = (<any>first)[id];
    }
    return result;
}
​