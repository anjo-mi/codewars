 
function sortIt(list, n) {
  return list.split(', ')
          .sort((a,b) => a[n-1].toLowerCase().localeCompare(b[n-1].toLowerCase()) 
                          || a.localeCompare(b)).join(', ');
}