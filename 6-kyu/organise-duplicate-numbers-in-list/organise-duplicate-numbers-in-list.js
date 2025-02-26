function group(arr) {
  const groups = [];
  while(arr.length){
    const group = [arr.shift()];
    while (arr.includes(group[0])){
      const nextIndex = arr.indexOf(group[0]);
      group.push(...arr.splice(nextIndex, 1));
    }
    groups.push(group);
  }
  return groups;
}