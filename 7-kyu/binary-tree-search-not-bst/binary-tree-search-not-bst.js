 
function search(n, root) {
  if (!root) return false;
  const s = [root];
  while (s.length){
    const curr = s.pop();
    if (curr.value === n) return true;
    if (curr.right) s.push(curr.right);
    if (curr.left) s.push(curr.left);
  }
  return false;
}