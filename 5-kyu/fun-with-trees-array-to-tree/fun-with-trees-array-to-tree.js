 
function arrayToTree(array) {
  if (!array.length) return undefined;
  const nodes = [ new TreeNode( array[0] ) ];
  let i = 0;
  while (i < array.length){
    let leftInd = 2 * i + 1;
    let rightInd = 2 * i + 2;
    const left = leftInd < array.length ? new TreeNode(array[leftInd]) : null;
    const right = rightInd < array.length ? new TreeNode(array[rightInd]) : null;
    if (left) nodes[i].left = left;
    if (right) nodes[i].right = right;
    nodes.push(nodes[i].left);
    nodes.push(nodes[i].right);
    i++;
  }
  return nodes[0];
};
​