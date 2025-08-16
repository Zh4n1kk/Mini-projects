const southData = [13, 15, 19, 26, 21, 22, 23];
const westData = [15, 14, 16, 18, 17, 24, 25];
const eastData = [20, 17, 19, 15, 24, 25, 26];
const northData = [19, 18, 23, 20, 23, 19, 31];
let randomData = [];

for (let i = 0; i < 7; i++) {
    randomData.push(Math.floor(Math.random() * (25 - 13 + 1)) + 13);
}

function arithmeticMean(a) {
    let result = 0;
    a.forEach((item) => {
        result += item;
    });
    let overall = a.length;
    return result / overall;
}

console.log(`Средняя температура для южной станции: ${arithmeticMean(southData)}`);
console.log(`Средняя температура для западной станции: ${arithmeticMean(westData)}`);
console.log(`Средняя температура для восточной станции: ${arithmeticMean(eastData)}`);
console.log(`Средняя температура для северной станции: ${arithmeticMean(northData)}`);
console.log(`Случайно сгенерированные данные: [${randomData.join(', ')}]`);
console.log(`Средняя температура для случайных данных: ${arithmeticMean(randomData)}`);
