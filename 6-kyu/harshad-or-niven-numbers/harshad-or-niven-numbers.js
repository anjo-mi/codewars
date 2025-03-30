 
var Harshad = ( function() {
  'use strict';
  return {
    isValid: function( n ) {
      const digTotal = n.toString().split('').map(Number).reduce((a,el) => a + el, 0);
      return !(n % digTotal);
    },
    getNext: function( n ) {
      return this.isValid(n+1) ? n+1 : this.getNext(n+1);
    },
    getSerie: function( count, start = 0 ) {
      const arr = [];
      if (!count) return arr;
      const next = (this.getNext(start));
      arr.push(next);
      return arr.concat(this.getSerie(--count, next));
    }
  };
} () );