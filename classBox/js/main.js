class Block{

    constructor(data){
      this.width = data[0]
      this.length = data[1]
      this.height = data[2]
    }
    
    getWidth(){
      return this.width
    }
    
    getLength(){
      return this.length
    }
    
    getHeight(){
      return this.height
    }
    
    getVolume(){
      return this.height * this.width * this.length
    }
    
    getSurfaceArea(){
      return 2 * (this.length * this.height + 
                  this.length * this.width + 
                  this.height * this.width)
    }
    
  }