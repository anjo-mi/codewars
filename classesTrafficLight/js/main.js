class SmartTrafficLight {
    constructor(str1, str2) {
      this.cars1 = str1[0]
      this.str1 = str1[1]
      this.cars2 = str2[0]
      this.str2 = str2[1]
    }

    turngreen() {
      console.log(this.cars1, this.cars2, this.str1, this.str2)
      if (this.cars1 === this.cars2) {return null}
      if (this.cars1  >  this.cars2){
        this.cars1 = 0
        return this.str1
      }
      if (this.cars2  >  this.cars1){
        this.cars2 = 0
        return this.str2
      }
    }
  }

let t = new SmartTrafficLight([42, '27th ave'], [72, '3rd st'])
console.log(t.turngreen())// '3rd st', "Expect '3rd st' to be first"
console.log(t.turngreen())// '27th ave', "Expect '27th ave' to be second"
console.log(t.turngreen())// null, "Expect to be 'null'"

t = new SmartTrafficLight([45, '13th ave'], [3, '21st st'])
console.log(t.turngreen())// '13th ave', "Expect '13th ave' to be first"
console.log(t.turngreen())// '21st st', "Expect '21st st' to be second"
console.log(t.turngreen())// null, "Expect to be 'null'"