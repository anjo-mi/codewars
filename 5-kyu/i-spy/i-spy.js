 
function spyOn (func) {
  const newFunc = function (...args){
    newFunc.count++;
    args.forEach(arg => {
      newFunc.called.add(arg)
    });
    const val = func(...args)
    newFunc.returns.add(val);
    return val;
  };
  newFunc.count =  0;
  newFunc.returns = new Set();
  newFunc.called = new Set();
  newFunc.callCount = function(){
    return newFunc.count;
  };
  newFunc.wasCalledWith = function(key){
    return newFunc.called.has(key);
  };
  
  newFunc.returned = function(key){
    return newFunc.returns.has(key)
  };
  
  return newFunc;
}