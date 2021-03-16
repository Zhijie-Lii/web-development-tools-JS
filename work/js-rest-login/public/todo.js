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
/* harmony export */   "callToChangeTodoPriority": () => (/* binding */ callToChangeTodoPriority),
/* harmony export */   "callToUpdate": () => (/* binding */ callToUpdate)
/* harmony export */ });
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
      //headers
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
      console.log(username); //

      return response.json();
    }

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
      // todos: {
      task: task,
      done: false,
      priority: prio // },

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
  return fetch("/session/".concat(index), {
    method: 'DELETE' // headers: new Headers({
    //     'content-type': 'application/json',
    // }),
    // body: JSON.stringify({ index }),

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
  return fetch('/session', {
    method: 'PATCH',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({// todos[index]: {
      //     priority : newPriority,
      // }
    })
  });
};
var callToUpdate = function callToUpdate() {
  //pooling every 5 sec
  return fetch('./session', {
    method: ''
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
/* harmony export */   "showContent": () => (/* binding */ showContent),
/* harmony export */   "showLogin": () => (/* binding */ showLogin),
/* harmony export */   "addLogin": () => (/* binding */ addLogin),
/* harmony export */   "renderTodos": () => (/* binding */ renderTodos),
/* harmony export */   "errMsgs": () => (/* binding */ errMsgs),
/* harmony export */   "updateStatus": () => (/* binding */ updateStatus),
/* harmony export */   "addNewTodo": () => (/* binding */ addNewTodo),
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
/* harmony export */   "updateTodoPriority": () => (/* binding */ updateTodoPriority),
/* harmony export */   "rankTodos": () => (/* binding */ rankTodos)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }



var showContent = function showContent() {
  document.querySelector('#todo-app .login').classList.add('hidden');
  document.querySelector('#todo-app .logged-in').classList.remove('hidden');
};
var showLogin = function showLogin() {
  document.querySelector('#todo-app .login').classList.remove('hidden');
  document.querySelector('#todo-app .logged-in').classList.add('hidden');
};

var showLoggedInUserName = function showLoggedInUserName(username) {
  document.getElementById("user").innerText = username;
};

var addLogin = function addLogin() {
  document.querySelector('#todo-app .login button').addEventListener('click', function () {
    var usernameEl = document.querySelector('#todo-app .login input');
    var username = usernameEl.value;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.performLogin)(username).then(function (userInfo) {
      showContent();
      setTimeout(_services__WEBPACK_IMPORTED_MODULE_0__.checkLoginStatus, 5000); //

      username = (_readOnlyError("username"), userInfo.username);
      console.log(username);
      showLoggedInUserName(username);
      todos = userInfo.todos;
      renderTodos(todos);
    })["catch"](function (err) {
      updateStatus(errMsgs[err.error] || err.error);
    });
  });
};
var renderTodos = function renderTodos(todos) {
  var todoListEl = document.querySelector('#todo-app .todos');

  var a = function a() {
    console.log(123);
  };

  var html = todos.map(function (todo, index) {
    console.log("In render", todo, todo["priority"]); // // let a= deleteTodo()
    // let s= '<li><button class="delete">X</button></li>';
    // return s

    return "\n            <li>\n                <span class=\"delete\" data-index=".concat(index, ">X</span>\n                <span class=\"task\" data-index=").concat(index, ">").concat(todo.task, "</span>\n                <span class=\"colon\">:</span>\n                <button class=\"degrade\" data-index=").concat(index, ">-</button>\n                <span class=\"priority\" data-index=").concat(index, ">").concat(todo.priority, "</span>\n                <button class=\"upgrade\" data-index=").concat(index, ">+</button>\n            </li>\n        ");
  }).join('');
  console.log(todoListEl);
  todoListEl.innerHTML = html;
  deleteTodo();
};
var errMsgs = {};
var updateStatus = function updateStatus(screenMsgs) {
  var status = document.querySelector('#todo-app .status'); // console.log(typeof status);

  status.innerHTML = screenMsgs;
};
var addNewTodo = function addNewTodo() {
  var addButtonEl = document.querySelector('#add-todo .add');
  var taskEl = document.querySelector('#add-todo .task');
  var priorityEl = document.querySelector('#add-todo .priority');
  addButtonEl.addEventListener('click', function (e) {
    var task = taskEl.value;
    var prio = priorityEl.value;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.callToAddNewTodo)(task, prio).then(function (todos) {
      taskEl.value = '';
      priorityEl.value = '';
      renderTodos(todos);
    })["catch"](function (err) {
      updateStatus(errMsgs[err.error] || err.error);
    });
  });
};
var deleteTodo = function deleteTodo() {
  var todoListEl = document.querySelector('#todo-app .todos'); // const deleteButtonEl = document.querySelectorAll('.delete')

  console.log(deleteButtonEl);
  todoListEl.addEventListener('click', function (e) {
    console.log(123);

    if (!e.target.classList.contains('delete')) {
      return;
    } else {
      var index = e.target.dataset.index;
      (0,_services__WEBPACK_IMPORTED_MODULE_0__.callToDeleteTodo)(index).then(function (todos) {
        renderTodos(todos);
        updateStatus("Successfully delete a todo"); // delete 
      })["catch"](function (err) {
        updateStatus(errMsgs[err.error] || err.error);
      });
    }
  });
};
var updateTodoPriority = function updateTodoPriority() {
  var todoListEl = document.querySelector('#todo-app .todos');
  todoListEl.addEventListener('click', function (e) {
    var index = e.target.dataset.index;

    if (e.target.classList.contains('degrade')) {} else if (e.target.classList.contains('upgrade')) {//     if ()
    }
  });
};
var rankTodos = function rankTodos() {}; // const timerEl = document.querySelector('.timer');
//   const setTimer = (endAt) => {
//     const totalSeconds  = Math.max( 0, endAt - Math.floor(Date.now()/1000) );
//     const secondsLeft = totalSeconds % 60;
//     const minsLeft = (totalSeconds - secondsLeft)/60;
//     timerEl.innerText = `${minsLeft}:${secondsLeft.toString().padStart(2,'0')}`;
//   };
//   const updateTimer = () => {
//     // No error checking shown, but should be present on real code
//     return fetch('/api/controls', {
//       method: 'GET',
//     })
//     .then( response => response.json() )
//     .then( controls => setTimer(controls.timer.endAt) )
//     .then( setTimeout( updateTimer, 5000) );
//   };
//   updateTimer();
//   const setTimerButton = document.querySelector('.set-timer');
//   setTimerButton.addEventListener('click', () => {
//     const setTo = document.querySelector('.timer').value;
//     setTimerButton.disabled = true;
//     fetch('/api/controls/timer', {
//       method: 'POST',
//       headers: new Headers({
//         'content-type': 'application/json',
//       }),
//       body: JSON.stringify({timer: setTo}),
//     })
//     .finally( () => {
//       setTimerButton.disabled = false;
//     });
//   });

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
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web */ "./src/web.js");


var todos = [];
(0,_web__WEBPACK_IMPORTED_MODULE_1__.addLogin)();
(0,_services__WEBPACK_IMPORTED_MODULE_0__.checkLoginStatus)().then(function (userInfo) {
  (0,_web__WEBPACK_IMPORTED_MODULE_1__.showContent)();
  todos = userInfo.todos;
  (0,_web__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(todos);
})["catch"](function (error) {
  JSON.stringify(error);
  (0,_web__WEBPACK_IMPORTED_MODULE_1__.showLogin)();
});
(0,_web__WEBPACK_IMPORTED_MODULE_1__.addNewTodo)().then(function (userInfo) {
  todos = userInfo.todos;
  (0,_web__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(todos);
  (0,_web__WEBPACK_IMPORTED_MODULE_1__.rankTodos)(desc);
}); // deleteTodo()   给x加事件监听  addAbilitytoDelete()
// .then( (userInfo) => {
//     todos = userInfo.todos;
//     renderTodos(todos);
//     rankTodos( desc )
// });
})();

/******/ })()
;
//# sourceMappingURL=todo.js.map