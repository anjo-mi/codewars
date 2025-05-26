function bestFriend(txt, a, b) {
  for (let i = 0 ; i < txt.length ; i++){
    if (txt[i] === a){
      if(i === txt.length - 1 || txt[i+1] !== b) return false;
    }
  }
  return true;
}