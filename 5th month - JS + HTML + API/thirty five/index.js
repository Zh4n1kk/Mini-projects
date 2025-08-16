document.addEventListener('DOMContentLoaded', async () => {
    await renderPokemon()
});

const pokeList = document.getElementById('pokemon-list');

// pagination
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');

let offset = 0
const limit = 20

nextBtn.addEventListener('click', async () => {
    offset += 20
    await renderPokemon()
})

prevBtn.addEventListener('click', async () => {
    if (offset > 0) {
        offset -= 20
        await renderPokemon()
        prevBtn.disabled = false
    }
    if (offset <= 0) {
        prevBtn.disabled = true
    }
})


const getPokemon = async (offset, limit) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
        const pokemon = await response.json();
        const pokemonData = await pokemon;
        return (pokemonData);
    } catch (err) {
        console.log(err);
    }
}

const getPokemonDetails = async (url) => {
    try {
        const response = await fetch(url);
        const pokemon = await response.json();
        return pokemon;
    } catch (err) {
        console.log(err);
    }
}

const renderPokemon = async () => {
    pokeList.innerHTML = '';

    const pokemons = await getPokemon(offset, limit);
    const pokeListAPI = pokemons.results

    const pokeDetailsArray = await Promise.all(pokeListAPI.map(async (pokemon) => {
        return await getPokemonDetails(pokemon.url);
    }))

    const sortedPokemon = pokeDetailsArray.sort((a, b) => a.id - b.id)

    sortedPokemon.forEach(pokeDetails => {
        const pokeType1 = pokeDetails.types[0].type.name
        const pokeType2 = pokeDetails.types[1] ? pokeDetails.types[1].type.name : ''

        const div = document.createElement('div');
        div.classList.add('pokecard')
        div.innerHTML = `
            <img src="${pokeDetails.sprites.other["official-artwork"].front_default}" alt="">
            <div class="pokecard-info">
                <div class="pokecard_id_wrap">
                <div class="pokecard_name">${pokeDetails.name}</div>
                <div class="pokecard_id">#${pokeDetails.id.toString().padStart(4, '0')}</div>  
                </div>
                <div class="pokecard_type_wrap">
                <div class="pokecard_type poketype_${pokeType1}">${pokeType1}</div>
                <div class="pokecard_type poketype_${pokeType2}">${pokeType2}</div>
                </div>   
            </div>
       `;
        pokeList.append(div);


            div.addEventListener('click', () => {
                show(pokeDetails);
            });


    })
    prevBtn.disabled = offset === 0;
}

const pokeWindow = (pokeDetails) => {
    const background = document.querySelector('.pokemon-window_background');
    const window = document.querySelector('.pokemon-window-wrapper')
    const pokeInfo = document.querySelector('.pokemon-window');
    const show = (pokeDetails) => {
        window.style.display = 'block';
        pokeInfo.innerHTML = `
                <div class="pokemon-window_img_wrap">
              <img src="${pokeDetails.sprites.other["official-artwork"].front_default}" alt="">
              </div>
            <div class="pokemon-window_info">
            <div class="flex_row">
            <span>Name:</span>
            <div class="pokemon-window_name pokecard_name"> ${pokeDetails.name}</div>
            </div>
    <div class="pokemon-window_height">Height: ${pokeDetails.height}</div>
    <div class="pokemon-window_weight">Weight: ${pokeDetails.weight}</div>
    <div class="flex_row">
    <div>Type:</div>
    <div class="pokemon-window_height pokecard_type poketype_${pokeDetails.types[0].type.name}">${pokeDetails.types[0].type.name}</div>
    <div class="pokemon-window_height pokecard_type poketype_${pokeDetails.types[1] ? pokeDetails.types[1].type.name : ''}">${pokeDetails.types[1] ? pokeDetails.types[1].type.name : 'NO TYPE'}</div>
    </div>
    </div>
        `

    document.body.style.overflow = 'hidden';
    }

    const hide = () => {
            window.style.display = 'none';
        document.body.style.overflow = 'scroll';
    }

    background.addEventListener('click', hide)
    return [show, hide];
}

const [show,hide] = pokeWindow();
