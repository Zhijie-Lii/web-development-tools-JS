import {
    loadRecipes,
    performLogin,
    addRecipeCallback
} from './services';

const recipeListEl = document.querySelector('#recipe-app .recipes');
const usernameEl = document.querySelector('#recipe-app .login input');
const loginButtonEl = document.querySelector('#recipe-app .login button');
const loggedinStatusEl = document.querySelector('#recipe-app .logged-in');
const logoutButtonEl = document.querySelector('#recipe-app .logout button');
const addTitleEl = document.querySelector('#recipe-app .add-recipe.title');
const addIngreEl = document.querySelector('#recipe-app .add-recipe.ingre');
const addInstruEl = document.querySelector('#recipe-app .add-recipe.instru');
const addButtonEl = document.querySelector('#recipe-app .app-recipe button');

//  preventDefault();
loadRecipes();
addLogin();
addRecipe();

function showLoggedinContent() {
    usernameEl.classList.add('hidden');
    loginButtonEl.classList.add('hidden');
    loggedinStatusEl.classList.remove('hidden');
    logoutButtonEl.classList.remove('hidden');
    document.querySelector('#recipe-app .add-recipe').classList.remove('hidden');
}

function addLogin() {
    loginButtonEl.addEventListener('click', ()=> {
        const username = usernameEl.value;
        performLogin(username)
        then( () => {
            showLoggedinContent();
            renderRecipes();
        })
        .catch( err => {
            updateStatus();
        })
    })
}

function renderRecipes(recipes) {
    recipeState = recipes;
    const html = recipeState.map( recipe => {
        return`
            <li>
                <a data-index=${recipe.id} href="">${recipe.title}</a>
                <span data-index=${recipe.id}>${recipe.author}</a>
            </li>
        `;
    }).join('');
    recipeListEl.innerHTML = html;
}

function addRecipe() {
    checkLoginStatus();
    addButtonEl.addEventListener('click', (e) => {
        if (!addTitleEl.value && !addIngreEl && !addInstruEl){
            addButtonEl.disabled = false;
        }
        e.target.classList = 
        addRecipeCallback( );
        preventDefault();
    });

}