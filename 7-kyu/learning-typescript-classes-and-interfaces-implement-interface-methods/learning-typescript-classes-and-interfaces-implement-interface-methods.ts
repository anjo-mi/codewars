 
interface IGeometricFigure {
  area: () => number;
  perimeter: () => number;
}
​
export class Square implements IGeometricFigure {
  side: number;
  constructor(s:number){
    this.side = s;
  }
  area(){
    return this.side * this.side;
  }
  perimeter(){
    return this.side * 4;
  }
}
​
export class Circle implements IGeometricFigure {
  radius: number;
  constructor(r:number){
    this.radius = r;
  }
  area(){
    return Math.PI * (this.radius**2);
  }
  perimeter(){
    return Math.PI * 2 * this.radius;
  }
}
​