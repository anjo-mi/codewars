 
// input: names - unsorted strings
// output: case-agnostic sort
const sortme = (names) =>  names.sort((a,b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));