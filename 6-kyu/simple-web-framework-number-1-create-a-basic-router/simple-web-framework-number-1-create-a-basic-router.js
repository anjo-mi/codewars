 
class Router{
  constructor(){
    this.routes = {};
  }
  
  bind(path,method,fn){
    this.routes[`${path}-${method}`] = fn;
  }
  
  runRequest(path,method){
    if (!(`${path}-${method}` in this.routes)) return 'Error 404: Not Found'
    return this.routes[`${path}-${method}`]();
  }
}