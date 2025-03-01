const shuffleIt = (arr,...pos) => {
  for (let i = 0 ; i < pos.length ; i++){
    const a = pos[i][0];
    const b = pos[i][1];
    const first = arr[a];
    const second = arr[b];
    arr[a] = second;
    arr[b] = first;
  }
  return arr;
}