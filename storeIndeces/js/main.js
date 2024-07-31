function gimme (tri) {
    let obj = {}
    for (let i = 0 ; i < tri.length ; i++){
      obj[tri[i]] = i
    }
    tri.sort((a,b) => a-b)
    return obj[tri[1]]
  }