function kebabize(str) {
    str = str.split('')
    for (let i = 0 ; i < str.length ; i++){
      if (i === 0 && str[i] === str[i].toUpperCase()){
        str[i] = str[i].toLowerCase()
      }else if (!isNaN(str[i])){
        str[i] = ''  
      }else if (str[i] === str[i].toUpperCase()){
        str[i] = '-' + str[i].toLowerCase()
      }
    }
    return str.join('').split(' ').join('')
  }




  const tests = [
    ['MyCamelCasedString', 'my-camel-cased-string'],
    ['myCamelCasedString', 'my-camel-cased-string'],
    ['MyCamelHas3Humps', 'my-camel-has-humps'],
    ['myCamelHas3Humps', 'my-camel-has-humps'],
    ['CAMEL', 'c-a-m-e-l'],
    ['cAMEL', 'c-a-m-e-l'],
    ['AbstractSingletonProxyFactoryBean', 'abstract-singleton-proxy-factory-bean'],
    ['abstractSingletonProxyFactoryBean', 'abstract-singleton-proxy-factory-bean']
  ]

  tests.forEach(el => {
    console.log(kebabize(el[0]), el[1])
  })