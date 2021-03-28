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
/* harmony export */   "performLogin": () => (/* binding */ performLogin),
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
      console.log(username);
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var addRecipeCallback = function addRecipeCallback() {
  return fetch('/recipe', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({})
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
/*!********************!*\
  !*** ./src/web.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");

var recipeListEl = document.querySelector('#recipe-app .recipes');
var usernameEl = document.querySelector('#recipe-app .login input');
var loginButtonEl = document.querySelector('#recipe-app .login button');
var loggedinStatusEl = document.querySelector('#recipe-app .logged-in');
var logoutButtonEl = document.querySelector('#recipe-app .logout button');
var addTitleEl = document.querySelector('#recipe-app .add-recipe.title');
var addIngreEl = document.querySelector('#recipe-app .add-recipe.ingre');
var addInstruEl = document.querySelector('#recipe-app .add-recipe.instru');
var addButtonEl = document.querySelector('#recipe-app .app-recipe button'); //  preventDefault();

(0,_services__WEBPACK_IMPORTED_MODULE_0__.loadRecipes)();
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
  loginButtonEl.addEventListener('click', function () {
    var username = usernameEl.value;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.performLogin)(username);
    then(function () {
      showLoggedinContent();
      renderRecipes();
    })["catch"](function (err) {
      updateStatus();
    });
  });
}

function renderRecipes(recipes) {
  recipeState = recipes;
  var html = recipeState.map(function (recipe) {
    return "\n            <li>\n                <a data-index=".concat(recipe.id, " href=\"\">").concat(recipe.title, "</a>\n                <span data-index=").concat(recipe.id, ">").concat(recipe.author, "</a>\n            </li>\n        ");
  }).join('');
  recipeListEl.innerHTML = html;
}

function addRecipe() {
  checkLoginStatus();
  addButtonEl.addEventListener('click', function (e) {
    if (!addTitleEl.value && !addIngreEl && !addInstruEl) {
      addButtonEl.disabled = false;
    }

    e.target.classList = (0,_services__WEBPACK_IMPORTED_MODULE_0__.addRecipeCallback)();
    preventDefault();
  });
}
})();

/******/ })()
;
//# sourceMappingURL=web.js.map