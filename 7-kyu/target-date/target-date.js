 
function dateNbDays(a0, a, p) {
  const accrual = [a0];
  let count = 0;
  while (accrual[accrual.length - 1] < a){
    const l = accrual.length;
    accrual[l] = accrual[l-1] * ((p / 100) / 360) + accrual[l-1];
    count++;
  }
  const elapsed = 864e5 * count;
  const start = +new Date('01-01-2016');
  const d = new Date(start + elapsed);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2,'0');
  const day = String(d.getDate()).padStart(2,'0');
  return `${year}-${month}-${day}`
}