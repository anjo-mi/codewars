 
class Lamp{
  constructor(color){
    this.color = color;
    this.on = false;
  }
  
  toggleSwitch(){
    this.on = this.on ? false : true;
  }
  
  state(){
    return  `The lamp is ${this.on ? 'on' : 'off'}.`
  }
}