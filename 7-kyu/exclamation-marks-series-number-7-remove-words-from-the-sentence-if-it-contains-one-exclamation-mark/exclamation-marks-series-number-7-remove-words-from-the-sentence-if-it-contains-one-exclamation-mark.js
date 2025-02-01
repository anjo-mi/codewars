 
function remove (str) {
  return str.split(' ')
            .filter(el => el.split('')
                            .reduce((a,e) => {
                                if (e === '!'){
                                  a++
                                }
                              return a
                              }, 0 ) !== 1).join(' ')
}