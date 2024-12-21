function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function getNth(node, index) {
    if (!node) throw new Error('Invalid index')
    if (index === 0) return node
    
    let currNode = node
    let currInd = 0
    
    while (currNode && currInd < index){
      currNode = currNode.next
      currInd++
    }
    
    if (currNode){
      return currNode
    }else{
      throw new Error('Invalid index')
    }
    
  }

console.log(getNth(list, 0).data, 1, "First node should be located at index 0.");
console.log(getNth(list, 1).data, 2, "Second node should be located at index 1.");
console.log(getNth(list, 2).data, 3, "Third node should be located at index 2.");
console.log("Invalid index value should throw error.", function() {getNth(list, 3)});
console.log("Invalid index value should throw error.", function() {getNth(list, 100)});
console.log("Null linked list should throw error.", function() {getNth(null, 0)});