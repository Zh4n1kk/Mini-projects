// https://restcountries.com/v3.1/name/ghana?fields=name,region,subregion,capital,flag
const name = document.getElementById("name");
const region = document.getElementById("region");
const subregion = document.getElementById("subregion");
const capital = document.getElementById("capital");
const flag = document.getElementById("flag");
const countryEl = document.getElementById("country");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    countryInput = countryEl.value;
    fetch(`https://restcountries.com/v3.1/name/${countryInput}?fields=name,region,subregion,capital,flags`)
        .then((restcountry) => restcountry.json())
        .then(data => {
            console.log(data[0]);
            name.innerText = data[0].name.common;
            region.innerText = data[0].region;
            subregion.innerText = data[0].subregion;
            capital.innerText = data[0].capital;
            flag.src = data[0].flags.png;
            flag.alt = data[0].flags.alt;
        })
});


