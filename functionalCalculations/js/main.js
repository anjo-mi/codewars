
function one(op = null) {
    if (!op) return 1
    return op(1)
}
function zero(op = null) {
    if (!op) return 0
    return op(0)
}
function two(op = null) {
    if (!op) return 2
    return op(2)
}
function three(op = null) {
    if (!op) return 3
    return op(3)
}
function four(op = null) {
    if (!op) return 4
    return op(4)
}
function five(op = null) {
    if (!op) return 5
    return op(5)
}
function six(op = null) {
    if (!op) return 6
    return op(6)
}
function seven(op = null) {
    if (!op) return 7
    return op(7)
}
function eight(op = null) {
    if (!op) return 8
    return op(8)
}
function nine(op = null) {
    if (!op) return 9
    return op(9)
}

function plus(n) {
    return function(num){
        return num + n
    }
}
function minus(n) {
    return function(num){
        return num - n
    }
}
function times(n) {
    return function(num){
        return num * n
    }
}
function dividedBy(n) {
    return function(num){
        return Math.floor(num / n)
    }
}


console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
console.log(eight(dividedBy(three()))); // must return 2 (not 2.66)