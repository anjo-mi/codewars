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



  const dr = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n"
+ "+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n"
+ "+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n"
+ "+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n"
+ "<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n"
+ "<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n"
+ "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n"
+ "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n"
+ "<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n"
+ "+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n"
+ "<P Salinge> Main Street, +1-098-512-2222, Denve\n"

function testing(actual, expected) {
    console.log(actual, expected)
}

    testing(phone(dr, "48-421-674-8974"), "Phone => 48-421-674-8974, Name => Anastasia, Address => Via Quirinal Roma")
    testing(phone(dr, "1-921-512-2222"), "Phone => 1-921-512-2222, Name => Wilfrid Stevens, Address => Wild Street AA-67209")
    testing(phone(dr, "1-908-512-2222"), "Phone => 1-908-512-2222, Name => Peter O'Brien, Address => High Street CC-47209")
    testing(phone(dr, "1-541-754-3010"), "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St.")
    testing(phone(dr, "1-121-504-8974"), "Phone => 1-121-504-8974, Name => Arthur Clarke, Address => San Antonio TT-45120")
    testing(phone(dr, "1-498-512-2222"), "Phone => 1-498-512-2222, Name => Bernard Deltheil, Address => Mount Av. Eldorado")
    testing(phone(dr, "1-098-512-2222"), "Error => Too many people: 1-098-512-2222")
    testing(phone(dr, "5-555-555-5555"), "Error => Not found: 5-555-555-5555")