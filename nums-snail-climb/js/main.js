function snail(column, day, night) {
    let h = 0, i = 0;
    while (h < column){
      i++
      h += day
      if (h >= column){
        return i
      }
      h -= night
    }
  }

  console.log(snail(3,2,1) , 2);
  console.log(snail(10,3,1) , 5);
  console.log(snail(10,3,2) , 8);
  console.log(snail(100,20,5) , 7);
  console.log(snail(5,10,3) , 1);