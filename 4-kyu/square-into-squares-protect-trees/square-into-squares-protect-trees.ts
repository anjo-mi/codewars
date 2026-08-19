 
export const decompose = (n: number): number[] | null => {
  const rec = (rem: number, max: number): number[] | null => {
    if (rem === 0) return [];
    for (let i = max; i >= 1; i--) {
      if (i * i > rem) continue;
      const sub = rec(rem - i * i, i - 1);
      if (sub !== null) return [...sub, i];
    }
    return null;
  };
  const result = rec(n * n, n - 1);
  return result && result.length ? result : null;
};