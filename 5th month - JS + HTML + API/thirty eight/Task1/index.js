const countryField = document.querySelector(".country_name")
const submitBtn = document.querySelector(".submitBtn")
const loader = document.querySelector(".loader")
const borderingData = document.querySelector(".bordering_data")
const inputCountryName = document.querySelector('.input_country_name')

function asyncAlt(generatorFunction) {
    return function(args) {
        const generator = generatorFunction(args)
        function resolve(next) {
            if (next.done) {
                return Promise.resolve(next.value)
            }
            return Promise.resolve(next.value).then(response => {
                return resolve(generator.next(response))
            })
        }
        return resolve(generator.next())
    }
}

const getCountryInfo = asyncAlt(function* (countryName) {
    try {
        loader.style.display = 'inline-block'
        const response = yield fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        const countries = yield response.json()
        const countryData = countries[0]
        return countryData;
    }   catch(err) {
        console.log(err)
    }   finally {
        loader.style.display = 'none'
    }
});

const getWeatherInfo = asyncAlt(function* (capital) {
    try {
        loader.style.display = 'inline-block'
        const response = yield fetch(`https://wttr.in/${capital}?format=j1`)
        const weather = yield response.json()
        return(weather)
    } catch(err) {
        console.log(err)
    }   finally {
        loader.style.display = 'none'
    }
});

const getBordersNames = asyncAlt(function* (countryData) {
    try {
        loader.style.display = 'inline-block'
        const borderPromise = countryData.borders.map(asyncAlt (function* (border) {
            const response = yield fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            const borders = yield response.json()
            return(borders[0].name.common);
        }))
        const borderNames = yield Promise.all(borderPromise)
        return borderNames;
    }   catch (error) {
        console.log('could not find border name')
    } finally {
        loader.style.display = 'none'
    }
});

submitBtn.addEventListener("click", asyncAlt(function* (event) {
    loader.style.display = 'inline-block'
    event.preventDefault()
    inputCountryName.innerHTML = ''
    borderingData.innerHTML= ''

    const userInput = countryField.value
    const countryData = yield getCountryInfo(userInput)
    const weather = yield getWeatherInfo(countryData.capital)
    const borders = yield getBordersNames(countryData)

    Promise.all(
        borders.map(asyncAlt (function* (border) {
            const borderCapitalInfo = yield getCountryInfo(border)
            const weatherInfo = yield getWeatherInfo(borderCapitalInfo.capital)

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
    ));

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
}));
