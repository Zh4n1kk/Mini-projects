// COCKTAIL NAME SEARCH
const input = document.querySelector('.input');
const button = document.querySelector('.submit_btn');

const list = document.querySelector('.cocktail_list');

// MODAL WINDOW
const modalWrapper = document.querySelector('.modal_wrapper');
const modalWindow = document.querySelector('.modal_window');
const modalBackground = document.querySelector('.modal_background');
const modalCross = document.querySelector('.modal_cross');

// INNER MODAL
const modalInnerWrapper = document.querySelector('.modal-inner_wrapper');
const modalInnerWindow = document.querySelector('.modal-inner_window');
const modalInnerBackground = document.querySelector('.modal-inner_background');
const modalInnerCross = document.querySelector('.modal-inner_cross');

const getCocktails = async(name) => {
    try {
        const cocktails = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        const response = await cocktails.json();
        return response;
    } catch (err) {
        console.error('getCocktails failed.');
    }
}

const IngredientAPI = async (name) => {
    const getIngridient = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`);
    const response = await getIngridient.json();
    return response;
}
const Ingredients = (name) => {
    const img = `https://www.thecocktaildb.com/images/ingredients/${name}.png`
    return img;
};
button.addEventListener('click', async() => {
    event.preventDefault();
    const cocktailName = input.value;
    list.innerHTML = '';
    fetchSearch(cocktailName)

});
const getInfoAwaited = async(ingredient) => {
    let ingredientInfo = await IngredientAPI(ingredient);
    return await ingredientInfo;
}

const fetchSearch = async(cocktailName) => {
    const cocktails = await getCocktails(cocktailName);
    const cocktailsDrinks = cocktails.drinks
    console.log(cocktails);
    const data = Promise.all(cocktailsDrinks.map(cocktail => {
        const divCocktail = document.createElement("div");
        divCocktail.innerHTML = `            
            <div class="cocktail_card">
                <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strImageAttribution}">
                <div>
                    <h3>${cocktail.strDrink}</h3>
                </div>
            </div>`
        list.append(divCocktail)

        divCocktail.addEventListener('click', () => {
            console.log('clicked')
            show(cocktailsDrinks);

            modalWindow.innerHTML = `

        <div class="modal_content">
            <div class="modal_content_header">
                <div>Cocktail info</div>
                <img src="img/cross.svg" alt="cross" class="modal_cross">
            </div>
            <div class="modal_content_body">
                <div class="modal_ingredients">
                </div>
                <div class="modal_instructions">
                <h3>Instructions:</h3>
                <p>${cocktail.strInstructions}</p>
                </div>
            </div>
        </div>
    `
            let IngredientDivs = modalWindow.querySelector('.modal_ingredients');

            for (let i=1; i <= 15; i++) {
                const ingredient = cocktail[`strIngredient${i}`]
                if (ingredient) {
                    IngredientDiv = document.createElement('div');
                    IngredientDiv.innerHTML = `
                <div class="ingredients">
                    <img class='ingredients_img' src="${Ingredients(ingredient)}" alt="">
                    <p>${ingredient}</p>
                    </div>`
                    IngredientDiv.addEventListener('click', async() => {
                        try {
                            modalInnerWindow.innerHTML = ``
                            showInner(IngredientDivs, ingredient);
                            const IngredientInfo = await IngredientAPI(ingredient);
                            console.log(IngredientInfo.ingredients[0])
                            modalInnerWindow.innerHTML = `
                                <div class="modal-inner_content">
            <div class="modal-inner_content_header">
                <div>Ingredient info</div>
                <img src="img/cross.svg" alt="cross" class="modal_cross">
            </div>
            <div class="modal-inner_content_body">
                <div class="modal-inner_ingredients">${IngredientInfo.ingredients[0].strIngredient}</div>
                <div class="modal-inner_instructions">${IngredientInfo.ingredients?.[0]?.strDescription ?? ''}</div>
            </div>
        </div>
                        `
                        } catch (err) {console.log(err);}
                    })
                    IngredientDivs.append(IngredientDiv)
                }
            }
        })
    }))

    return data
}

const createModalWindow = (cocktailInfo) => {

    const show = () => {
        modalWrapper.style.display = 'block';
    }

    const hide = () => {
        modalWrapper.style.display = 'none';
    }

    modalBackground.addEventListener('click', hide)
    modalCross.addEventListener('click', hide)

    return [show, hide]
}

const createInnerModalWindow = (IngredientDivs, ingredient) => {

    const show = () => {
        modalInnerWrapper.style.display = 'block';
    }

    const hide = () => {
        modalInnerWrapper.style.display = 'none';
    }

    modalInnerBackground.addEventListener('click', hide)
    modalCross.addEventListener('click', hide)

    return [show, hide]
}

const [show,hide] = createModalWindow();

const [showInner,hideInner] = createInnerModalWindow();