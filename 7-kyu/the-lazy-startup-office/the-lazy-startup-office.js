function binRota(arr){
  const order = [];
  for (let i = 0 ; i < arr.length ; i++){
    if (i % 2 === 0){
      for (let j = 0 ; j < arr[i].length ; j++){
        order.push(arr[i][j]);
      }
    }else{
      for (let j = arr[i].length - 1 ; j >= 0 ; j--){
        order.push(arr[i][j]);
      }
    }
  }
  return order;
}

function binRota(arr){
  return arr.reduce((a,el,i) => {
    return i % 2 ? a.concat(el.reverse()) : a.concat(el);
  }, []);
}
