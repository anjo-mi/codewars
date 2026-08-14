 
export const countSheeps = (sheep: (boolean | undefined | null)[]): number => sheep.filter(Boolean).length;