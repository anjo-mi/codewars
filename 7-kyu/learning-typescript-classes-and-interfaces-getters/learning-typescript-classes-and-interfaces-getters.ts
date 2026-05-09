 
export class Cuboid{
  length:number;
  height:number;
  width:number;
​
  constructor(length:number,width:number,height:number){
    this.length = length;
    this.width = width;
    this.height = height;
  }
  get volume(): number{
    return this.width * this.height * this.length;
  }
  get surfaceArea():number {
    return 2 * (
      (this.height * this.length) + 
      (this.width * this.height) + 
      (this.width * this.length)
    );
  }
}
​
export class Cube extends Cuboid {
  constructor(length:number){
    super(length,length,length);
  }
}
​