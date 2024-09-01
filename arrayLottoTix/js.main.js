function bingo(ticket, win){
    let totalWins = 0
    ticket.forEach(el => { 
      let miniWin = false
      for (let char of el[0]){
        if (char.charCodeAt(0) === el[1]){
          miniWin = true
          totalWins++
          return
        }
      }
    })
    return totalWins >= win ? 'Winner!' : 'Loser!'
}


console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))
// 'Loser!');
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1))
// 'Winner!'
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3))
// 'Loser!'