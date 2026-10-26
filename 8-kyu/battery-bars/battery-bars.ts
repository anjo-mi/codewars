 
export function batteryBars(pct: number): string {
  const bars = Math.floor(pct / 20);
  return '[' + '#'.repeat(bars) + '.'.repeat(5 - bars) + "]";
}