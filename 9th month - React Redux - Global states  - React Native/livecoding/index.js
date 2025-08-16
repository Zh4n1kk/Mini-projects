let count = 0
const str = 'aODSDASD hello'

const glasniye = ['a','e','u','i','o']

for (i = 0; i < str.length; i++) {
    for (j = 0; j < glasniye.length; j++) {
        if (str[i].toLowerCase() === glasniye[j]) {
            count += 1
        }
    }
}

console.log(count)