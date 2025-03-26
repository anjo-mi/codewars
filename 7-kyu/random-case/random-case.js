 
function randomCase(x) {
  const random = (char) => {
    const yayOrNay = Math.floor(Math.random() * 2);
    return !yayOrNay 
            ? char
           :char === char.toLowerCase() 
            ? char.toUpperCase() 
            : char.toLowerCase()
  }
  return x.split('').map(random).join('');
}