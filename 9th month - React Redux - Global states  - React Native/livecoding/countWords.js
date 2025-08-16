const str = 'apple banana apple orange banana apple'
const str2 = str.split(' ')
let result = {}

for (i = 0; i < str2.length; i++) {
    result[str2[i]] = (result[str2[i]] || 0) + 1
}

    
console.log(result)