 
function separateTypes(input) {
  return input.reduce((a,el) => {
    const type = typeof el;
    if (!(type in a)) a[type] = [];
    a[type].push(el);
    return a;
  }, {});
}