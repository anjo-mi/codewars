
function solve(s,g){
    if (!(s % g)) return -1;
    const dividedSum = s / g;
    let m = 1;
    let n = dividedSum - m;
    if (g*m + g*n === s) return [m * g, n * g];
    return -1
}