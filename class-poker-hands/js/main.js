var Result = { "win": 1, "loss": 2, "tie": 3 }

class PokerHand{
  constructor(hand){
    this.ranking = {
      2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 'T':10, 'J':11, 'Q':12, 'K':13, 'A':14
    }
    this.hand = hand.split(' ')
      .map(el => {
        el = { 'val': this.ranking[el[0]], 'suit': el[1] }
        return el
      })
    this.values = this.hand.reduce((a,el) => {
      a.push(el['val'])
      return a
    }, []).sort((a,b) => b - a)
    this.suits = this.hand.reduce((a,el) => {
      a.push(el['suit'])
      return a
    }, [])
    this.score = [0,this.values]
    this.findCombos()
  }
  
  findCombos(){
    let straight = true
    let flush = false
    let pairs = 0
    let trips = false
    let quads = false
    let values = this.values.reduce((a,el) => {
      a[el] = (a[el] || 0) + 1
      return a
    }, {})
    for (let i = 0 ; i < this.values.length - 1 ; i++ ){
      if (i === 0 && this.values[i] === 14 && this.values[i + 1] === 5) continue
      if ( this.values[i] - 1 !== this.values[i + 1] ){
        straight = false
      }
    }
    if (this.suits.every(el => el === this.suits[0])){
      flush = true
    }
    for (let key in values){
      if (values[key] === 2) pairs++
      if (values[key] === 3) trips = true
      if (values[key] === 4) quads = true
    }
    if (straight && flush && this.values[1] === 13){
      this.score[0] = 9
      return
    }
    if (straight && flush){
      this.score[0] = 8
      return
    }
    if (quads){
      this.score[0] = 7
      return
    }
    if (trips && pairs === 1){
      this.score[0] = 6
      return
    }
    if (flush && !straight){
      this.score[0] = 5
      return
    }
    if (straight && !flush){
      this.score[0] = 4
      return
    }
    if (trips && !pairs){
      this.score[0] = 3
      return
    }
    if (pairs === 2){
      this.score[0] = 2
      return
    }
    if (pairs === 1){
      this.score[0] = 1
      return
    }
  }
  
  
  compareWith(hand){
    console.log(this.hand, hand.hand)
    console.log(this.score, hand.score)
    if ( this.score[0] > hand.score[0] ){
//       Result.win++
      return Result.win
    }else if( this.score[0] < hand.score[0] ){
//       Result.loss++
      return Result.loss
    }else{
      console.log('i tried')
      for (let i = 0 ; i < this.score[1].length ; i++){
        if (this.score[1][i] > hand.score[1][i]){
          return Result.win
          }
        if (this.score[1][i] < hand.score[1][i]){
          return Result.loss
          }
      }
    }
    return Result.tie
  }
  
}

// PokerHand.prototype.compareWith = function(hand){
//     return Result.tie;
// }