 
Object.defineProperty(
    Array.prototype, 'zip', {value:
        function zip(b, mapFn) {
          const res = [];
          for (let i = 0 ; i < Math.min(this.length, b.length) ; i++){
            res.push(mapFn(this[i],b[i]));
          }
          return res;
        }
    }
);