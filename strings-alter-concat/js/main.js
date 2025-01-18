function shorterReverseLonger(a,b){
    const short = a.length >= b.length ? b : a
    let long = short === a ? b : a
    return `${short}${long.split('').reverse().join('')}${short}`
  }

console.log(shorterReverseLonger("first", "abcde"), "abcdetsrifabcde", 'Incorrect answer for a="first", b="abcde"');
console.log(shorterReverseLonger("hello", "bau"  ), "bauollehbau"    , 'Incorrect answer for a="hello", b="bau"'  );
console.log(shorterReverseLonger("fghi",  "abcde"), "fghiedcbafghi"  , 'Incorrect answer for a="fghi", b="abcde"' );