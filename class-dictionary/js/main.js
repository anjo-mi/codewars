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

  