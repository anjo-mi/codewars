function findEmployeesRole(name) {
  const [first,last] = name.split(' ');
  const person = employees.find(emp => emp.firstName === first && emp.lastName === last);
  return person ? person.role : 'Does not work here!';
}