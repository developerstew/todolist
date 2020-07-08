webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");



var _jsxFileName = "C:\\Users\\dewal\\OneDrive\\Desktop\\toDoLis\\tryagain\\developerstew\\pages\\index.js",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      formData = _useState[0],
      setFormData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      todos = _useState2[0],
      setTodo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      alert = _useState3[0],
      setAlert = _useState3[1];

  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(); // Checks to see if any todos have been saved and loads them

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var data = localStorage.getItem('todos');

    if (data) {
      setTodo(JSON.parse(data));
    }
  }, []); // Saves any changes made with todos to locastorage

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    localStorage.setItem('todos', JSON.stringify(todos));
  });

  var addTodo = function addTodo(e) {
    e.preventDefault();

    if (formData.length === 0) {
      setAlert('You cannot save empty todo!');
      setTimeout(function () {
        setAlert('');
      }, 3000);
    } else {
      var label = inputRef.current;
      setTodo([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(todos), [{
        id: Object(nanoid__WEBPACK_IMPORTED_MODULE_5__["nanoid"])(6),
        title: formData,
        completed: false,
        edit: false
      }]));
      setFormData('');
      label.value = '';
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };

  var removeTodo = function removeTodo(id) {
    setTodo(todos.filter(function (todo) {
      return todo.id !== id;
    }));
    setAlert('Successfully Removed!');
    setTimeout(function () {
      setAlert('');
    }, 3000);
  }; // Edit whether to do is in edit mode or not to affect how todo gets displayed


  var setTodoEditStatus = function setTodoEditStatus(id, title) {
    setTodo(todos.map(function (todo) {
      return todo.id === id ? _objectSpread(_objectSpread({}, todo), {}, {
        edit: true
      }) : todo;
    }));
    setFormData(title);
  }; // Actual editing of todo


  var editTodo = function editTodo(id) {
    console.log(formData.length);

    if (formData.length === 0) {
      setAlert('You cannot save empty todo!');
      setInterval(function () {
        setAlert('');
      }, 3000);
    } else {
      setTodo(todos.map(function (todo) {
        return todo.id === id ? _objectSpread(_objectSpread({}, todo), {}, {
          title: formData,
          edit: false
        }) : todo;
      }));
    }
  }; // Allows changing todo to completed or not


  var todoCompletedStatus = function todoCompletedStatus(id, completed) {
    setTodo(todos.map(function (todo) {
      return todo.id === id ? _objectSpread(_objectSpread({}, todo), {}, {
        completed: completed
      }) : todo;
    }));
  };

  return __jsx("div", {
    className: "jsx-1443649223" + " " + 'container',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx("h1", {
    id: "header",
    className: "jsx-1443649223",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, "To Do List"), __jsx("form", {
    action: "submit",
    onSubmit: function onSubmit(e) {
      return addTodo(e);
    },
    className: "jsx-1443649223" + " " + 'createToDo',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("input", {
    id: "todoInput",
    type: "text",
    ref: inputRef,
    onChange: function onChange(e) {
      return setFormData(e.target.value);
    },
    placeholder: "Enter new To do",
    className: "jsx-1443649223",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }), __jsx("button", {
    id: "createNewButton",
    type: "submit",
    className: "jsx-1443649223",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Create new")), __jsx("p", {
    id: "alertPlaceholder",
    className: "jsx-1443649223",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, alert), __jsx("div", {
    id: "toDoPlaceholder",
    className: "jsx-1443649223",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "jsx-1443649223",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, todos.map(function (todo) {
    if (todo.edit) {
      return __jsx("li", {
        key: todo.id,
        className: "jsx-1443649223",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "jsx-1443649223",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 19
        }
      }, __jsx("input", {
        type: "checkbox",
        checked: todo.completed,
        onChange: function onChange(_ref) {
          var target = _ref.target;
          return todoCompletedStatus(todo.id, target.checked);
        },
        className: "jsx-1443649223" + " " + 'checkbox ',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "jsx-1443649223",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 19
        }
      }, __jsx("input", {
        type: "text",
        value: formData,
        onChange: function onChange(e) {
          return setFormData(e.target.value);
        },
        id: "editTodoInput",
        className: "jsx-1443649223",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "jsx-1443649223",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 19
        }
      }, __jsx("button", {
        onClick: function onClick(e) {
          return editTodo(todo.id, formData);
        },
        className: "jsx-1443649223" + " " + 'liButtons ',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }
      }, "Save"), __jsx("button", {
        onClick: function onClick(e) {
          return removeTodo(todo.id);
        },
        className: "jsx-1443649223" + " " + 'liButtons ',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }
      }, "X")));
    }

    return __jsx("li", {
      key: todo.id,
      className: "jsx-1443649223",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "jsx-1443649223" + " " + 'items1',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }
    }, __jsx("input", {
      type: "checkbox",
      checked: todo.completed,
      onChange: function onChange(_ref2) {
        var target = _ref2.target;
        return todoCompletedStatus(todo.id, target.checked);
      },
      className: "jsx-1443649223" + " " + 'checkbox ',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 19
      }
    })), __jsx("div", {
      className: "jsx-1443649223",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "jsx-1443649223" + " " + 'addedTodoText',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 19
      }
    }, todo.title)), __jsx("div", {
      className: "jsx-1443649223",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }
    }, __jsx("button", {
      onClick: function onClick(e) {
        return setTodoEditStatus(todo.id, todo.title);
      },
      className: "jsx-1443649223" + " " + 'liButtons ',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 19
      }
    }, "Edit"), __jsx("button", {
      onClick: function onClick(e) {
        return removeTodo(todo.id, todo.title);
      },
      className: "jsx-1443649223" + " " + 'liButtons ',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 19
      }
    }, "X")));
  })), ' ', todos.length > 0 ? __jsx("p", {
    className: "jsx-1443649223",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, "Number of todos: ", todos.length) : __jsx("p", {
    className: "jsx-1443649223",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, "You have nothing in your todo list")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1083337604",
    __self: this
  }, "@media screen and (max-width:500px){li.jsx-1443649223{font-size:1rem;padding:0px;margin:0;display:grid;grid-template-columns:auto auto auto;width:100%;}ul.jsx-1443649223{list-style:none;padding:0px;width:100%;display:grid;grid-template-columns:auto;}p.jsx-1443649223{font-size:1rem;color:white;}.checkbox.jsx-1443649223{vertical-align:middle;margin:0;}.liButtons.jsx-1443649223{background-color:white;height:5%;width:50%;padding:0px;}#editTodoInput.jsx-1443649223{height:10%;width:10%;}#createNewButton.jsx-1443649223{background-color:white;height:5%;width:30%;}#createNewButton.jsx-1443649223:hover{height:5%;width:40%;}.items1.jsx-1443649223{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}#alertPlaceholder.jsx-1443649223{color:red;}#todoInput.jsx-1443649223{padding:1.5rem;border-radius:10px;display:block;margin:0 auto;width:60%;margin-bottom:1rem;}#toDoPlaceholder.jsx-1443649223{padding:5rem;}#editTodoInput.jsx-1443649223{padding:1rem;width:100%;}.checkbox.jsx-1443649223{width:2rem;height:2rem;vertical-align:middle;margin-left:2rem;}.items1.jsx-1443649223{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}#createNewButton.jsx-1443649223{background-color:white;padding:1rem;}#createNewButton.jsx-1443649223:hover{background-color:#3fe0d0;padding:1.2rem;}.liButtons.jsx-1443649223{background-color:white;padding:1rem;}.addedTodoText.jsx-1443649223{color:black;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGV3YWxcXE9uZURyaXZlXFxEZXNrdG9wXFx0b0RvTGlzXFx0cnlhZ2FpblxcZGV2ZWxvcGVyc3Rld1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFMa0IsQUFJNEIsQUFRQyxBQU9ELEFBSU8sQUFLQyxBQU1aLEFBSVksQUFLYixBQUlHLEFBSUwsQUFHSyxBQVFGLEFBR0EsQUFJRixBQU1FLEFBR1UsQUFJRSxBQUlGLEFBSVgsVUE5Q0EsQUFRZCxDQWpCYyxBQW1DQSxDQXFCSCxDQTVCWCxBQUdhLEVBN0RHLEFBZUEsQUFtQ0ssQ0ExQ0wsSUFnQ2QsQ0FUQSxBQXdERixDQXBFYSxDQUtDLEFBVUEsQUFnQ1UsQUFRVCxBQVFBLENBcEJmLENBZ0JpQixFQTdFSixBQWVYLENBUGEsR0FXYixFQUtZLEFBVUEsQ0FnQkUsRUFqREMsQUF5RWpCLEFBUUEsR0F6RWlCLENBcUVqQixHQXJEZ0IsQUFVZCxFQStCaUIsR0FmSCxDQWpEeUIsR0FRVixHQWdCN0IsT0EwQlUsQUFlWixVQWRxQixFQVhuQixBQTRCRixLQTNERSxPQVJhLEtBbURmLE1BbERFIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGV3YWxcXE9uZURyaXZlXFxEZXNrdG9wXFx0b0RvTGlzXFx0cnlhZ2FpblxcZGV2ZWxvcGVyc3Rld1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYWxlcnQsIHNldEFsZXJ0XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIC8vIENoZWNrcyB0byBzZWUgaWYgYW55IHRvZG9zIGhhdmUgYmVlbiBzYXZlZCBhbmQgbG9hZHMgdGhlbVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgc2V0VG9kbyhKU09OLnBhcnNlKGRhdGEpKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgLy8gU2F2ZXMgYW55IGNoYW5nZXMgbWFkZSB3aXRoIHRvZG9zIHRvIGxvY2FzdG9yYWdlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkVG9kbyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChmb3JtRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEFsZXJ0KCdZb3UgY2Fubm90IHNhdmUgZW1wdHkgdG9kbyEnKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEFsZXJ0KCcnKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYWJlbCA9IGlucHV0UmVmLmN1cnJlbnQ7XG4gICAgICBzZXRUb2RvKFtcbiAgICAgICAgLi4udG9kb3MsXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogbmFub2lkKDYpLFxuICAgICAgICAgIHRpdGxlOiBmb3JtRGF0YSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgXSk7XG4gICAgICBzZXRGb3JtRGF0YSgnJyk7XG4gICAgICBsYWJlbC52YWx1ZSA9ICcnO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAoaWQpID0+IHtcbiAgICBzZXRUb2RvKHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gaWQpKTtcbiAgICBzZXRBbGVydCgnU3VjY2Vzc2Z1bGx5IFJlbW92ZWQhJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRBbGVydCgnJyk7XG4gICAgfSwgMzAwMCk7XG4gIH07XG5cbiAgLy8gRWRpdCB3aGV0aGVyIHRvIGRvIGlzIGluIGVkaXQgbW9kZSBvciBub3QgdG8gYWZmZWN0IGhvdyB0b2RvIGdldHMgZGlzcGxheWVkXG4gIGNvbnN0IHNldFRvZG9FZGl0U3RhdHVzID0gKGlkLCB0aXRsZSkgPT4ge1xuICAgIHNldFRvZG8oXG4gICAgICB0b2Rvcy5tYXAoKHRvZG8pID0+ICh0b2RvLmlkID09PSBpZCA/IHsgLi4udG9kbywgZWRpdDogdHJ1ZSB9IDogdG9kbykpXG4gICAgKTtcbiAgICBzZXRGb3JtRGF0YSh0aXRsZSk7XG4gIH07XG4gIC8vIEFjdHVhbCBlZGl0aW5nIG9mIHRvZG9cbiAgY29uc3QgZWRpdFRvZG8gPSAoaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YS5sZW5ndGgpO1xuICAgIGlmIChmb3JtRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEFsZXJ0KCdZb3UgY2Fubm90IHNhdmUgZW1wdHkgdG9kbyEnKTtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0QWxlcnQoJycpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRvZG8oXG4gICAgICAgIHRvZG9zLm1hcCgodG9kbykgPT5cbiAgICAgICAgICB0b2RvLmlkID09PSBpZCA/IHsgLi4udG9kbywgdGl0bGU6IGZvcm1EYXRhLCBlZGl0OiBmYWxzZSB9IDogdG9kb1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgLy8gQWxsb3dzIGNoYW5naW5nIHRvZG8gdG8gY29tcGxldGVkIG9yIG5vdFxuICBjb25zdCB0b2RvQ29tcGxldGVkU3RhdHVzID0gKGlkLCBjb21wbGV0ZWQpID0+IHtcbiAgICBzZXRUb2RvKFxuICAgICAgdG9kb3MubWFwKCh0b2RvKSA9PiAodG9kby5pZCA9PT0gaWQgPyB7IC4uLnRvZG8sIGNvbXBsZXRlZCB9IDogdG9kbykpXG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgIDxoMSBpZD0naGVhZGVyJz5UbyBEbyBMaXN0PC9oMT5cbiAgICAgIDxmb3JtIGFjdGlvbj0nc3VibWl0JyBjbGFzc05hbWU9J2NyZWF0ZVRvRG8nIG9uU3VibWl0PXsoZSkgPT4gYWRkVG9kbyhlKX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPSd0b2RvSW5wdXQnXG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBuZXcgVG8gZG8nXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gaWQ9J2NyZWF0ZU5ld0J1dHRvbicgdHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICBDcmVhdGUgbmV3XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPHAgaWQ9J2FsZXJ0UGxhY2Vob2xkZXInPnthbGVydH08L3A+XG4gICAgICA8ZGl2IGlkPSd0b0RvUGxhY2Vob2xkZXInPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8uZWRpdCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjaGVja2JveCAnXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0nY2hlY2tib3gnXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbXBsZXRlZFN0YXR1cyh0b2RvLmlkLCB0YXJnZXQuY2hlY2tlZClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdlZGl0VG9kb0lucHV0J1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZWRpdFRvZG8odG9kby5pZCwgZm9ybURhdGEpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGlCdXR0b25zICdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gcmVtb3ZlVG9kbyh0b2RvLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpQnV0dG9ucyAnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtczEnPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2hlY2tib3ggJ1xuICAgICAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29tcGxldGVkU3RhdHVzKHRvZG8uaWQsIHRhcmdldC5jaGVja2VkKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2FkZGVkVG9kb1RleHQnPnt0b2RvLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0VG9kb0VkaXRTdGF0dXModG9kby5pZCwgdG9kby50aXRsZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGlCdXR0b25zICdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiByZW1vdmVUb2RvKHRvZG8uaWQsIHRvZG8udGl0bGUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpQnV0dG9ucyAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD57JyAnfVxuICAgICAgICB7dG9kb3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICA8cD5OdW1iZXIgb2YgdG9kb3M6IHt0b2Rvcy5sZW5ndGh9PC9wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPllvdSBoYXZlIG5vdGhpbmcgaW4geW91ciB0b2RvIGxpc3Q8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoZWNrYm94IHtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpQnV0dG9ucyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGhlaWdodDogNSU7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjZWRpdFRvZG9JbnB1dCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNjcmVhdGVOZXdCdXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUlO1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2NyZWF0ZU5ld0J1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUlO1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW1zMSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAjYWxlcnRQbGFjZWhvbGRlciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAjdG9kb0lucHV0IHtcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgI3RvRG9QbGFjZWhvbGRlciB7XG4gICAgICAgICAgcGFkZGluZzogNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAjZWRpdFRvZG9JbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2hlY2tib3gge1xuICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtczEge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgI2NyZWF0ZU5ld0J1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAjY3JlYXRlTmV3QnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZlMGQwO1xuICAgICAgICAgIHBhZGRpbmc6IDEuMnJlbTtcbiAgICAgICAgfVxuICAgICAgICAubGlCdXR0b25zIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5hZGRlZFRvZG9UZXh0IHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiNjU4MTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2hlYWRlciB7XG4gICAgICAgICAgICBjb2xvcjogIzczYjBiNDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzIuNSUgMzUlIDMyLjUlO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDFyZW1cbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0b1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\dewal\\\\OneDrive\\\\Desktop\\\\toDoLis\\\\tryagain\\\\developerstew\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2786395818",
    __self: this
  }, "body{background-color:#db6581;margin:0;padding:0;font-size:18px;font-weight:400;line-height:1.8;color:#333;font-family:sans-serif;height:100%;width:100%;position:absolute;}#header{color:#73b0b4;-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);padding:2rem;}.container{display:block;text-align:center;}p{font-size:2rem;color:white;}li{font-size:2rem;padding:2px;display:grid;grid-template-columns:32.5% 35% 32.5%;grid-gap:1rem;}ul{list-style:none;padding:0px;width:100%;display:grid;grid-template-columns:auto grid-gap:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGV3YWxcXE9uZURyaXZlXFxEZXNrdG9wXFx0b0RvTGlzXFx0cnlhZ2FpblxcZGV2ZWxvcGVyc3Rld1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9SUyxBQUdzQyxBQWFYLEFBTUEsQUFJQyxBQUlBLEFBT0MsY0FwQkssQUFNSCxDQUtyQixBQUdlLENBT0EsU0FsQ0gsRUF3QlgsQUFJZSxDQU9GLElBZmIsRUFuQlksS0FtQ0csQ0FQeUIsSUEzQnZCLFFBb0NELE9BbkNFLGdCQUNBLEdBMkJuQixXQWpCZ0IsRUFURixDQTBCYixDQVNBLFNBbEN5QixBQVN6Qix1QkFSYyxZQUNELFdBQ08sa0JBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGV3YWxcXE9uZURyaXZlXFxEZXNrdG9wXFx0b0RvTGlzXFx0cnlhZ2FpblxcZGV2ZWxvcGVyc3Rld1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYWxlcnQsIHNldEFsZXJ0XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIC8vIENoZWNrcyB0byBzZWUgaWYgYW55IHRvZG9zIGhhdmUgYmVlbiBzYXZlZCBhbmQgbG9hZHMgdGhlbVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgc2V0VG9kbyhKU09OLnBhcnNlKGRhdGEpKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgLy8gU2F2ZXMgYW55IGNoYW5nZXMgbWFkZSB3aXRoIHRvZG9zIHRvIGxvY2FzdG9yYWdlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkVG9kbyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChmb3JtRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEFsZXJ0KCdZb3UgY2Fubm90IHNhdmUgZW1wdHkgdG9kbyEnKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEFsZXJ0KCcnKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYWJlbCA9IGlucHV0UmVmLmN1cnJlbnQ7XG4gICAgICBzZXRUb2RvKFtcbiAgICAgICAgLi4udG9kb3MsXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogbmFub2lkKDYpLFxuICAgICAgICAgIHRpdGxlOiBmb3JtRGF0YSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgXSk7XG4gICAgICBzZXRGb3JtRGF0YSgnJyk7XG4gICAgICBsYWJlbC52YWx1ZSA9ICcnO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAoaWQpID0+IHtcbiAgICBzZXRUb2RvKHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gaWQpKTtcbiAgICBzZXRBbGVydCgnU3VjY2Vzc2Z1bGx5IFJlbW92ZWQhJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRBbGVydCgnJyk7XG4gICAgfSwgMzAwMCk7XG4gIH07XG5cbiAgLy8gRWRpdCB3aGV0aGVyIHRvIGRvIGlzIGluIGVkaXQgbW9kZSBvciBub3QgdG8gYWZmZWN0IGhvdyB0b2RvIGdldHMgZGlzcGxheWVkXG4gIGNvbnN0IHNldFRvZG9FZGl0U3RhdHVzID0gKGlkLCB0aXRsZSkgPT4ge1xuICAgIHNldFRvZG8oXG4gICAgICB0b2Rvcy5tYXAoKHRvZG8pID0+ICh0b2RvLmlkID09PSBpZCA/IHsgLi4udG9kbywgZWRpdDogdHJ1ZSB9IDogdG9kbykpXG4gICAgKTtcbiAgICBzZXRGb3JtRGF0YSh0aXRsZSk7XG4gIH07XG4gIC8vIEFjdHVhbCBlZGl0aW5nIG9mIHRvZG9cbiAgY29uc3QgZWRpdFRvZG8gPSAoaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YS5sZW5ndGgpO1xuICAgIGlmIChmb3JtRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEFsZXJ0KCdZb3UgY2Fubm90IHNhdmUgZW1wdHkgdG9kbyEnKTtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0QWxlcnQoJycpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRvZG8oXG4gICAgICAgIHRvZG9zLm1hcCgodG9kbykgPT5cbiAgICAgICAgICB0b2RvLmlkID09PSBpZCA/IHsgLi4udG9kbywgdGl0bGU6IGZvcm1EYXRhLCBlZGl0OiBmYWxzZSB9IDogdG9kb1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgLy8gQWxsb3dzIGNoYW5naW5nIHRvZG8gdG8gY29tcGxldGVkIG9yIG5vdFxuICBjb25zdCB0b2RvQ29tcGxldGVkU3RhdHVzID0gKGlkLCBjb21wbGV0ZWQpID0+IHtcbiAgICBzZXRUb2RvKFxuICAgICAgdG9kb3MubWFwKCh0b2RvKSA9PiAodG9kby5pZCA9PT0gaWQgPyB7IC4uLnRvZG8sIGNvbXBsZXRlZCB9IDogdG9kbykpXG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgIDxoMSBpZD0naGVhZGVyJz5UbyBEbyBMaXN0PC9oMT5cbiAgICAgIDxmb3JtIGFjdGlvbj0nc3VibWl0JyBjbGFzc05hbWU9J2NyZWF0ZVRvRG8nIG9uU3VibWl0PXsoZSkgPT4gYWRkVG9kbyhlKX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPSd0b2RvSW5wdXQnXG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBuZXcgVG8gZG8nXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gaWQ9J2NyZWF0ZU5ld0J1dHRvbicgdHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICBDcmVhdGUgbmV3XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPHAgaWQ9J2FsZXJ0UGxhY2Vob2xkZXInPnthbGVydH08L3A+XG4gICAgICA8ZGl2IGlkPSd0b0RvUGxhY2Vob2xkZXInPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8uZWRpdCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjaGVja2JveCAnXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0nY2hlY2tib3gnXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbXBsZXRlZFN0YXR1cyh0b2RvLmlkLCB0YXJnZXQuY2hlY2tlZClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdlZGl0VG9kb0lucHV0J1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZWRpdFRvZG8odG9kby5pZCwgZm9ybURhdGEpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGlCdXR0b25zICdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gcmVtb3ZlVG9kbyh0b2RvLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpQnV0dG9ucyAnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtczEnPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2hlY2tib3ggJ1xuICAgICAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29tcGxldGVkU3RhdHVzKHRvZG8uaWQsIHRhcmdldC5jaGVja2VkKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2FkZGVkVG9kb1RleHQnPnt0b2RvLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0VG9kb0VkaXRTdGF0dXModG9kby5pZCwgdG9kby50aXRsZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGlCdXR0b25zICdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiByZW1vdmVUb2RvKHRvZG8uaWQsIHRvZG8udGl0bGUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpQnV0dG9ucyAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD57JyAnfVxuICAgICAgICB7dG9kb3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICA8cD5OdW1iZXIgb2YgdG9kb3M6IHt0b2Rvcy5sZW5ndGh9PC9wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPllvdSBoYXZlIG5vdGhpbmcgaW4geW91ciB0b2RvIGxpc3Q8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoZWNrYm94IHtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpQnV0dG9ucyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGhlaWdodDogNSU7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjZWRpdFRvZG9JbnB1dCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNjcmVhdGVOZXdCdXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUlO1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2NyZWF0ZU5ld0J1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUlO1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW1zMSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAjYWxlcnRQbGFjZWhvbGRlciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAjdG9kb0lucHV0IHtcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgI3RvRG9QbGFjZWhvbGRlciB7XG4gICAgICAgICAgcGFkZGluZzogNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAjZWRpdFRvZG9JbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2hlY2tib3gge1xuICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtczEge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgI2NyZWF0ZU5ld0J1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAjY3JlYXRlTmV3QnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZlMGQwO1xuICAgICAgICAgIHBhZGRpbmc6IDEuMnJlbTtcbiAgICAgICAgfVxuICAgICAgICAubGlCdXR0b25zIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5hZGRlZFRvZG9UZXh0IHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiNjU4MTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2hlYWRlciB7XG4gICAgICAgICAgICBjb2xvcjogIzczYjBiNDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzIuNSUgMzUlIDMyLjUlO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDFyZW1cbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0b1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\dewal\\\\OneDrive\\\\Desktop\\\\toDoLis\\\\tryagain\\\\developerstew\\\\pages\\\\index.js */"));
}

_s(Home, "Gw0GowXYmy4BcmUDHkgVROwdA0w=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidG9kb3MiLCJzZXRUb2RvIiwiYWxlcnQiLCJzZXRBbGVydCIsImlucHV0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVG9kbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJsYWJlbCIsImN1cnJlbnQiLCJpZCIsIm5hbm9pZCIsInRpdGxlIiwiY29tcGxldGVkIiwiZWRpdCIsInZhbHVlIiwicmVtb3ZlVG9kbyIsImZpbHRlciIsInRvZG8iLCJzZXRUb2RvRWRpdFN0YXR1cyIsIm1hcCIsImVkaXRUb2RvIiwiY29uc29sZSIsImxvZyIsInNldEludGVydmFsIiwidG9kb0NvbXBsZXRlZFN0YXR1cyIsInRhcmdldCIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDLEVBQUQsQ0FEWDtBQUFBLE1BQ3RCQyxRQURzQjtBQUFBLE1BQ1pDLFdBRFk7O0FBQUEsbUJBRUpGLHNEQUFRLENBQUMsRUFBRCxDQUZKO0FBQUEsTUFFdEJHLEtBRnNCO0FBQUEsTUFFZkMsT0FGZTs7QUFBQSxtQkFHSEosc0RBQVEsQ0FBQyxFQUFELENBSEw7QUFBQSxNQUd0QkssS0FIc0I7QUFBQSxNQUdmQyxRQUhlOztBQUs3QixNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLEVBQXZCLENBTDZCLENBTzdCOztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxJQUFJLEdBQUdDLFlBQVks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LENBWEYsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLGFBQU8sRUFBRSxpQkFBQ1IsQ0FBRDtBQUFBLGVBQU9lLGlCQUFpQixDQUFDRCxJQUFJLENBQUNSLEVBQU4sRUFBVVEsSUFBSSxDQUFDTixLQUFmLENBQXhCO0FBQUEsT0FEWDtBQUFBLDBDQUVZLFlBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBT0U7QUFDRSxhQUFPLEVBQUUsaUJBQUNSLENBQUQ7QUFBQSxlQUFPWSxVQUFVLENBQUNFLElBQUksQ0FBQ1IsRUFBTixFQUFVUSxJQUFJLENBQUNOLEtBQWYsQ0FBakI7QUFBQSxPQURYO0FBQUEsMENBRVksWUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBUEYsQ0FkRixDQURGO0FBK0JELEdBdkVBLENBREgsQ0FERixFQTBFUSxHQTFFUixFQTJFR3ZCLEtBQUssQ0FBQ2lCLE1BQU4sR0FBZSxDQUFmLEdBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFxQmpCLEtBQUssQ0FBQ2lCLE1BQTNCLENBREQsR0FHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBOUVKLENBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsKzVaQURGO0FBZ1BEOztHQWhVdUJyQixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yZTc5OWQyZjc4Zjk4NzM2N2M3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYWxlcnQsIHNldEFsZXJ0XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIC8vIENoZWNrcyB0byBzZWUgaWYgYW55IHRvZG9zIGhhdmUgYmVlbiBzYXZlZCBhbmQgbG9hZHMgdGhlbVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgc2V0VG9kbyhKU09OLnBhcnNlKGRhdGEpKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgLy8gU2F2ZXMgYW55IGNoYW5nZXMgbWFkZSB3aXRoIHRvZG9zIHRvIGxvY2FzdG9yYWdlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkVG9kbyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChmb3JtRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEFsZXJ0KCdZb3UgY2Fubm90IHNhdmUgZW1wdHkgdG9kbyEnKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEFsZXJ0KCcnKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYWJlbCA9IGlucHV0UmVmLmN1cnJlbnQ7XG4gICAgICBzZXRUb2RvKFtcbiAgICAgICAgLi4udG9kb3MsXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogbmFub2lkKDYpLFxuICAgICAgICAgIHRpdGxlOiBmb3JtRGF0YSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgXSk7XG4gICAgICBzZXRGb3JtRGF0YSgnJyk7XG4gICAgICBsYWJlbC52YWx1ZSA9ICcnO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAoaWQpID0+IHtcbiAgICBzZXRUb2RvKHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gaWQpKTtcbiAgICBzZXRBbGVydCgnU3VjY2Vzc2Z1bGx5IFJlbW92ZWQhJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRBbGVydCgnJyk7XG4gICAgfSwgMzAwMCk7XG4gIH07XG5cbiAgLy8gRWRpdCB3aGV0aGVyIHRvIGRvIGlzIGluIGVkaXQgbW9kZSBvciBub3QgdG8gYWZmZWN0IGhvdyB0b2RvIGdldHMgZGlzcGxheWVkXG4gIGNvbnN0IHNldFRvZG9FZGl0U3RhdHVzID0gKGlkLCB0aXRsZSkgPT4ge1xuICAgIHNldFRvZG8oXG4gICAgICB0b2Rvcy5tYXAoKHRvZG8pID0+ICh0b2RvLmlkID09PSBpZCA/IHsgLi4udG9kbywgZWRpdDogdHJ1ZSB9IDogdG9kbykpXG4gICAgKTtcbiAgICBzZXRGb3JtRGF0YSh0aXRsZSk7XG4gIH07XG4gIC8vIEFjdHVhbCBlZGl0aW5nIG9mIHRvZG9cbiAgY29uc3QgZWRpdFRvZG8gPSAoaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YS5sZW5ndGgpO1xuICAgIGlmIChmb3JtRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEFsZXJ0KCdZb3UgY2Fubm90IHNhdmUgZW1wdHkgdG9kbyEnKTtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0QWxlcnQoJycpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRvZG8oXG4gICAgICAgIHRvZG9zLm1hcCgodG9kbykgPT5cbiAgICAgICAgICB0b2RvLmlkID09PSBpZCA/IHsgLi4udG9kbywgdGl0bGU6IGZvcm1EYXRhLCBlZGl0OiBmYWxzZSB9IDogdG9kb1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgLy8gQWxsb3dzIGNoYW5naW5nIHRvZG8gdG8gY29tcGxldGVkIG9yIG5vdFxuICBjb25zdCB0b2RvQ29tcGxldGVkU3RhdHVzID0gKGlkLCBjb21wbGV0ZWQpID0+IHtcbiAgICBzZXRUb2RvKFxuICAgICAgdG9kb3MubWFwKCh0b2RvKSA9PiAodG9kby5pZCA9PT0gaWQgPyB7IC4uLnRvZG8sIGNvbXBsZXRlZCB9IDogdG9kbykpXG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgIDxoMSBpZD0naGVhZGVyJz5UbyBEbyBMaXN0PC9oMT5cbiAgICAgIDxmb3JtIGFjdGlvbj0nc3VibWl0JyBjbGFzc05hbWU9J2NyZWF0ZVRvRG8nIG9uU3VibWl0PXsoZSkgPT4gYWRkVG9kbyhlKX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPSd0b2RvSW5wdXQnXG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBuZXcgVG8gZG8nXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gaWQ9J2NyZWF0ZU5ld0J1dHRvbicgdHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICBDcmVhdGUgbmV3XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPHAgaWQ9J2FsZXJ0UGxhY2Vob2xkZXInPnthbGVydH08L3A+XG4gICAgICA8ZGl2IGlkPSd0b0RvUGxhY2Vob2xkZXInPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8uZWRpdCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjaGVja2JveCAnXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0nY2hlY2tib3gnXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbXBsZXRlZFN0YXR1cyh0b2RvLmlkLCB0YXJnZXQuY2hlY2tlZClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdlZGl0VG9kb0lucHV0J1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZWRpdFRvZG8odG9kby5pZCwgZm9ybURhdGEpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGlCdXR0b25zICdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gcmVtb3ZlVG9kbyh0b2RvLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpQnV0dG9ucyAnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtczEnPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2hlY2tib3ggJ1xuICAgICAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29tcGxldGVkU3RhdHVzKHRvZG8uaWQsIHRhcmdldC5jaGVja2VkKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2FkZGVkVG9kb1RleHQnPnt0b2RvLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0VG9kb0VkaXRTdGF0dXModG9kby5pZCwgdG9kby50aXRsZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGlCdXR0b25zICdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiByZW1vdmVUb2RvKHRvZG8uaWQsIHRvZG8udGl0bGUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpQnV0dG9ucyAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD57JyAnfVxuICAgICAgICB7dG9kb3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICA8cD5OdW1iZXIgb2YgdG9kb3M6IHt0b2Rvcy5sZW5ndGh9PC9wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPllvdSBoYXZlIG5vdGhpbmcgaW4geW91ciB0b2RvIGxpc3Q8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoZWNrYm94IHtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpQnV0dG9ucyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGhlaWdodDogNSU7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjZWRpdFRvZG9JbnB1dCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNjcmVhdGVOZXdCdXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUlO1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2NyZWF0ZU5ld0J1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUlO1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW1zMSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAjYWxlcnRQbGFjZWhvbGRlciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAjdG9kb0lucHV0IHtcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgI3RvRG9QbGFjZWhvbGRlciB7XG4gICAgICAgICAgcGFkZGluZzogNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAjZWRpdFRvZG9JbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2hlY2tib3gge1xuICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtczEge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgI2NyZWF0ZU5ld0J1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAjY3JlYXRlTmV3QnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZlMGQwO1xuICAgICAgICAgIHBhZGRpbmc6IDEuMnJlbTtcbiAgICAgICAgfVxuICAgICAgICAubGlCdXR0b25zIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5hZGRlZFRvZG9UZXh0IHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiNjU4MTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2hlYWRlciB7XG4gICAgICAgICAgICBjb2xvcjogIzczYjBiNDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzIuNSUgMzUlIDMyLjUlO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDFyZW1cbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0b1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==