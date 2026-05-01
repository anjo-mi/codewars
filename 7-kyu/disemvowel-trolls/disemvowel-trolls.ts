export class Kata {
  static disemvowel = (str: string): string => {
    const vowels = new Set("aeiou");
    return str
      .split("")
      .filter((char) => !vowels.has(char.toLowerCase()))
      .join("")
  };
}