function newAvg(arr, newavg) {
    let below = (arr.reduce((a,el) => a += (el - newavg), 0))
    below -= newavg
    if (below >= 0) throw new Error('Expected New Average is too low')
    return Math.ceil(-below)
}


console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90, 628))
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92, 645))