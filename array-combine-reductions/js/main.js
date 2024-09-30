function dbSort(a){
    let nums = a.reduce((a,el) => {
      if (typeof el === 'number') a.push(el)
      return a
    }, [])
    
    let str = a.reduce((a,el) => {
    if (typeof el === 'string') a.push(el)
    return a
    }, [])
    return nums.sort((a,b) => a-b).concat(str.sort())
  }

  console.log(dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6]);
  console.log(dbSort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32]);
  console.log(dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [0,2,2,"Apple","Banana","Mango","Orange"]);
  console.log(dbSort(["C", "W", "W", "W", 1, 2, 0]), [0,1,2,"C","W","W","W"]);
  console.log(dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]), [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach'] )
  