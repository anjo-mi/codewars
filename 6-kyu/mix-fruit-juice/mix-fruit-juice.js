 
const reg = new Set(['banana', 'orange', 'apple', 'lemon', 'grapes']);
const odd = new Set(['avocado', 'strawberry', 'mango']);
​
function mixFruit (arr) {
  const total = arr.map(fruit => fruit.toLowerCase()).reduce((a,el) => {
    if (reg.has(el)) return a + 5;
    if (odd.has(el)) return a + 7;
    return a + 9;
  },0) / arr.length;
  return Math.round(total);
}
​