var splitInParts = function(s, partLength){
    s = s.split('')
    let split = []
    for (let i = 0 ; i < s.length ; i+= partLength){
      if (s[i+partLength]){
        split.push(s.slice(i, i+partLength).join(''))
      }else{
        split.push(s.slice(i).join(''))
      }
    }
    return split.join(' ')
  }


console.log(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s");
console.log(splitInParts("HelloKata", 1), "H e l l o K a t a");
console.log(splitInParts("HelloKata", 9), "HelloKata");