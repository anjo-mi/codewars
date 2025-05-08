 
// Remember you have a CHANGE dictionary to work with ;)
​
const changeCount = change => '$' + change.split(' ').reduce((a,el) => a + CHANGE[el], 0).toFixed(2);