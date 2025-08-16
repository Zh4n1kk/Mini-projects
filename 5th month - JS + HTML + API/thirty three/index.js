// https://restcountries.com/v3.1/name/{name}
// https://restcountries.com/v3.1/alpha/{code}
const submitBtn = document.getElementById("submitBtn");
const countryValue = document.getElementById("countryValue");
const countryName = document.getElementById("country_name");
const bordersList = document.getElementById("borders_list");
const loader = document.getElementById("loader");
loader.style.display = 'none'
// Получаем страну йоу
function getCountry(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name`)
        .then((response) => response.json())
        .then((country) => country[0]);
}

// Получаем все границы
function getBorders(country) {
    return fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => response.json())
        .then((restcountries) => {
            const borderList = restcountries[0]?.borders || [];
            return Promise.all(
                borderList.map((border) =>
                    fetch(
                        `https://restcountries.com/v3.1/alpha/${border}`
                    ).then((response) => response.json())
                )
            );
        })
        .catch((error) => console.error("Ошибка", error));
}

submitBtn.addEventListener("click", () => {
    event.preventDefault(); 
    loader.style.display = "inline-block"; 
    bordersList.innerText = ''

    fetch(`https://restcountries.com/v3.1/name/${countryValue.value}`)
        .then((response) => response.json())
        .then((country) => {
            countryName.innerText = country[0].name.common;
            const borderList = country[0].borders || [];
            if (borderList.length === 0) {
                const div = document.createElement("div");
                div.classList.add("border_item");
                div.innerText = 'Походу вокруг этой страны водичка, у нее нету соседей';
                bordersList.append(div);
            }
            return Promise.all(
                borderList.map((border) =>
                    fetch(
                        `https://restcountries.com/v3.1/alpha/${border}`
                    ).then((response) => response.json())
                )
            );
        })
        .then((borderCountries) => {
            borderCountries.forEach((borderCountry) => {
                const div = document.createElement("div");
                div.classList.add("border_item");
                div.innerText = borderCountry[0].name.common;
                bordersList.append(div);
            });
        })
        .finally(() => {
            loader.style.display = "none"; 
        })
});

// WIP

// function getWikiInfo(countryWiki) {
//     fetch(`https://en.wikipedia.org/w/api.php?action=query&exlimit=1&explaintext=1&exsentences=10&formatversion=2&prop=extracts&titles=${countryWiki}&format=json&origin=*`)
//     .then((response) => response.json())
//     .then((wiki) => {
//         console.log(wiki.query.pages[0].extract)
//     })
// }