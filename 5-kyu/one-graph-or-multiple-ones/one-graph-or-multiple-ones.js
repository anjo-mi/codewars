 
function Point(x, y) {
  this.x = x;
  this.y = y;
}
​
function Segment(a, b) {
  this.a = a;
  this.b = b;
}
​
​
function isOneGraph(input) {
  const graph = {};
  for (const {a,b} of input){
    const key = `${a.x}${a.y}`;
    const val = `${b.x}${b.y}`;
    if (!graph[key]) graph[key] = [];
    if (!graph[val]) graph[val] = [];
    graph[key].push(val);
    graph[val].push(key);
  }
  const v = new Set();
  let count = 0;
  for (const node in graph){
    if (v.has(node)) continue;
    v.add(node);
    const stack = [node];
    while (stack.length){
      const curr = stack.pop();
      for (const n of graph[curr]){
        if (!v.has(n)) stack.push(n);
        v.add(n);
      }
    }
    count++;
  }
  return count < 2;
}
​
​
​
​
​
​