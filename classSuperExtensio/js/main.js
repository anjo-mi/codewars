class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

  class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, 0, 'shark', status);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, status){
      super(name, age, 4, 'cat', status)
      }
    introduce(){
      return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, status, master){
      super(name, age, 4, 'dog', status)
      this.master = master
      }
    greetMaster(){
      return `Hello ${this.master}`
    }
  }

  var billy = new Shark("Billy", 3, "Alive and well");
  Test.assertEquals(billy.name, "Billy");
  Test.assertEquals(billy.age, 3);
  Test.assertEquals(billy.legs, 0);
  Test.assertEquals(billy.species, "shark");
  Test.assertEquals(billy.status, "Alive and well");
  Test.assertEquals(billy.introduce(), `Hello, my name is Billy and I am 3 years old.`);
  var charles = new Shark("Charles", 8, "Finding a mate");
  Test.assertEquals(charles.name, "Charles");
  Test.assertEquals(charles.age, 8);
  Test.assertEquals(charles.legs, 0);
  Test.assertEquals(charles.species, "shark");
  Test.assertEquals(charles.status, "Finding a mate");
  Test.assertEquals(charles.introduce(), `Hello, my name is Charles and I am 8 years old.`);



  var cathy = new Cat("Cathy", 7, "Playing with a ball of yarn");
  console.log(cathy.name, "Cathy");
  console.log(cathy.age, 7);
  console.log(cathy.legs, 4);
  console.log(cathy.species, "cat");
  console.log(cathy.status, "Playing with a ball of yarn");
  console.log(cathy.introduce(), "Hello, my name is Cathy and I am 7 years old.  Meow meow!");
  var spitsy = new Cat("Spitsy", 6, "sleeping");
  console.log(spitsy.name, "Spitsy");
  console.log(spitsy.age, 6);
  console.log(spitsy.legs, 4);
  console.log(spitsy.species, "cat");
  console.log(spitsy.status, "sleeping");
  console.log(spitsy.introduce(), "Hello, my name is Spitsy and I am 6 years old.  Meow meow!");


  var doug = new Dog("Doug", 12, "Serving his master", "Eliza");
  console.log(doug.name, "Doug");
  console.log(doug.age, 12);
  console.log(doug.legs, 4);
  console.log(doug.species, "dog");
  console.log(doug.status, "Serving his master");
  console.log(doug.introduce(), "Hello, my name is Doug and I am 12 years old.");
  console.log(doug.greetMaster(), "Hello Eliza");