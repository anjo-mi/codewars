class Dictionary {
    constructor() {
      
    }
    
    newEntry(key, value) {
      this[key] = value;
    }
    
    look(key) {
      return this[key] ? this[key] : `Can't find entry for ${key}`
    }
  }

    let d = new Dictionary();
  
      d.newEntry('Apple', 'A fruit');
      console.log(d.look('Apple'), 'A fruit');
  
      d.newEntry('Soccer', 'A sport');
      console.log(d.look('Soccer'), 'A sport');
    
      console.log(d.look('Hi'), 'Can\'t find entry for Hi');
      console.log(d.look('Ball'), 'Can\'t find entry for Ball');
  
      console.log(d.look('soccer'), 'Can\'t find entry for soccer');
      d.newEntry('soccer', 'a sport');
      console.log(d.look('soccer'), 'a sport');
  