 
function replicate(times, number) {
  return times > 0 
          ? [number, ...replicate(times - 1, number)]
          : [];
}