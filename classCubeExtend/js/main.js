class Cuboid {
    constructor(length, width, height){
      this.length = length
      this.width = width
      this.height = height
    }
    
    get surfaceArea(){
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
    
    get volume(){
      return this.length * this.width * this.height
    }
    
  }
  class Cube extends Cuboid {
    constructor(length){
      super(length, length, length)
    }
  }

var cuboid = new Cuboid(1, 2, 3);
console.log(cuboid.length, 1);
console.log(cuboid.width, 2);
console.log(cuboid.height, 3);
console.log(cuboid.volume, 6);
console.log(cuboid.surfaceArea, 22);
cuboid.length = 4;
console.log(cuboid.volume, 24);
console.log(cuboid.surfaceArea, 52);
cuboid.width = 5;
console.log(cuboid.volume, 60);
console.log(cuboid.surfaceArea, 94);
cuboid.height = 6;
console.log(cuboid.volume, 120);
console.log(cuboid.surfaceArea, 148);
[cuboid.length, cuboid.width, cuboid.height] = [7, 8, 9];
console.log(cuboid.volume, 504);
console.log(cuboid.surfaceArea, 382);

var cube = new Cube(1);
console.log(cube.length, 1);
console.log(cube.width, 1);
console.log(cube.height, 1);
console.log(cube.volume, 1);
console.log(cube.surfaceArea, 6);
cube.length = cube.width = cube.height = 2;
console.log(cube.volume, 8);
console.log(cube.surfaceArea, 24);
cube.length = cube.width = cube.height = 3;
console.log(cube.volume, 27);
console.log(cube.surfaceArea, 54);
cube.length = cube.width = cube.height = 5;
console.log(cube.volume, 125);
console.log(cube.surfaceArea, 150);
cube.length = cube.width = cube.height = 10;
console.log(cube.volume, 1000);
console.log(cube.surfaceArea, 600);