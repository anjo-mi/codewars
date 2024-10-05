class Vector{
    constructor(parts){
      this.points = parts
    }
    
    add(vec){
      if ( this.points.length !== vec.points.length ) throw new Error('diff lengths brah')
      let newVec = this.points.map((el,i) => el += vec.points[i])
      return new Vector(newVec)
    }
    
    subtract(vec){
      if ( this.points.length !== vec.points.length ) throw new Error('diff lengths brah')
      let newVec = this.points.map((el,i) => {
        el -= vec.points[i]
        return el
      })
      return new Vector(newVec)
    }
    
    dot(vec){
      if ( this.points.length !== vec.points.length ) throw new Error('diff lengths brah')
      let addedMults = this.points.reduce((a,el,i) => {
        a = a + (el * vec.points[i])
        return a
      }, 0)
      return addedMults
    }
    
    norm(){
      return Math.sqrt( this.points.reduce((a,el) => a + el ** 2) )
    }
    
    equals(vec){
      for (let i = 0 ; i < this.points.length ; i++){
        if (this.points[i] !== vec.points[i]){
          return false
        }
      }
      return true
    }
    
    toString(){
      return '(' + this.points.join(',') + ')'
    }
    
  }


  var a = new Vector([1,2]);
var b = new Vector([3,4]);

console.log(a.add(b).equals(new Vector([4,6])), true, [4,6]);