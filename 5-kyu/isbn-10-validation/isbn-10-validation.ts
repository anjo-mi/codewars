 
export function validISBN10(isbn: string): boolean {
  const valid = new Set<string>('X1234567890');
  if (isbn.length !== 10) return false;
  let total = 0;
  for (let i = 0 ; i < isbn.length ; i++){
    const char = isbn[i];
    if (!valid.has(char)) return false;
    if (i !== 9 && char === 'X') return false;
    total += char === 'X' ? 10 * (i+1) : +char * (i+1);
  }
  return total % 11 === 0;
}