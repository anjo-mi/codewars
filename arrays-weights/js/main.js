function rank(str, we, n) {
    if (str === '') return 'No participants'
    let alpha = ' abcdefghijklmnopqrstuvwxyz'
    let namesAndWeights = str.split(',').reduce((a,el,i) => {
        a[el] = (el.toLowerCase().split('').reduce((ac,e) => ac += alpha.indexOf(e), 0) + el.length) * we[i]
        return a
      }, {})
    namesAndWeights = Array.from(Object.entries(namesAndWeights))
    if (n > namesAndWeights.length) return 'Not enough participants'
    console.log(namesAndWeights)
    namesAndWeights.sort((a,b) => {
      if (a[1] > b[1]) return -1
      if (a[1] < b[1]) return 1
      return a[0].localeCompare(b[0])
    })
    console.log(namesAndWeights, n)
    return namesAndWeights[n-1][0]
  }


  console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4), "Benjamin")
  console.log(rank("Lagon,Lily", [1, 5], 2), "Lagon")
  console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8), "Not enough participants")
  console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6), "No participants")