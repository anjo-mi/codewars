function phone(str, num) {
    str = str.split('\n').map(el => Array(el.trim()))
    str.pop()
    const phonebook = str.map(el => {
      const person = {};
      if (el[0].startsWith('/') || el[0].startsWith(':')){
        el[0] = el[0].slice(1);
      }
      const dashIndex = el[0].indexOf('-')
      if (dashIndex === 1){
        person.number = el[0].slice(1,14);
      }else if (dashIndex === 2){
        person.number = el[0].slice(1,15);
      }else{
        const plusIndex = el[0].indexOf('+');
        person.number = el[0].slice(plusIndex + 1).split(' ')[0];
        if (isNaN(person.number[person.number.length - 1])){
          person.number = person.number.slice(0, person.number.length - 1);
        }
      }
      const [open, close] = [el[0].indexOf('<'), el[0].indexOf('>')];
      person.name = el[0].slice(open + 1, close)
      const chars = ['+', '/', '<', '>', ':', '!', '?', '$', ';', ',', '*', person?.name || '', person?.number || '']
      el[0] = chars.reduce((str, char) => str.replaceAll(char, ''), el[0])
      person.address = el[0].replaceAll('_', ' ').replaceAll('  ', ' ').trim();
      return person
    },)
    const match = phonebook.filter(person => person.number === num)
    if (match.length > 1) return (`Error => Too many people: ${num}`)
    if (match.length === 0) return (`Error => Not found: ${num}`)
    return `Phone => ${match[0].number}, Name => ${match[0].name}, Address => ${match[0].address}`
  }