let s1 = "my&friend&Paul has heavy hats! &"
let s2 = "my friend John has many many friends &"

function mix(a,b){
    let objA = {}
    let objB = {}
    for (let char of a){
        if(char.charCodeAt(0) < 123 && char.charCodeAt(0) > 96){
            objA[char] = (objA[char] || 0) + 1
        }
    }
    for (let key in objA){
        if(objA[key] <= 1){
            delete objA[key]
        }
    }

    let arrA = []
    for (let key in objA){
        arrA.push([objA[key], key])
    }
    
    
    for (let char of b){
        if(char.charCodeAt(0) < 123 && char.charCodeAt(0) > 96){
            objB[char] = (objB[char] || 0) + 1
        }
    }
    
    for (let key in objB){
        if(objB[key] <= 1){
            delete objB[key]
        }
    }

    let arrB = []
    for (let key in objB){
        arrB.push([objB[key], key])
    }

    arrA.sort((a,b) => b[0] - a[0])
    arrB.sort((a,b) => b[0] - a[0])

    for (let i = 0 ; i < arrA.length ; i++){
        for (let j = 0 ; j < arrB.length ; j++){
            if (arrA[i][1] === arrB[j][1]){
                if (arrA[i][0] > arrB[j][0]){
                    arrB = arrB.slice(0, j).concat(arrB.slice(j+1))
                }else if(arrA[i][0] < arrB[j][0]){
                    arrA = arrA.slice(0, j).concat(arrA.slice(j+1))
                }
            }
        }
    }

    return [arrA, arrB]
}

console.log(mix(s1,s2))