 
function makeLazy (fn,...args) {
  return function () {
    return fn(...args);
  };
}