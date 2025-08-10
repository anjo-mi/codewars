 
    this.points = 0;
  }
  
  applyMove([c,r]){
    c -= 1;
    r = this.board.length - r;
    if (this.board[r][c]){
      this.board[r][c] = 0;
    }
  }
  
  calcFinalStats(){
    let total = 0;
    const counts = this.board.flat(Infinity).reduce((a,el) => {
      if (el) a[el] = (a[el] || 0) + 1;
      return a;
    }, {})
    for (const boat in this.counts){
      if (!(boat in counts)){
        total += 1;
        this.sunk += 1;
        this.notTouched -= 1;
      }
      else if(counts[boat] < this.counts[boat]){
        this.damaged += 1;
        total += .5;
        this.notTouched -= 1;
      }
      else if(counts[boat] === this.counts[boat]) total -= 1;
    }
    this.points = total;
  }
}