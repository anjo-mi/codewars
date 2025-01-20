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