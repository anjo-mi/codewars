function fruit(arrs, spin){
    const results = [];
    arrs.forEach((el,i) => results.push(el[spin[i]]));
    const count = results.reduce((a,el) => {
        a[el] = (a[el] || 0) + 1
        return a
    }, {});
    let points = 0;
    for (let key in count){
        if (count[key] === 2) points = 1;
        if (count[key] === 3) points = 10;
    }

    const mult = count['Jack'] >= 2 ? 1 : 
                 count['Queen'] >= 2 ? 2 : 
                 count['King'] >= 2 ? 3 : 
                 count['Bar'] >= 2 ? 4 : 
                 count['Cherry'] >= 2 ? 5 : 
                 count['Seven'] >= 2 ? 6 : 
                 count['Shell'] >= 2 ? 7 : 
                 count['Bell'] >= 2 ? 8 : 
                 count['Star'] >= 2 ? 9 : 10;

    if (count['Wild'] === 1 && points) points *= 2;
    return points * mult;
}

let reel = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
let spin = [0,0,0];
console.log(fruit([reel,reel,reel],spin),100, "Should return: '100'");

let reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
let reel2 = ["Bar", "Wild", "Queen", "Bell", "King", "Seven", "Cherry", "Jack", "Star", "Shell"];
let reel3 = ["Bell", "King", "Wild", "Bar", "Seven", "Jack", "Shell", "Cherry", "Queen", "Star"];
spin = [5,4,3];
console.log(fruit([reel1,reel2,reel3],spin),0, "Should return: '0'");

reel1 = ["King", "Cherry", "Bar", "Jack", "Seven", "Queen", "Star", "Shell", "Bell", "Wild"];
reel2 = ["Bell", "Seven", "Jack", "Queen", "Bar", "Star", "Shell", "Wild", "Cherry", "King"];
reel3 = ["Wild", "King", "Queen", "Seven", "Star", "Bar", "Shell", "Cherry", "Jack", "Bell"];
spin = [0,0,1];
console.log(fruit([reel1,reel2,reel3],spin),3, "Should return: '3'");

reel1 = ["King", "Jack", "Wild", "Bell", "Star", "Seven", "Queen", "Cherry", "Shell", "Bar"];
reel2 = ["Star", "Bar", "Jack", "Seven", "Queen", "Wild", "King", "Bell", "Cherry", "Shell"];
reel3 = ["King", "Bell", "Jack", "Shell", "Star", "Cherry", "Queen", "Bar", "Wild", "Seven"];
spin = [0,5,0];
console.log(fruit([reel1,reel2,reel3],spin),6, "Should return: '6'");