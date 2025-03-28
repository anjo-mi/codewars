function solve(s){
    s = s.split('').sort().join('')
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    const i = alpha.indexOf(s[0].toLowerCase())
    return s.toLowerCase() === alpha.slice(i,i + s.length)
  }

  function solve(s){
    return 'abcdefghijklmnopqrstuvwxyz'.includes(s.toLowerCase().split('').sort().join(''))
  }


  console.log(solve("abc"),true);
  console.log(solve("abd"),false);
  console.log(solve("dabc"),true);
  console.log(solve("abbc"),false);