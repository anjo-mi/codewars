 
​
var Converter = {
  toAscii: function (hex) {
    let s = '';
    for (let i = 0 ; i < hex.length ; i+=2){
      const x = hex.slice(i,i+2);
      s += String.fromCharCode(parseInt(x,16));
    }
    return s;
  },
  toHex: function (str) {
    let s = '';
    for (const char of str){
      const x = char.charCodeAt(0);
      s += x.toString(16).padStart(2,'0');
    }
    return s;
  }
}
​