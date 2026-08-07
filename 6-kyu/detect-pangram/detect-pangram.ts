 
export const isPangram = (s: string): boolean => {
  const valid = new Set<string>("abcdefghijklmnopqrstuvwxyz");
  const seen = new Set<string>();
  for (const char of s)
    if (valid.has(char.toLowerCase())) seen.add(char.toLowerCase());
  return seen.size === valid.size;
};