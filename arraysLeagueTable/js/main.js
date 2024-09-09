function computeRanks(number, games) {
    let obj = {}
    for (let i = 0 ; i < number ; i++){
      obj[i] = {team: i, goalDiff: 0, goals: 0, points: 0}
    }
  games.forEach((el,i) => {
    obj[el[0]].goals += el[2]
    obj[el[1]].goals += el[3]
    obj[el[0]].goalDiff += el[2] - el[3]
    obj[el[1]].goalDiff += el[3] - el[2]
    if (el[2] > el[3])  { obj[el[0]].points += 2 }
    else if(el[3] > el[2]) { obj[el[1]].points += 2 }
    else if (el[2] === el[3]){
        obj[el[0]].points++
        obj[el[1]].points++
    }
  })
  let teamArray = Array.from(Object.values(obj))
  teamArray.sort((a,b) => {
    if (a.points === b.points && a.goalDiff === b.goalDiff){
        return b.goals - a.goals
    }
    else if (a.points === b.points){
        return b.goalDiff - a.goalDiff
    }
    else { return b.points - a.points }
  })
  teamArray.forEach((el,i) => {
    if (i === 0) {el.position = 1}
    if (i > 0){
        if (el.points === teamArray[i - 1].points && 
            el.goals  === teamArray[i - 1].goals  && 
            el.goalDiff === teamArray[i-1].goalDiff){
                el.position = teamArray[i - 1].position
            }else{
                el.position = i + 1
            }
    }
  })
  teamArray.sort((a,b) => a.team - b.team)
  let arr = []
  teamArray.forEach(el => arr.push(el.position))
  return arr
}



console.log(computeRanks(6, 
    [[0, 5, 2, 2],
     [1, 4, 0, 2],
     [2, 3, 1, 2],
     [1, 5, 2, 2],
     [2, 0, 1, 1],
     [3, 4, 1, 1],
     [2, 5, 0, 2],
     [3, 1, 1, 1],
     [4, 0, 2, 0]]),
[4,4,6,3,1,2]);

console.log(computeRanks(6, 
    [[0, 5, 2, 0],
     [1, 4, 2, 2],
     [2, 3, 1, 3],
     [1, 5, 0, 0],
     [2, 0, 2, 1],
     [3, 4, 3, 1]]),
[2,3,4,1,5,6]);

console.log(computeRanks(4, 
    [[0, 3, 1, 1],
     [1, 2, 2, 2],
     [1, 3, 2, 0],
     [2, 0, 2, 0]]),
[3,1,1,3]);

console.log(computeRanks(10, []),
[1,1,1,1,1,1,1,1,1,1]);

console.log(computeRanks(8, [[0, 7, 2, 0]]),
[1,2,2,2,2,2,2,8]);