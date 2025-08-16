const table = document.getElementById("table");
const loader = document.getElementById("loader");

loader.style.display = "block";
fetch("https://restcountries.com/v3.1/all?fields=tld,flags,name,capital,population")
    .then((restcountries) => restcountries.json())
    .then(countries => {
    loader.style.display = "none"
    console.log(countries[0]);
    for (let i = 0; i < countries.length; i++) {
        // Создали строчку
        const tableRow = document.createElement("tr");
        table.append(tableRow);
        // Создали ряд для кодов
        const tdCode = document.createElement("td");
        tdCode.innerHTML = countries[i].tld
        tableRow.append(tdCode);
        // Создали ряд для флагов
        const tdFlag = document.createElement("td"); // Создали <td>
        const tdflagImg = document.createElement("img"); // Создали <img>
        tdflagImg.style.width = "2i%";
        tdflagImg.setAttribute('src', countries[i].flags.png) // Добавили src
        tdFlag.append(tdflagImg); // добавили ≤img≥ в <td>
        tableRow.append(tdFlag); // добавили <td> в <tr>
        // Создали ряд для названий стран
        const tdName = document.createElement("td");
        tdName.innerHTML = countries[i].name.common;
        tableRow.append(tdName);
        // Создали ряд для столицы
        const tdCapital = document.createElement("td");
        tdCapital.innerHTML = countries[i].capital
        tableRow.append(tdCapital);
        // Создали ряд для кол-ва населения
        const tdPopulation = document.createElement("td");
        tdPopulation.innerHTML = countries[i].population
        tableRow.append(tdPopulation);
    }

    })

