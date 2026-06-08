 
export class Serializable {
  serialize(): string {
    return JSON.stringify(this);
  }
  
  deserialize(source: string): void {
    const obj = JSON.parse(source);
    for (const prop in obj){
      (this as any)[prop] = obj[prop];
    }
  }
}