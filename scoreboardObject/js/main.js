function scoreboard(whoAteWhat){
    for ( let i = 0 ; i < whoAteWhat.length ; i++ ){
      whoAteWhat[i].score = whoAteWhat[i].chickenwings * 5 
                          + whoAteWhat[i].hamburgers * 3 
                          + whoAteWhat[i].hotdogs * 2
      delete whoAteWhat[i].chickenwings
      delete whoAteWhat[i].hamburgers
      delete whoAteWhat[i].hotdogs
    }
    whoAteWhat.sort((a,b) => {
      if (a.score !== b.score){
        return b.score - a.score
      }
      return a.name.localeCompare(b.name)
    })
    return whoAteWhat
  }