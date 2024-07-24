function longestConsec(arr, k) {
    let longest = ''
    for (let i = 0; k > 0 && i < arr.length - k ; i++){
        let holding = arr.slice(i, i + k)
        let holdingStr = holding.join('')
        if (holdingStr.length > longest.length){
            longest = holdingStr
        }
    }
    return longest
}

// function longestConsec(strarr, k) {
//     var longest = "";
//     for(var i=0;k>0 && i<=strarr.length-k;i++){
//         var tempArray = strarr.slice(i,i+k);
//         var tempStr = tempArray.join("");
//         if(tempStr.length > longest.length){
//             longest = tempStr;
//         }
//     }
//     return longest;
// }

console.log(longestConsec(["zone", "abigail", "theta", "form", "liberty", "zas"] , 2))