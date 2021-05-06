import {
    loadRecipes,
    performLogin, performLogout,
    fetchRecipeDetail,addRecipeCallback,
    checkLoginStatus
} from './services';

import {
    showLoggedinContent,
    showContentWithoutLogin
} from './web';

const recipesListEl = document.querySelector('#recipe-app .recipes');
const recipeDetailEl = document.querySelector('#recipe-app .recipe-detail');
const mainContentEl = document.querySelector('#mainContent');
const userStatusEl = document.querySelector('#recipe-app .user-status')

const addTitleEl = document.querySelector('#recipe-app .add-recipe .title');
const addIngreEl = document.querySelector('#recipe-app .add-recipe .ingre');
const addInstruEl = document.querySelector('#recipe-app .add-recipe .instru');
const addButtonEl = document.querySelector('#recipe-app .add-recipe button');

let recipeState = {};
let recipeNumber = 0;

checkLoginStatus()
.then( (username) => {
    showLoggedinContent(username);
    console.log('with login')
    displayRecipes();
})
.catch( err => {
    showContentWithoutLogin();
    displayRecipes();
})

addLogin();
addLogout();

jumpToRecipeDetails();

function displayRecipes() {
    loadRecipes()
    .then( (recipesInfo) => {
    recipeState = recipesInfo.recipesData;
    renderRecipes( recipeState );
    console.log('display recipes');
    })
}

function renderRecipes(recipes) {
    recipeState = recipes;
    const html = Object.values(recipeState).map( recipe => {
        recipeNumber++;
        return`
            <li>
                <a data-index=${recipe.id} class="recipe-title">${recipe.title}</a>
                <span data-index=${recipe.id} class="author">${recipe.author}</span>
            </li>
        `;
    }).join('');
    console.log('finish render');
    recipesListEl.innerHTML = html;
}

function updateStatus( msg ) {
    userStatusEl.innerHTML = msg;
}

function addLogin() {
    const loginButtonEl = document.querySelector('#recipe-app .login button');
    const usernameEl = document.querySelector('#recipe-app .login input');
    loginButtonEl.addEventListener('click', ()=> {
        const username = usernameEl.value;
        
        performLogin(username)
        .then( (username) => {
            console.log('perform login');
            usernameEl.value = '';
            showLoggedinContent(username);
            addRecipe();
            
            updateStatus('username loggedin.')
        })
        .catch( err => {
            updateStatus(err);
        })
    })
}

function addLogout() {
    const logoutButtonEl = document.querySelector('#recipe-app .logout button');
    logoutButtonEl.addEventListener('click', () => {
        performLogout()
        .then( () => {
            updateStatus('Already logout')
            showContentWithoutLogin();
        })
        .catch( err => {
            updateStatus(err);
        })
    })
}

function jumpToRecipeDetails(){
    recipesListEl.addEventListener('click', (e) => {
        if(e.target.classList.contains('recipe-title')){
            e.preventDefault();
            const recipeId = e.target.dataset.index;
            fetchRecipeDetail(recipeId)
            .then(recipeDetail => {
                showRecipeDetail(recipeDetail);
                backToMainPage();
            })
            .catch( err => {
                updateStatus(err);
            })
        
        };
    })
}

function showRecipeDetail(recipeDetail ) {
    const html = `
        <p><label>Recipe Title:</label>${recipeDetail.title} </p>
        <p><label>Author:</label>${recipeDetail.author} </p>
        <p><label>Ingredient:</label>${recipeDetail.ingredient} </p>
        <p><label>Instruction:</label>${recipeDetail.instruction} </p>
        <br/><button class="back">Back</button>`
        mainContentEl.classList.add('hidden');
    recipeDetailEl.innerHTML = html;
    // backToMainPage();
}

function  backToMainPage() {
    const backButton = document.querySelector('.recipe-detail button');
    backButton.addEventListener('click', e => {
        e.preventDefault();
        renderRecipes( recipeState );
        mainContentEl.classList.remove('hidden');
        recipeDetailEl.classList.add('hidden');
        console.log('back there');
    })
}

function addRecipe() {
    checkLoginStatus();
    addButtonEl.addEventListener('click', (e) => {
        e.preventDefault();
        if (!addTitleEl.value || !addIngreEl.value || !addInstruEl.value){
            updateStatus('fulfill the whole items first');
            // addButtonEl.disabled = false;
            return;
        } 
        console.log('to add')
        addRecipeCallback(addTitleEl.value, addIngreEl.value, addInstruEl.value)
        .then( (newRecipe) => {
            recipeState[newRecipe.id] = newRecipe;
            showRecipeDetail( newRecipe );
            recipeState[recipeNumber] = newRecipe;
            addTitleEl.value = '';
            addIngreEl.value = '';
            addInstruEl.value = '';
        })
        .catch( (err) => {
            updateStatus( (err) );
        })
    });
}