function meeting(s) {
    s = s.split(';')
    for (let i = 0 ; i < s.length ; i++){
        s[i] = s[i].split(':')
    }
    let objs = s.map(el => {
        return {
            first: el[0],
            last: el[1]
        }
    })
    objs.sort((a,b) => {
        if (a.last.toLowerCase() < b.last.toLowerCase()){
            return -1
        }else if (a.last.toLowerCase() > b.last.toLowerCase()){
            return 1
        }else{
            if (a.first.toLowerCase() < b.first.toLowerCase()){
                return -1
            }else if(a.first.toLowerCase() > b.first.toLowerCase()){
                return 1
            }else{
                return 0
            }
        }
    })
    let alpha = ''
    objs.forEach(el => {
        alpha += `(${el.last.toUpperCase()}, ${el.first.toUpperCase()})`
    })
    return alpha
}


console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Maddie:Stan;Alex:Korn"))