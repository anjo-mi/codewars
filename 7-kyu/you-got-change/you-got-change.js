 
function giveChange(n) {
  console.log(n)
  const hundreds = Math.floor(n / 100);
  const fifties = Math.floor((n % 100) / 50);
  const twenties = Math.floor((n % 50) / 20);
  const tens = Math.floor(((n % 50) % 20) / 10);
  const fives = Math.floor((n % 10) / 5);
  const ones = n % 5;
  return [ones, fives, tens, twenties, fifties, hundreds];
}