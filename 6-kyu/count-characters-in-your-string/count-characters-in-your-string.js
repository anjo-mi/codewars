 
const count = (string) => string.split('').reduce((a,el) => {
    a[el] = (a[el] || 0) + 1
    return a;
  }, {});