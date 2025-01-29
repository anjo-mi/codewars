function initials(n){
    n = n.split(' ');
    let last = n.pop();
    n = n.map(el => el[0].toUpperCase())
    last = last[0].toUpperCase() + last.slice(1);
    n.push(last)
    return n.join('.')
  }