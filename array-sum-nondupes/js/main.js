const uniqueSum = lst => lst.length === 0 ?
                                null : 
                                Array.from(new Set([...lst]))
                                .reduce((a,el) => a + el)

console.log(uniqueSum([1,2,3]), 6)
console.log(uniqueSum([1,3,8,1,8]), 12)
console.log(uniqueSum([-1,-1,5,2,-7]), -1)
console.log(uniqueSum([]), null)