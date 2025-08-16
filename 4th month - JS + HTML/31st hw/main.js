// STOCK
const container = document.getElementById("container");
const bodyy = document.querySelector("body");

// Inputs & fields
const countryInput = document.getElementById("country_input");
const submitBtn = document.getElementById("input_submit");

// Main guest
const countryInfo = document.getElementById("country_info");
const designCard = document.getElementById("design_card");

// Utilities & addons
const mapWindow = document.getElementById("mapContainer");
const loader = document.getElementById("loader");

// Dictionary...
const translatedKeys = {
    name: "Название",
    tld: "Домен верхнего уровня",
    cca2: "Двузначный код",
    cca3: "Трехзначный код",
    idd: "Код страны телефонного номера",
    capital: "Столица",
    currencies: "Валюты",
    latlng: "Координаты",
};

// Functional part
function createLoader() {
    if (!document.querySelector(".loader")) {
        const loaderWrap = document.createElement("div");
        loaderWrap.setAttribute("class", "loader");
        bodyy.append(loaderWrap);
    }
}

function removeLoader() {
    const loader = document.querySelector(".loader");
    if (loader) loader.remove();
}

function renderCountryInfo(country) {
    for (let key in country) {
    }
}
submitBtn.addEventListener("click", () => {
    const countryName = countryInput.value.trim("");
    createLoader();
    let restcountries = new XMLHttpRequest();
    restcountries.open(
        "GET",
        `https://restcountries.com/v3.1/name/${countryName}?fields=name,tld,cca2,cca3,idd,capital,currencies,flags,latlng`
    );
    restcountries.send();
    restcountries.onload = () => {
        removeLoader();
        const country = JSON.parse(restcountries.responseText);
        if (restcountries.status === 200) {
            // DEBUG OUTPUT
            console.log(country[0]);

            // cool styles for cool background for review to cool guys
            designCard.style.backgroundImage = `linear-gradient(to bottom, rgba(9, 32, 50, 0.5), rgba(9, 32, 50, 1) 100%), url(${country[0].flags.svg})`;
            designCard.style.backgroundSize = "cover";
            designCard.style.backgroundPosition = "center";
            designCard.style.borderRadius = "5px 5px 0 0";

            let namesHTML = "";
            if (country[0].name.nativeName) {
                for (const key in country[0].name.nativeName) {
                    namesHTML += `<p>${country[0].name.nativeName[key].official} (${country[0].name.nativeName[key].common})</p>`;
                }
            } else {
                namesHTML = `<p>${country[0].name.official}</p>`;
            }

            let currenciesHTML = "";
            if (country[0].currencies) {
                for (const cur in country[0].currencies) {
                    currenciesHTML += `<p>${country[0].currencies[cur].name} (${country[0].currencies[cur].symbol})</p>`;
                }
            }
            // html thingy
            designCard.innerHTML = `
            <div class="country_info" id="country_info">
                <div>
                    <div class='country_row'><p class="country_info_static">Название: </p> <p>${namesHTML}</p></div>
                    <div class='country_row'><p class="country_info_static">Домен верхнего уровня: </p> <p class="country_info_dynamic">${country[0].tld}</p></div>
                    <div class='country_row'><p class="country_info_static">2-ух значный код: </p> <p class="country_info_dynamic">${country[0].cca2}</p></div>
                    <div class='country_row'><p class="country_info_static">3-ех значный код: </p> <p class="country_info_dynamic">${country[0].cca3}</p></div>
                    <div class='country_row'><p class="country_info_static">Телефонный код: </p> <p class="country_info_dynamic">${country[0].idd.root}</p></div>
                    <div class='country_row'><p class="country_info_static">Столица: </p> <p class="country_info_dynamic">${country[0].capital}</p></div>
                    <div class='country_row'><p class="country_info_static">Валюта: </p> <p class="country_info_dynamic">${currenciesHTML}</p></div>
                    <div class='country_row'><p class="country_info_static">Флаг: </p> <img class="country_info_dynamic" style='width: 50px;' src=${country[0].flags.svg}></div>
                </div>                    
        </div>
    `;

            // The chorus of this code IMHO
            mapWindow.innerHTML = `<div id="map" class='map'></div>`;
            const countryCords = country[0].latlng;
            var map = L.map("map").setView(countryCords, 5);
            L.tileLayer(
                "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}",
                {
                    minZoom: 0,
                    maxZoom: 20,
                    attribution:
                        '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    ext: "png",
                }
            ).addTo(map);
            L.marker(countryCords).addTo(map);
        } else {
            mapWindow.innerHTML = "";
            designCard.innerHTML = `<p style='color: red;'>${country.status} ${country.message}</p>`;
            designCard.style.backgroundImage = `none`;
        }
        restcountries.onerror = () => {
            removeLoader();
            designCard.innerHTML = `<p style='color: red;'>${country.status} ${country.message}</p>`;
        };
    };
});
