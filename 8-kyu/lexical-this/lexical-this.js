 
var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f){
      f.forEach(el => {
        this._friends.push(el)
      })
    }
  }
  return person;
}