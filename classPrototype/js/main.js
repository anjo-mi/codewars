//Re-open the class String and add the "myNewMethod" method.

String.prototype.myNewMethod = function(str){
    return this.toUpperCase()
  }