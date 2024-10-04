class Version{
    constructor(a,b,c){
      this.maj = a
      this.min = b
      this.pat = c
      
      
      this.currVers = `${ this.maj }.${ this.min }.${ this.pat }`
      this.versions = [ this.currVers ]
    }
    
    major(){
      this.maj += 1
      this.min = 0
      this.pat = 0
      
      this.currVers = `${ this.maj }.${ this.min }.${ this.pat }`
      this.versions.push( this.currVers )
      console.log('major', this.currVers, this.versions, this.maj, this.min, this.pat)
      return this
    }
    
    minor(){
      this.min += 1
      this.pat = 0
      
      this.currVers = `${ this.maj }.${ this.min }.${ this.pat }`
      this.versions.push( this.currVers )
      console.log('minor', this.currVers, this.versions, this.maj, this.min, this.pat)
      return this
    }
    
    patch(){
      this.pat += 1
      this.currVers = `${ this.maj }.${ this.min }.${ this.pat }`
      this.versions.push( this.currVers )
      console.log('patch', this.currVers, this.versions, this.maj, this.min, this.pat)
      return this
    }
    
    rollback(){
      let i = this.versions.indexOf(this.currVers)
      if (i === 0) throw new Error('Cannot rollback!')
      else {
        this.currVers = this.versions[i-1]
        this.versions.pop()
        let x = this.currVers.split('.').map(Number)
        this.maj = x[0]
        this.min = x[1]
        this.pat = x[2]
      }
      return this
    }
    
    release(){
      return this.currVers
    }
  }
  
  
  
  
  const vm = function(str){
    console.log(str)
    if (!str) return new Version(0,0,1)
    str = str.split('.')
    
    if (str.slice(0,3).some(el => isNaN(el))) throw new Error('Error occured while parsing version!')
    
    let a = +str[0] || 0
    let b = +str[1] || 0
    let c = +str[2] || 0
    
    if (a === 0 && b === 0) c = 1
    
    return new Version(a,b,c)
  }



      console.log(vm().release(), '0.0.1', 'Default initial version');
      console.log(vm('').release(), '0.0.1', 'Default initial version');
      console.log(vm('1.2.3').release(), '1.2.3', 'No version changes');
      console.log(vm('1.2.3.4').release(), '1.2.3', 'No version changes');
      console.log(vm('1.2.3.d').release(), '1.2.3', 'No version changes');
      console.log(vm('1').release(), '1.0.0', 'Default minor version is 0');
      console.log(vm('1.1').release(), '1.1.0', 'Default patch is 0');
      console.log(vm().major().release(), '1.0.0', "First major release");
      console.log(vm('1.2.3').major().release(), '2.0.0', "Major release after 1.2.3");
      console.log(vm('1.2.3').major().major().release(), '3.0.0', "Second major release after 1.2.3");
      console.log(vm().minor().release(), '0.1.0', "First minor relase");
      console.log(vm('1.2.3').minor().release(), '1.3.0', "Minor release after 1.2.3");
      console.log(vm('1').minor().release(), '1.1.0', "Minor relase after 1");
      console.log(vm('4').minor().minor().release(), '4.2.0', "Second minor release after 4");
      console.log(vm().patch().release(), '0.0.2', "First patch release");
      console.log(vm('1.2.3').patch().release(), '1.2.4', "First patch release");
      console.log(vm('4').patch().patch().release(), '4.0.2', "Second patch release after 4");
      console.log(vm().major().rollback().release(), '0.0.1', "Rollback of major release");
      console.log(vm().minor().rollback().release(), '0.0.1', "Rollback of minor release");
      console.log(vm().patch().rollback().release(), '0.0.1', "Rollback of patch release");
      console.log(vm().major().patch().rollback().release(), '1.0.0', "Rollback of patch after major release");
m().major().patch().rollback().major();
      console.log(m.rollback.bind(m), undefined, undefined, "major -> patch -> rollback -> major -> rollback");
      console.log(m.release(), '1.0.0', "major -> patch -> rollback -> major -> rollback");
      let m2 = vm().major().patch().rollback();
      console.log(m2.rollback.bind(m2), undefined, undefined, "Multiple rollbacks right after another: major -> patch -> rollback -> rollback");
      console.log(m2.release(), '0.0.1', "Multiple rollbacks right after another: major -> patch -> rollback -> rollback");
    
      const m = vm('1.2.3');
      m.major();
      m.minor();
      console.log(m.release(), '2.1.0');
    