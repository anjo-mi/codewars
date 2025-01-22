function listToArray(list) {
    const arr = []
    let current = list.value
    let next = list.next
    arr.push(current)
    while(next){
      current = next
      arr.push(current.value)
      next = current.next
    }
    return arr
  }

  function listToArray(list){
    const arr = [];
    for (let node = list; node; node = node.next){
        arr.push(node.value)
    }
    return arr
  }

var list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
var list2 = {value: "foo", next: {value: "bar", next: null}};

console.log(listToArray(list1), [1, 2, 3]);
console.log(listToArray(list2), ["foo", "bar"]);