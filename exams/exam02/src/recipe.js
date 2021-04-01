import {
    loadRecipes,
    performLogin, performLogout,
    addRecipeCallback,
    checkLoginStatus
} from './services';

import {
    showLoggedinContent,
    showContentWithoutLogin
} from './web';

const recipeListEl = document.querySelector('#recipe-app .recipes');
const loginEl = document.querySelector('#recipe-app .login');
const loggedinStatusEl = document.querySelector('#recipe-app .logged-in');
const logoutEl = document.querySelector('#recipe-app .logout');
const recipesListEl = document.querySelector('#recipe-app .recipes');
const recipeDetailEl = document.querySelector('#recipe-app .recipe-detail');
const userStatusEl = document.querySelector('#recipe-app .user-status')

const addTitleEl = document.querySelector('#recipe-app .add-recipe.title');
const addIngreEl = document.querySelector('#recipe-app .add-recipe.ingre');
const addInstruEl = document.querySelector('#recipe-app .add-recipe.instru');
const addButtonEl = document.querySelector('#recipe-app .app-recipe button');

let recipeState = {};

checkLoginStatus()
.then( (username) => {
    showLoggedinContent(username);
    displayRecipes();
})
.catch( err => {
    showContentWithoutLogin();
    displayRecipes();
})

addLogin();
addLogout();

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
    const html = recipeState.map( recipe => {
        return`
            <li>
                <a data-index=${recipe.id}  class="recipe-title">${recipe.title}</a>
                <span data-index=${recipe.id} class="author">${recipe.author}</span>
            </li>
        `;
    }).join('');
    console.log('finish render');
    recipeListEl.innerHTML = html;
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
            showLoggedinContent(username);
            
            addRecipe();
            jumpToRecipeDetails();
            updateStatus('username loggedin.')
        })
        .catch( err => {
            updateStatus(err);
        })
    })
}

function addLogout() {
    const logoutButtonEl = document.querySelector('#recipe-app .logout button');
    console.log(logoutButtonEl);
    logoutButtonEl.addEventListener('click', () => {
        performLogout()
        .then( () => {
            console.log('logout already');
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
        
        }
    })
}

function showRecipeDetail(recipeDetail ) {
    console.log('recipe detail');
    const html = `
        <span> <label>Recipe Title:</label>${recipeDetail.title} </span>
        <span> <label>Recipe Author:</label>${recipeDetail.author} </span>
        <span> <label>Recipe Ingrement:</label>${recipeDetail.ingre} </span>
        <span> <label>Recipe Instruction:</label>${recipeDetail.instru} </span>
        <button class="back">Back</button>`
    
    recipeDetailEl.innerHTML = html;
}

function  backToMainPage() {
    console.log('main page');
    const backButton = document.querySelector('.recipe-detail button');
    backButton.addEventListener('click', e => {
        e.preventDefault();
        renderRecipes( recipeState );
    })
}

function addRecipe() {
    checkLoginStatus();
    addButtonEl.addEventListener('click', (e) => {
        e.preventDefault();
        if (!addTitleEl.value && !addIngreEl.value && !addInstruEl.value){
            updateStatus('fulfill the whole items first');
            // addButtonEl.disabled = false;
            return;
        } 
        addRecipeCallback(addTitleEl.value, addIngreEl.value, addInstruEl.value)
        .then( (newRecipe) => {
            recipeState[newRecipe.id] = newRecipe;
            showRecipeDetail( newRecipe );
        })
        .catch( (err) => {
            updateStatus( err );
        })
    });
}