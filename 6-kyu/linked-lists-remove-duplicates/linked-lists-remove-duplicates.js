 
function Node(data) {
  this.data = data;
  this.next = null;
}
​
function removeDuplicates(head) {
  let current = head;
  let previous = head;
  const datas = new Set();
  if (!current) return head;
  if (!current.next) return head;
  while (current){
    if (datas.has(current.data)){
      previous.next = current.next;
      current = current.next;
    }else{
      datas.add(current.data);
      previous = current;
      current = current.next;
    }
  }
  return head;
}