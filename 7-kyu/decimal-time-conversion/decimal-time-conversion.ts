 
export function toIndustrial(time: number|string): number {
  if (typeof time === 'number') return +((time / 60).toFixed(2));
  const [hours,minutes] = time.split(':').map(Number);
  const total = (hours * 60) + minutes;
  return +((total / 60).toFixed(2));
}
​
export function toNormal(time: number): string {
  let hours:number = Math.floor(time);
  let minutes:string = String(Math.round((time % 1) * 60));
  if (minutes === '60') return `${hours + 1}:00`;
  while (minutes.length !== 2) minutes = '0' + minutes;
  return `${hours}:${minutes}`;
}
​