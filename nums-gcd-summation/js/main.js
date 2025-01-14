
function solve(s,g){
    if ((s % g)) return -1;
    const dividedSum = s / g;
    let m = 1;
    let n = dividedSum - m;
    if (g*m + g*n === s) return [m * g, n * g];
    return -1
}

console.log(solve(6,3), [3,3]);
console.log(solve(8,2), [2,6]);
console.log(solve(10,3), -1);
console.log(solve(12,4), [4,8]);
console.log(solve(12,5), -1);