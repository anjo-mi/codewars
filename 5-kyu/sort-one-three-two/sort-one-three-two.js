function sortByName(arr) {
  const convertNumToString = (num) =>{
    const convObj = {1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 
                     9:'nine', 10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 
                    15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eightteen', 19:'nineteen', 
                    20:'twenty', 30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 
                    80:'eighty', 90:'ninety'};
    let digits = num.toString().split('');
    let words = [];
    while (digits.length){
      if (digits.length === 3){
        let focus = digits[0];
        words.push(convObj[focus], 'hundred');
        digits = digits.slice(1);
      }
      if (digits.length === 2){
        let focus = digits[0];
        if (focus === '1'){
          words.push(convObj[digits.join('')]);
          digits = [];          
        }else if (focus === '0'){
          digits = digits.slice(1);
        }else{
          words.push(convObj[focus + '0']);
          digits = digits.slice(1)
        }
      }
      if(digits.length === 1){
        let focus = digits[0];
        if (focus !== '0'){
          words.push(convObj[focus])
        }else if(focus === '0' && !words.length){
          words.push('zero');
        }
        digits = [];
      }
    }
    return words.join('-')
  }
  return arr.sort( (a,b) => convertNumToString(a).localeCompare( convertNumToString(b) ) );
}