 
function lastIndexOf(head, value) {
  if (!head) return -1;
  let current = head;
  let count = 0;
  let index = -1;
  while( current ){
    if(current.data === value){
      index = count;
      }
    current = current.next;
    count++;
  }
  return index;
}