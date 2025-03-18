function Node(data) {
  this.data = data;
  this.next = null;
}
​
function getNth(node, index) {
  if (!node.data) throw new Error('invalid index');
  if (index === 0) return node;
  return getNth(node.next, index - 1);
}
​