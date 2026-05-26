 
const esrever = (str) => str.length
                          ? str.slice(0,-1)
                               .split('')
                               .reverse()
                               .join('') + str[str.length - 1]
                          : '';