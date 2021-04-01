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
};
