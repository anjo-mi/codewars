function last(...args) {
    console.log(args)
    if (typeof args[0] === 'string' && !args[1]){
      return args[0][args[0].length - 1]
    }
    if (Array.isArray(args[0]) && !args[1]){
      return args[0][args[0].length - 1]
    }
    return args[args.length-1]
  }

console.log(last(5), 5, 'last(5)');
console.log(last("123"), "3", 'last("123")');
console.log(last([1, 2, 3]), 3, 'last([1, 2, 3])');
console.log(last([1]), 1, 'last([1])');
console.log(last([1, 2, 3, [4, 5]]), [4, 5], 'last([1, 2, 3, [4, 5]])');
console.log(last(1, 2, 3), 3, 'last(1, 2, 3)');
console.log(last('a', 'b', 'c'), 'c', "last('a', 'b', 'c')");
console.log(last([1], [2], [3]), [3], "last([1], [2], [3])");
console.log(last(1, 2, 3, [4, 5]), [4, 5], 'last(1, 2, 3, [4, 5])');