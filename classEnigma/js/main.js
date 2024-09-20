class Plugboard{
    constructor(wires){
      this.connect = {}
      if (!wires) return
      if (wires.length > 20){
        throw new Error('Too many wires defined')
      }
      if (wires.length % 2 !== 0){
        throw new Error('Not enough wire ends defined')
      }
      
      
      wires = wires.toUpperCase().split('')
      for ( let i = 0 ; i < wires.length ; i+= 2 ){
        let a = wires[i]
        let b = wires[i + 1]
        
        if (this.connect[a] || this.connect[b]){
          throw new Error('Wires can only be mapped once')
        }
        
        this.connect[a] = b
        this.connect[b] = a
        
      }
    }
    process(wire){
      return this.connect[wire] || wire
    }
  }



let plugboard = new Plugboard("AB")
console.log(plugboard.process('A'), 'B', "Invalid translation")
console.log(plugboard.process('B'), 'A', "Invalid translation")
console.log(plugboard.process('C'), 'C', "Invalid translation")