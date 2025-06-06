 
class Arith{
  constructor(digit){
    this.conversions = {zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,
                       eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,
                       eighteen:18,nineteen:19,twenty:20};
    this.setVal(digit)
  }
  
  setVal(digit){
    this._val = this.conversions[digit];
  }
  
  add(str){
    let result = null;
    const total = this._val + this.conversions[str];
    for (const key in this.conversions){
      if (this.conversions[key] === total) result = key;
    }
    return result ? result : `Invalid entry`
  }
}