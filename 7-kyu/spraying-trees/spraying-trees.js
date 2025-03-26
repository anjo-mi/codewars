 
function task(w, t, c) {
  const worker = {
    Monday: 'James',
    Tuesday: 'John',
    Wednesday: 'Robert',
    Thursday: 'Michael',
    Friday: 'William'
  };
  if (!worker[w]) throw new Error('no overtime here');
  return `It is ${w} today, ${worker[w]}, you have to work, you must spray ${t} trees and you need ${t * c} dollars to buy liquid`
}