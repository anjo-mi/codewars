function stairsIn20(s){
    let total = 0
    total = s.reduce((a,el) => {
      return a += el.reduce((acc,elm) => {
        return acc += elm
      },0)
    },0)
    return total * 20
  }