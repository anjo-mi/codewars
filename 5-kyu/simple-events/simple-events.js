 
class Event{
  subscribe(fn){
    if (!this.handlers){
      this.handlers = [];
    }
    this.handlers.push(fn);
  }
  unsubscribe(fn){
    if (!this.handlers.length) return;
    this.handlers = this.handlers.filter(fnc => fnc !== fn)
  }
  emit(...args){
    this.handlers.forEach(fn => {
      fn(...args)
    })
  }
}
​