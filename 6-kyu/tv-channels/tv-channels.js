 
function redarr(arr) {
  let sortedChannels = arr.slice(0).sort();
  sortedChannels = Array.from(new Set(sortedChannels));
  const obj = {};
  for (let i = 0; i < sortedChannels.length ; i++){
    obj[i] = sortedChannels[i];
  }
  return obj;
}