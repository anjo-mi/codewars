 
declare var ICuboid: {
  new (length: number): ICuboid;
}
​
interface ICuboid {
  length: number;
  surfaceArea: number;
  volume: number;
}
​
export class Cube implements ICuboid {
  length:number;
  constructor(s:number){
    this.length = s;
  }
  
  get surfaceArea(){
    return this.length * this.length * 6;
  }
  
  get volume(){
    return this.length**3;
  }
  
  set surfaceArea(num){
    this.length = Math.sqrt((num / 6));
  }
  
  set volume(num){
    this.length = Math.cbrt(num);
  }
}