 
function sortByArea(arr) {
  let arr2 = arr.slice(0);
  return arr2.sort((a,b) => {
    const areaA = Array.isArray(a) ? a[0] * a[1] : Math.PI * a**2;
    const areaB = Array.isArray(b) ? b[0] * b[1] : Math.PI * b**2;
    return areaA > areaB
            ? 1
          :areaB > areaA
            ? -1
            : 0;
  })
}