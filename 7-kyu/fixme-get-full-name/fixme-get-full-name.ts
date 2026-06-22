 
export class Dinglemouse{
  public firstName: string;
  public lastName: string;
  constructor( firstName:string, lastName:string){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFullName(){
    return `${this.firstName} ${this.lastName}`.trim();
  }
  
}