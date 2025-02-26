 
function lineupStudents(students){
  return students.split(' ').sort((a,b) => {
    return a.length > b.length 
            ? -1 
          :a.length < b.length 
            ? 1 
          : b.localeCompare(a);
  })
}