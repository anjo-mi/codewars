class Automaton{
    constructor(){
      this.states = [ { 0: 'q1', 1: 'q2' } , 
                      { 0: 'q3', 1: 'q2' } , 
                      { 0: 'q2', 1: 'q2' } ]
      this.status = 'q1'
    }
  }
  
  Automaton.prototype.readCommands = function(commands){
    console.log(commands)
    for ( let i = 0 ; i < commands.length ; i++ ){
      console.log(this.status, this.states[0], this.states[1], this.states[2], commands[i])
      switch (this.status){
        case 'q1' :
          this.status = this.states[0][ commands[i] ]
          break
        case 'q2' :
          this.status = this.states[1][ commands[i] ]
          break
        case 'q3' :
          this.status = this.states[2][ commands[i] ]
          break  
      }
    }
    return this.status === 'q2'
  }
  
  var myAutomaton = new Automaton();


  console.log(myAutomaton.readCommands(["1"]), true);
  console.log(myAutomaton.readCommands(["1", "0", "0", "1"]), true);