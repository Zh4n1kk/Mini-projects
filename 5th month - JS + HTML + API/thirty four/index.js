// http://restcountries.com/v3.1/name/${name}


// logo




// Домашнее задание
// Домашнее задание
// Пользователь вводит название страны в поле, и нажимает кнопку "Найти".
//     Выведите название этой страны, столицу этой страны и текущую погоду в этом городе.
//     Затем найдите все страны, с которыми граничит эта страна и выведите их полное название, столицу и текущую погоду в данном городе.
//     Вывод приложения должен быть таким:
//     Country: Kyrgyzstan
// Capital: Bishkek
// Current weather: Sunny, 19° Wind: SE 8 km/h
// Bordering countries:
//     Country name: China
// Capital: Beijing
// Current weather: Sunny, 26° Wind: ESE 7 km/h
// Country name: Kazakhstan
// Capital: Astana
// Current weather: Partly cloudy, 10° Wind: E 11 km/h
// Country name: Tajikistan
// Capital: Dushanbe
// Current weather: Sunny, 32° Wind: SSW 0 km/h
// Country name: Uzbekistan
// Capital: Tashkent
// Current weather: Sunny, 29° Wind: NNW 7 km/h
// Указания:
//
//     Использовать стандартную функцию fetch
// Нельзя использовать request, jQuery.ajax()
// Использовать Promise.all
// Использовать только async..await конструкции (нельзя использовать then, catch в функциях).
// Добавить прелоадер, чтобы выглядело красиво.
//     Для поиска страны по названию API:
//     https://restcountries.com/v2/name/{name}
//         где вместо Name подставляете название, например Kyrgyzstan
// Для поиска страны по коду:
//     https://restcountries.com/v2/alpha/{code}
//         где вместо {code} подставляете код, например KGZ
// Для поиска информации по погоде в городе:
//     https://wttr.in/{capital}?format=j1
//         где вместо {capital} подставляете код, например Bishkek. Обязательно в конце указать ?format=j1, иначе вы не получите ответ в JSON-формате.
//     В ответе вам необходимо взять только ключ current_condition - это массив, из него берете самый первый (нулевой по индексу элемент)
// const currentWeather = weatherData.current_condition[0];
// currentWeather.temp_C // температура по Цельсию
// currentWeather.weatherDesc // описание погоды
// currentWeather.winddir16Point // направление ветра
// currentWeather.windspeedKmph // скорость ветра (км/ч)
//


const countryField = document.querySelector(".country_name")
const submitBtn = document.querySelector(".submitBtn")

const countryDataHTML = document.querySelector(".country_data")
const borderingData = document.querySelector(".bordering_data")
const inputCountryName = document.querySelector('.input_country_name')

console.log('Happy developing ✨')

const getCountryInfo = async(countryName) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        const countries = await response.json()
        const countryData = countries[0]
        return countryData;
    }   catch(err) {
        console.log(err)
    }   finally {
        // loader.style.display = 'none'
    }
}

const getWeatherInfo = async(capital) => {
    try {
        const response = await fetch(`https://wttr.in/${capital}?format=j1`)
        const weather = await response.json()
        return(weather)
    } catch(err) {
        console.log(err)
    }   finally {

    }
}

const getBordersNames = async(countryData) => {
    try {
        const borderPromise = countryData.borders.map(async (border) => {
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            const borders = await response.json()
            return(borders[0].name.common);
        })
        const borderNames = await Promise.all(borderPromise)
        return borderNames;
    }   catch (error) {
        console.log('could not find border name')
    }
}

submitBtn.addEventListener("click", async(event) => {
    event.preventDefault()
    inputCountryName.innerHTML = ''
    borderingData.innerHTML= ''

    const userInput = countryField.value
    const countryData = await getCountryInfo(userInput)
    const weather = await getWeatherInfo(countryData.capital)
    const borders = await getBordersNames(countryData)
    console.log(countryData.capital[0])
    console.log(weather)

    Promise.all(
        borders.map(async (border) => {
            const borderCapitalInfo = await getCountryInfo(border)
            const weatherInfo = await getWeatherInfo(borderCapitalInfo.capital)

            const div = document.createElement('div')
            const borderCountryName = document.createElement('p')
            borderCountryName.innerText = `Country: ${borderCapitalInfo.name.official}`
            borderCountryName.classList.add('country_name')
            div.append(borderCountryName)

            const borderCapitalName = document.createElement('p')
            borderCapitalName.innerText = `Capital: ${borderCapitalInfo.capital}`
            borderCapitalName.classList.add('border_capital')
            div.append(borderCapitalName)

            const capitalWeather = document.createElement('p')
            capitalWeather.innerText = `Current weather: ${weatherInfo.current_condition[0].weatherDesc[0].value}°, ${weatherInfo.current_condition[0].temp_C}°C Wind: ${weatherInfo.current_condition[0].winddir16Point} ${weatherInfo.current_condition[0].windspeedKmph} km/h`
            capitalWeather.classList.add('weather_capital')
            div.append(capitalWeather)

            borderingData.append(div)
        })
    )

    const countryName = document.createElement('p')
    countryName.classList.add('country_name')
    countryName.innerText = countryData.name.official
    inputCountryName.append(countryName)
    const countryCapital = document.createElement('p')
    countryCapital.classList.add('border_capital')
    countryCapital.innerText = countryData.capital[0]
    inputCountryName.append(countryCapital)
    const countryWeather = document.createElement('p')
    countryWeather.innerText = `Current weather: ${weather.current_condition[0].weatherDesc[0].value}°, ${weather.current_condition[0].temp_C}°C Wind: ${weather.current_condition[0].winddir16Point} ${weather.current_condition[0].windspeedKmph} km/h`
    inputCountryName.append(countryWeather)
    const borderingCountries = document.createElement('p')
    borderingCountries.innerText = 'Bordering countries:'
    inputCountryName.append(borderingCountries)
})
