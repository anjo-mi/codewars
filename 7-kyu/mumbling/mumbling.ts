export function accum(s: string): string {
    return s.split('').map((char,i) => char[0].toUpperCase() + char.toLowerCase().repeat(i)).join('-');
}