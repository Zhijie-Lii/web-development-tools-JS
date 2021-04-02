/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadRecipes": () => (/* binding */ loadRecipes),
/* harmony export */   "fetchRecipeDetail": () => (/* binding */ fetchRecipeDetail),
/* harmony export */   "performLogin": () => (/* binding */ performLogin),
/* harmony export */   "performLogout": () => (/* binding */ performLogout),
/* harmony export */   "addRecipeCallback": () => (/* binding */ addRecipeCallback),
/* harmony export */   "checkLoginStatus": () => (/* binding */ checkLoginStatus)
/* harmony export */ });
var loadRecipes = function loadRecipes() {
  return fetch('/recipes', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var fetchRecipeDetail = function fetchRecipeDetail(recipeId) {
  return fetch("/recipes/".concat(recipeId), {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var performLogin = function performLogin(username) {
  return fetch('/session', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      username: username
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var performLogout = function performLogout() {
  return fetch('/session', {
    method: 'DELETE' // headers: new Headers({
    //     'content-type': 'application/json',
    // }),

  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    console.log('goo');

    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var addRecipeCallback = function addRecipeCallback(title, ingre, instru) {
  return fetch('/recipe', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      title: title,
      ingredient: ingre,
      instruction: instru
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var checkLoginStatus = function checkLoginStatus() {
  return fetch('/session', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};

/***/ }),

/***/ "./src/web.js":
/*!********************!*\
  !*** ./src/web.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showLoggedinContent": () => (/* binding */ showLoggedinContent),
/* harmony export */   "showContentWithoutLogin": () => (/* binding */ showContentWithoutLogin)
/* harmony export */ });
var loginEl = document.querySelector('#recipe-app .login');
var loggedinStatusEl = document.querySelector('#recipe-app .logged-in');
var logoutEl = document.querySelector('#recipe-app .logout');
var showLoggedinContent = function showLoggedinContent(_ref) {
  var username = _ref.username;
  loginEl.classList.add('hidden');
  loggedinStatusEl.classList.remove('hidden');
  logoutEl.classList.remove('hidden');
  document.querySelector('#recipe-app .add-recipe').classList.remove('hidden');
  loggedinStatusEl.innerHTML = "name: ".concat(username);
};
var showContentWithoutLogin = function showContentWithoutLogin() {
  loginEl.classList.remove('hidden');
  loggedinStatusEl.classList.add('hidden');
  logoutEl.classList.add('hidden');
  document.querySelector('#recipe-app .add-recipe').classList.add('hidden');
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web */ "./src/web.js");


var recipesListEl = document.querySelector('#recipe-app .recipes');
var recipeDetailEl = document.querySelector('#recipe-app .recipe-detail');
var mainContentEl = document.querySelector('#mainContent');
var userStatusEl = document.querySelector('#recipe-app .user-status');
var addTitleEl = document.querySelector('#recipe-app .add-recipe .title');
var addIngreEl = document.querySelector('#recipe-app .add-recipe .ingre');
var addInstruEl = document.querySelector('#recipe-app .add-recipe .instru');
var addButtonEl = document.querySelector('#recipe-app .add-recipe button');
var recipeState = {};
var recipeNumber = 0;
(0,_services__WEBPACK_IMPORTED_MODULE_0__.checkLoginStatus)().then(function (username) {
  (0,_web__WEBPACK_IMPORTED_MODULE_1__.showLoggedinContent)(username);
  console.log('with login');
  displayRecipes();
})["catch"](function (err) {
  (0,_web__WEBPACK_IMPORTED_MODULE_1__.showContentWithoutLogin)();
  displayRecipes();
});
addLogin();
addLogout();
jumpToRecipeDetails();

function displayRecipes() {
  (0,_services__WEBPACK_IMPORTED_MODULE_0__.loadRecipes)().then(function (recipesInfo) {
    recipeState = recipesInfo.recipesData;
    renderRecipes(recipeState);
    console.log('display recipes');
  });
}

function renderRecipes(recipes) {
  recipeState = recipes;
  var html = Object.values(recipeState).map(function (recipe) {
    recipeNumber++;
    return "\n            <li>\n                <a data-index=".concat(recipe.id, " class=\"recipe-title\">").concat(recipe.title, "</a>\n                <span data-index=").concat(recipe.id, " class=\"author\">").concat(recipe.author, "</span>\n            </li>\n        ");
  }).join('');
  console.log('finish render');
  recipesListEl.innerHTML = html;
}

function updateStatus(msg) {
  userStatusEl.innerHTML = msg;
}

function addLogin() {
  var loginButtonEl = document.querySelector('#recipe-app .login button');
  var usernameEl = document.querySelector('#recipe-app .login input');
  loginButtonEl.addEventListener('click', function () {
    var username = usernameEl.value;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.performLogin)(username).then(function (username) {
      console.log('perform login');
      usernameEl.value = '';
      (0,_web__WEBPACK_IMPORTED_MODULE_1__.showLoggedinContent)(username);
      addRecipe();
      updateStatus('username loggedin.');
    })["catch"](function (err) {
      updateStatus(err);
    });
  });
}

function addLogout() {
  var logoutButtonEl = document.querySelector('#recipe-app .logout button');
  logoutButtonEl.addEventListener('click', function () {
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.performLogout)().then(function () {
      updateStatus('Already logout');
      (0,_web__WEBPACK_IMPORTED_MODULE_1__.showContentWithoutLogin)();
    })["catch"](function (err) {
      updateStatus(err);
    });
  });
}

function jumpToRecipeDetails() {
  recipesListEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('recipe-title')) {
      e.preventDefault();
      var recipeId = e.target.dataset.index;
      (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchRecipeDetail)(recipeId).then(function (recipeDetail) {
        showRecipeDetail(recipeDetail);
        backToMainPage();
      })["catch"](function (err) {
        updateStatus(err);
      });
    }

    ;
  });
}

function showRecipeDetail(recipeDetail) {
  var html = "\n        <p><label>Recipe Title:</label>".concat(recipeDetail.title, " </p>\n        <p><label>Author:</label>").concat(recipeDetail.author, " </p>\n        <p><label>Ingredient:</label>").concat(recipeDetail.ingredient, " </p>\n        <p><label>Instruction:</label>").concat(recipeDetail.instruction, " </p>\n        <br/><button class=\"back\">Back</button>");
  mainContentEl.classList.add('hidden');
  recipeDetailEl.innerHTML = html; // backToMainPage();
}

function backToMainPage() {
  var backButton = document.querySelector('.recipe-detail button');
  backButton.addEventListener('click', function (e) {
    e.preventDefault();
    renderRecipes(recipeState);
    mainContentEl.classList.remove('hidden');
    recipeDetailEl.classList.add('hidden');
    console.log('back there');
  });
}

function addRecipe() {
  (0,_services__WEBPACK_IMPORTED_MODULE_0__.checkLoginStatus)();
  addButtonEl.addEventListener('click', function (e) {
    e.preventDefault();

    if (!addTitleEl.value || !addIngreEl.value || !addInstruEl.value) {
      updateStatus('fulfill the whole items first'); // addButtonEl.disabled = false;

      return;
    }

    console.log('to add');
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.addRecipeCallback)(addTitleEl.value, addIngreEl.value, addInstruEl.value).then(function (newRecipe) {
      recipeState[newRecipe.id] = newRecipe;
      showRecipeDetail(newRecipe);
      recipeState[recipeNumber] = newRecipe;
      addTitleEl.value = '';
      addIngreEl.value = '';
      addInstruEl.value = '';
    })["catch"](function (err) {
      updateStatus(err);
    });
  });
}
})();

/******/ })()
;
//# sourceMappingURL=recipe.js.map