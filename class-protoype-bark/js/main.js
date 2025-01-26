Dog.prototype.bark = () => 'bark bitch!'

  console.log('Can you make newly created dogs bark?');
  var apollo = new Dog('Apollo', 'Dobermann', 'male', '4');
  var zeus = new Dog('Zeus', 'Dobermann', 'male', '4');
  
  console.log(apollo.bark(), 'Woof!');
  console.log(zeus.bark(), 'Woof!');
  