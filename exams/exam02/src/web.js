const loginEl = document.querySelector('#recipe-app .login');
const loggedinStatusEl = document.querySelector('#recipe-app .logged-in');
const logoutEl = document.querySelector('#recipe-app .logout');

export const showLoggedinContent = function( {username} ) {
    loginEl.classList.add('hidden');
    loggedinStatusEl.classList.remove('hidden');
    logoutEl.classList.remove('hidden');
    document.querySelector('#recipe-app .add-recipe').classList.remove('hidden');
    loggedinStatusEl.innerHTML = `author: ${username}`;
};

export const showContentWithoutLogin = function() {
    loginEl.classList.remove('hidden');
    loggedinStatusEl.classList.add('hidden');
    logoutEl.classList.add('hidden');
    document.querySelector('#recipe-app .add-recipe').classList.add('hidden');
};
