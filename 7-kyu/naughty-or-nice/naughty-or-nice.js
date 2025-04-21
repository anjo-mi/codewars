function getNiceNames(ppl){
  return ppl.reduce((names,person) => {
    if (person.wasNice) names.push(person.name);
    return names;
  }, [])
}
​
function getNaughtyNames(ppl){
  return ppl.reduce((names,person) => {
    if (!person.wasNice) names.push(person.name);
    return names;
  }, [])
}