function SafeInteger(n) {
    return Number.isSafeInteger(n)
  }
  
  function SafeInteger(n) {
    return n >= -(2**53 -1) && n <= 2**53 -1
  }


console.log(SafeInteger(9007199254740992), false, 'Value returned should be false');
console.log(SafeInteger(9007199254740990), true, 'Value returned should be true');