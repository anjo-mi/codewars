 
function arrayToTree(a,i=0) {
  if (i >= a.length) return undefined;
  return new TreeNode( a[i] , arrayToTree( a , 2*i+1 ) , arrayToTree( a, 2*i+2 ) );
};