const name = document.getElementById("name");
const region = document.getElementById("region");
const subregion = document.getElementById("subregion");
const capital = document.getElementById("capital");
const flag = document.getElementById("flag");
const countryEl = document.getElementById("country");
const searchBtn = document.getElementById("searchBtn");
const loader = document.getElementById("loader");
const errorMessage = document.getElementById("errorMessage");

searchBtn.addEventListener("click", () => {
    countryInput = countryEl.value.trim();
    if (!countryInput) {
        errorMessage.innerText = "Please enter a valid country.";
        return;
    }

    errorMessage.innerText = '';
    loader.style.display = 'inline-block'
    fetch(`https://restcountries.com/v3.1/name/${countryInput}?fields=name,region,subregion,capital,flags`)
        .then((restcountry) => restcountry.json())
        .then(data => {
            loader.style.display = 'none'
            console.log(data[0]);
            name.innerText = data[0].name.common;
            region.innerText = data[0].region ;
            subregion.innerText = data[0].subregion;
            capital.innerText = data[0].capital;
            flag.src = data[0].flags.png;
            flag.alt = data[0].flags.alt;
        })
        .catch(error => {
            loader.style.display = 'none'
            console.error('ERROR 404\nCould not find any country.\nTry better next time lol');
            alert("ERROR 404\nCould not find any country.");
            name.innerText = 'N/A'
            region.innerText = 'N/A'
            subregion.innerText = 'N/A'
            capital.innerText = 'N/A'
            flag.alt = 'N/A'
        })
});



