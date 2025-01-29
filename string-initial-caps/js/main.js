// A person's full name is usually composed of a first name, middle name and last name; however in some cultures (for example in South India) there may be more than one middle name.

// Write a function that takes the full name of a person, and returns the initials, separated by dots ('.'). The initials must be uppercase. The last name of the person must appear in full, with its first letter in uppercase as well.

// See the pattern below:

// "code wars"            ---> "C.Wars"
// "Barack hussein obama" ---> "B.H.Obama"
// Names in the full name are separated by exactly one space (' ' ) ; without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.



function initials(n){
    n = n.split(' ');
    let last = n.pop();
    n = n.map(el => el[0].toUpperCase())
    last = last[0].toUpperCase() + last.slice(1);
    n.push(last)
    return n.join('.')
  }


  console.log('code wars', 'C.Wars');
  console.log('Barack hussain obama', 'B.H.Obama');
  console.log('barack hussain Obama', 'B.H.Obama');