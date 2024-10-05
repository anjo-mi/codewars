class Rational {
  constructor(numerator, denominator) {
      this.noom = numerator;
      this.denom = denominator || 1;
      this.simplify();
  }

  toString() {
      return this.noom + "/" + this.denom;
  }

    
  simplify(){
    
    let scale = Math.pow(10, Math.max(
        this.decimal( this.noom.toString()  ),
        this.decimal( this.denom.toString() )
    ))
    
    this.noom = Math.round(this.noom * scale)
    this.denom = Math.round(this.denom * scale)
    
    
    let gcd = (a,b) => {
      a = Math.abs(a)
      b = Math.abs(b)
      while (b !== 0){
        let t = b
        b = a % b
        a = t
      }
      return a
    }
    let greatest = gcd(this.noom, this.denom)
    this.noom = this.noom / greatest
    this.denom = this.denom / greatest
    
    if (this.denom === 0) throw new Error('can\'t divide by 0')
    if (this.denom < 0){
      this.noom *= -1
      this.denom = Math.abs(this.denom)
    }      
  }

  equals(b) {
      return this.noom / this.denom === b.noom / b.denom
  }

  lessThan(b) {
      return this.noom / this.denom < b.noom / b.denom
  }

  greaterThan(b) {
      return (this.noom / this.denom) > (b.noom / b.denom)
  }

  lessThanOrEquals(b) {
      return this.noom / this.denom <= b.noom / b.denom
  }

  greaterThanOrEquals(b) {
      return this.noom / this.denom >= b.noom / b.denom
  }

  add(b) {
      var gcd = function (a, b) {
        return a ? gcd(b % a, a) : b;
      }

      var lcm = function (a, b) {
        return a * b / gcd(a, b);
      }
      let lowest = lcm(this.denom, b.denom)
      
      let a = (this.noom * (lowest / this.denom)) + (b.noom * (lowest / b.denom))
      
      
      return new Rational( a,lowest );
  }

  sub(b) {
      var gcd = function (a, b) {
        return a ? gcd(b % a, a) : b;
      }

      var lcm = function (a, b) {
        return a * b / gcd(a, b);
      }
      let lowest = lcm(this.denom, b.denom)
      
      let a = (this.noom * (lowest / this.denom)) - (b.noom * (lowest / b.denom))
      
      
      return new Rational( a,lowest );
  }

  mul(b) {
      let num = this.noom  * b.noom
      let denom = this.denom * b.denom
      return new Rational(num,denom);
  }

  div(b) {
      let num = this.noom * b.denom
      let denom = this.denom * b.noom
      return new Rational(num,denom);
  }

  decimal(num){
    let total = 0
    for (let char of num){
      if (num.indexOf(char) > num.indexOf('.')){
        total++
      }
    }
    return total
  }


}