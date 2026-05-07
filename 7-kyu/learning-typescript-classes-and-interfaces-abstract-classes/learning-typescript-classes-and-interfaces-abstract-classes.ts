 
export abstract class Animal {
  protected constructor(public value: number) {}
​
  convertTo (someone: Animal): number {
    return this.value = someone.value / this.value;
  }
}
​
export class Boa extends Animal {
  constructor(){
    super(1);
  }
}
​
export class Parrot extends Animal {
  constructor(){
    super(38);
  }
}
​
export class Monkey extends Animal {
  constructor(){
    super(5);
  }
}
​