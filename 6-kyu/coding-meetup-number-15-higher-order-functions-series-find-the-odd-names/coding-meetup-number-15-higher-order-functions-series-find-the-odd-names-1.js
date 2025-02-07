function findOddNames(list) {
  const arr = [];
  for (let i = 0 ; i < list.length ; i++){
    if (list[i].firstName.split('').reduce((a,el) => a + el.charCodeAt(0), 0) % 2 === 1){
      arr.push(list[i])
    }
  }
  return arr
}