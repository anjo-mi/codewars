function length(head) {
  let i = 0;
  for (let current = head ; current !== null ; current = current.next){
    i++;
  }
  return i;
}