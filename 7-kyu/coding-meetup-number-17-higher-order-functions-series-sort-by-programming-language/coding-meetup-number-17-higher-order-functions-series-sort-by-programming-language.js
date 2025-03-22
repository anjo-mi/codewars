 
function sortByLanguage(list) {
  const byLang = (obj1,obj2) => {
    const a = obj1.language;
    const b = obj2.language;
    return a.localeCompare(b) || obj1.firstName.localeCompare(obj2.firstName);
  }
  return list.sort(byLang);
}