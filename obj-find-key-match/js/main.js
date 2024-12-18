function killer(sus, dead) {
    let answer;
    for (let person in sus){
      if (dead.every(el => sus[person].includes(el))){
        answer = person
      }
    }
    return answer
  }


console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']), 'James');
console.log(killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']), 'Megan');