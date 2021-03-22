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
/* harmony export */   "checkLoginStatus": () => (/* binding */ checkLoginStatus),
/* harmony export */   "performLogin": () => (/* binding */ performLogin),
/* harmony export */   "callToAddNewTodo": () => (/* binding */ callToAddNewTodo),
/* harmony export */   "callToDeleteTodo": () => (/* binding */ callToDeleteTodo),
/* harmony export */   "callToChangeTodoPriority": () => (/* binding */ callToChangeTodoPriority)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

    updateStatus(); // pass in errMsg

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

    console.log('error', username, typeof err === "undefined" ? "undefined" : _typeof(err));
    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var callToAddNewTodo = function callToAddNewTodo(task, prio) {
  return fetch('/todo', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      task: task,
      done: false,
      priority: prio
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
var callToDeleteTodo = function callToDeleteTodo(index) {
  return fetch("/todo/".concat(index), {
    method: 'DELETE'
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
var callToChangeTodoPriority = function callToChangeTodoPriority(index, newPriority) {
  return fetch("/todo/".concat(index), {
    method: 'PATCH',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      priority: newPriority,
      id: index
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
}; // export const callToUpdate = function() { //pooling every 5 sec
//     return fetch('./session', {
//         method: ''
//     })
// }

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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


var usernameEl = document.querySelector('#todo-app .login input');
var todoListEl = document.querySelector('#todo-app .todos');
var addButtonEl = document.querySelector('#add-todo .add');
var taskEl = document.querySelector('#add-todo .task');
var priorityEl = document.querySelector('#add-todo .priority');
var status = document.querySelector('#todo-app .status');
var sortEle = document.querySelector('#sortBtn');
var todoTemp = [];
var errMsgs = {};
addLogin();
(0,_services__WEBPACK_IMPORTED_MODULE_0__.checkLoginStatus)().then(function (userInfo) {
  showContent();
  renderTodos(userInfo.todos);
})["catch"](function (error) {
  JSON.stringify(error);
  showLogin();
});
addNewTodo();
deleteTodo();
updateTodoPriority();
changeRanking();

function showContent() {
  document.querySelector('#todo-app .login').classList.add('hidden');
  document.querySelector('#todo-app .logged-in').classList.remove('hidden');
  document.querySelector('#add-todo').classList.remove('hidden');
}

function showLogin() {
  document.querySelector('#todo-app .login').classList.remove('hidden');
  document.querySelector('#todo-app .logged-in').classList.add('hidden');
  document.querySelector('#add-todo').classList.add('hidden');
}

function addLogin() {
  document.querySelector('#todo-app .login button').addEventListener('click', function () {
    // showLogin();
    var username = usernameEl.value;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.performLogin)(username).then(function (userInfo) {
      showContent(); // let todos = userInfo.todos;

      renderTodos(userInfo.todos);
      updateStatus("logged in as ".concat(username));
      setTimeout(_services__WEBPACK_IMPORTED_MODULE_0__.checkLoginStatus, 5000);
    })["catch"](function (err) {
      usernameEl.value = '';
      updateStatus(Object.values(err));
    });
  });
}

function renderTodos(todos) {
  todoTemp = todos;
  var html = todos.map(function (todo) {
    // console.log("In render", todo, todo.priority);
    return "\n            <li>\n                <span class=\"delete\" data-index=".concat(todo.id, ">X</span>\n                <span class=\"task\" data-index=").concat(todo.id, ">").concat(todo.task, "</span>\n                <span class=\"colon\">:</span>\n                <button class=\"degrade\" data-index=").concat(todo.id, ">-</button>\n                <span class=\"priority\" data-index=").concat(todo.id, ">").concat(todo.priority, "</span>\n                <button class=\"upgrade\" data-index=").concat(todo.id, ">+</button>\n            </li>\n        ");
  }).join('');
  todoListEl.innerHTML = html;
}

function updateStatus(screenMsgs) {
  status.innerHTML = screenMsgs;
}

function addNewTodo() {
  addButtonEl.addEventListener('click', function (e) {
    var task = taskEl.value;
    var prio = parseInt(priorityEl.value);

    if (!task || !prio) {
      addButtonEl.disabled = false;
      return;
    }

    (0,_services__WEBPACK_IMPORTED_MODULE_0__.callToAddNewTodo)(task, prio).then(function (todos) {
      taskEl.value = '';
      priorityEl.value = '';
      todoTemp = todos;
      rankTodos();
      renderTodos(todos);
      updateStatus("Successfully add new todo");
    })["catch"](function (err) {
      updateStatus(errMsgs[err.error] || err.error);
    });
  });
}

function deleteTodo() {
  //minor fix
  todoListEl.addEventListener('click', function (e) {
    if (!e.target.classList.contains('delete')) {
      return;
    } else {
      var index = e.target.dataset.index;
      (0,_services__WEBPACK_IMPORTED_MODULE_0__.callToDeleteTodo)(index).then(function (todos) {
        todoTemp = todos;
        rankTodos();
        renderTodos(todoTemp);
        updateStatus("Successfully delete a todo");
      })["catch"](function (err) {
        updateStatus(errMsgs[err.error] || err.error);
      });
    }
  });
}

function updateTodoPriority() {
  todoListEl.addEventListener('click', function (e) {
    var index = e.target.dataset.index;
    var newPriority = parseInt(e.target.parentElement.querySelector("#todo-app .priority").innerText);

    if (e.target.classList.contains('degrade')) {
      if (newPriority > 1) {
        newPriority = newPriority - 1;
        (0,_services__WEBPACK_IMPORTED_MODULE_0__.callToChangeTodoPriority)(index, newPriority).then(function (changedTodo) {
          todoTemp.map(function (todo, index) {
            if (todo.id === changedTodo[0].id) {
              todoTemp[index] = changedTodo[0];
            }
          });
          rankTodos();
          renderTodos(todoTemp);
          updateStatus("Degrade a todo");
        });
      }
    } else if (e.target.classList.contains('upgrade')) {
      if (newPriority < 5) {
        newPriority = newPriority + 1;
        (0,_services__WEBPACK_IMPORTED_MODULE_0__.callToChangeTodoPriority)(index, newPriority).then(function (changedTodo) {
          todoTemp.map(function (todo, index) {
            if (todo.id === changedTodo[0].id) {
              todoTemp[index] = changedTodo[0];
            }
          });
          rankTodos();
          renderTodos(todoTemp);
          updateStatus("Upgrade a todo");
        });
      }
    } else return;
  });
}

function rankTodos() {
  todoTemp.sort(function (a, b) {
    return b.priority - a.priority;
  });
}

function changeRanking() {
  var sortFlag = true;
  sortEle.addEventListener("click", function () {
    if (sortFlag) {
      todoTemp.sort(function (a, b) {
        return a.priority - b.priority;
      });
    } else {
      todoTemp.sort(function (a, b) {
        return b.priority - a.priority;
      });
    }

    sortFlag = !sortFlag;
    renderTodos(todoTemp);
  });
}
})();

/******/ })()
;
//# sourceMappingURL=web.js.map