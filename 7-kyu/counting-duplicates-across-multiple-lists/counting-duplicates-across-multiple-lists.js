function countDuplicates(name, age, height) {
  let dupes = 0;
  let entries = new Set();
  
  for (let i = 0 ; i < name.length ; i++){
    const entry = [ name[i] , age[i] , height[i] ].join(',');
    if (entries.has(entry)) dupes++
    else entries.add(entry);
  }
  return dupes;
}
​