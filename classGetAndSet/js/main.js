class Cube{
    constructor(side){
      this._side = side
    }
    get length(){
      return this._side
    }
    
    set length(side){
      this._side = side
    }
    
    get height(){
      return this._side
    }
    
    set height(side){
      this._side = side
    }
    
    get width(){
      return this._side
    }
    
    set width(side){
      this._side = side
    }
    
    get surfaceArea(){
      return this._side * this._side * 6
    }
    
    
    set surfaceArea(area){
      this._side = Math.sqrt(area / 6)
    }
    
    get volume(){
      return this._side ** 3
    }
    
    set volume(side){
      this._side = Math.cbrt(side)
    }
  }

  var cube = new Cube(1);
  console.log(cube.length, 1);
  console.log(cube.surfaceArea, 6);
  console.log(cube.volume, 1);
  cube.length = 2;
  console.log(cube.surfaceArea, 24);
  console.log(cube.volume, 8);
  cube.surfaceArea = 54;
  console.log(cube.length, 3);
  console.log(cube.volume, 27);
  cube.surfaceArea = 96;
  console.log(cube.length, 4);
  console.log(cube.volume, 64);
  cube.volume = 125;
  console.log(Math.roundTo(cube.length, 5), 5);
  console.log(Math.roundTo(cube.surfaceArea, 5), 150);
  cube.volume = 1000;
  console.log(Math.roundTo(cube.length, 5), 10);
  console.log(Math.roundTo(cube.surfaceArea, 5), 600);