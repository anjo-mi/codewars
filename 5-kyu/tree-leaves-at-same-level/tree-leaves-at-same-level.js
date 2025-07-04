 
function allLeavesAtSameLevel(node, depth = 0, depths = new Set()) {
  if (!node) return true;
  if (!node.left && !node.right) depths.add(depth);
  else{
    depth++;
    allLeavesAtSameLevel(node.left,depth,depths);
    allLeavesAtSameLevel(node.right,depth,depths);
  }
  return depths.size === 1
}