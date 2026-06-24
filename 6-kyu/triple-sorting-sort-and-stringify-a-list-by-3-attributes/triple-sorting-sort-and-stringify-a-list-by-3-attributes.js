 
function sort(students) {
  return students.sort((a,b) => {
    return b.gpa - a.gpa ||
           a.fullName.split(' ')[1][0].localeCompare( b.fullName.split(' ')[1][0] ) ||
           a.age - b.age;
  }).map(std => std.fullName).join(',');
};