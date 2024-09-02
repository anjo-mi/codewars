function conjugate(verb){
    let arEndings = ['o', 'as', 'a', 'amos', 'áis', 'an']
    let erEndings = ['o', 'es', 'e', 'emos', 'éis', 'en']
    let irEndings = ['o', 'es', 'e', 'imos',  'ís', 'en']
    let obj = null
    if (verb.endsWith('ar')){
      obj = {
        [verb]: [verb.slice(0,-2) + arEndings[0],
               verb.slice(0,-2) + arEndings[1],
               verb.slice(0,-2) + arEndings[2],
               verb.slice(0,-2) + arEndings[3],
               verb.slice(0,-2) + arEndings[4],
               verb.slice(0,-2) + arEndings[5],
              ]
      }
    }
    if (verb.endsWith('er')){
      obj = {
        [verb]: [verb.slice(0,-2) + erEndings[0],
               verb.slice(0,-2) + erEndings[1],
               verb.slice(0,-2) + erEndings[2],
               verb.slice(0,-2) + erEndings[3],
               verb.slice(0,-2) + erEndings[4],
               verb.slice(0,-2) + erEndings[5],
              ]
      }
    }
    if (verb.endsWith('ir')){
      obj = {
        [verb]: [verb.slice(0,-2) + irEndings[0],
               verb.slice(0,-2) + irEndings[1],
               verb.slice(0,-2) + irEndings[2],
               verb.slice(0,-2) + irEndings[3],
               verb.slice(0,-2) + irEndings[4],
               verb.slice(0,-2) + irEndings[5],
              ]
      }
    }
    return obj
}

var comer = {
    "comer": [
      "como",
      "comes",
      "come",
      "comemos",
      "coméis",
      "comen"
    ]
  }
  var vivir = {
    "vivir": [
      "vivo",
      "vives",
      "vive",
      "vivimos",
      "vivís",
      "viven"
    ]
  }
  
  var caminar = {
    "caminar": [
      "camino",
      "caminas",
      "camina",
      "caminamos",
      "camináis",
      "caminan"
    ]
  }
  
  
    console.log(conjugate('comer'))// comer
    console.log(conjugate('vivir'))// vivir
    console.log(conjugate('caminar'))// caminar