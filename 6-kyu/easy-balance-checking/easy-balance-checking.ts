export function balance(book: string) {
  const valid = new Set('0123456789abcdefghijklmnopqrstuvwxyz. ');
  const adjBook = book.split('\n').map(line => line.split('').filter(char => valid.has(char.toLowerCase())).join('') ).filter(Boolean);
  let start = +adjBook[0];
  const expenses:number[] = [];
  const exp = adjBook.slice(1).map(exp => {
    const e = exp.split(' ');
    const spent = +e[e.length-1];
    e[e.length-1] = spent.toFixed(2);
    expenses.push(spent);
    start = +(start - spent).toFixed(2);
    const bal = start.toFixed(2);
    e.push('Balance',`${bal}`);
    return e.join(' ');
  });
  const total = expenses.reduce((a,el) => a + el, 0).toFixed(2);
  const avg = (+total / expenses.length).toFixed(2);
  return [`Original Balance: ${(+adjBook[0]).toFixed(2)}`].concat(exp).concat([`Total expense  ${total}`]).concat([`Average expense  ${avg}`]).join('\r\n');
}