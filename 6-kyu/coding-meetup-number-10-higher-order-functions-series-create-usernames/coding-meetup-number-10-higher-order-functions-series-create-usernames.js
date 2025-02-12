function addUsername(list) {
  function generateUserName(obj){
    const birthYear = new Date().getFullYear() - obj.age;
    obj.username = `${obj.firstName.toLowerCase()}${obj.lastName[0].toLowerCase()}${birthYear}`;
    return obj;
  }
  return list.map(generateUserName);
}
​
