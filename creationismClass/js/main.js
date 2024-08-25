class God{
  
    static create(){
      return [new Man('Adam'), new Woman('Eve')]
    }
  }
  
  class Human{
    constructor(name){
      this.name = name
    }
  }
  
  class Man extends Human{
    constructor(name, sex){
      super(name)
      this.sex = 'Man'
    }
  }
  
  
  class Woman extends Human{
    constructor(name, sex){
      super(name)
      this.sex = 'Woman'
    }
  }