 
function sortAnimal(animals) {
  const copy = animals.slice(0);
  return copy.sort((a,b) => {
    if (a.numberOfLegs > b.numberOfLegs) return 1;
    if (a.numberOfLegs < b.numberOfLegs) return -1;
    return a.name.localeCompare(b.name)
  })
}
​