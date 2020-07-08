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
    className: "jsx-3180421572" + " " + 'container',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx("h1", {
    id: "header",
    className: "jsx-3180421572",
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
    className: "jsx-3180421572" + " " + 'createToDo',
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
    className: "jsx-3180421572",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }), __jsx("button", {
    id: "createNewButton",
    type: "submit",
    className: "jsx-3180421572",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Create new")), __jsx("p", {
    id: "alertPlaceholder",
    className: "jsx-3180421572",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, alert), __jsx("div", {
    id: "toDoPlaceholder",
    className: "jsx-3180421572",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "jsx-3180421572",
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
        className: "jsx-3180421572",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }
      }, __jsx("input", {
        type: "text",
        value: formData,
        onChange: function onChange(e) {
          return setFormData(e.target.value);
        },
        id: "editTodoInput",
        className: "jsx-3180421572",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 19
        }
      }), __jsx("div", {
        className: "jsx-3180421572",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 19
        }
      }, __jsx("button", {
        onClick: function onClick(e) {
          return editTodo(todo.id, formData);
        },
        className: "jsx-3180421572" + " " + 'liButtons ',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }
      }, "Save"), __jsx("button", {
        onClick: function onClick(e) {
          return removeTodo(todo.id);
        },
        className: "jsx-3180421572" + " " + 'liButtons ',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }
      }, "X")));
    }

    return __jsx("li", {
      key: todo.id,
      className: "jsx-3180421572",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "jsx-3180421572",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }
    }, __jsx("input", {
      type: "checkbox",
      checked: todo.completed,
      onChange: function onChange(_ref) {
        var target = _ref.target;
        return todoCompletedStatus(todo.id, target.checked);
      },
      className: "jsx-3180421572" + " " + 'checkbox ',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 19
      }
    }), todo.title), __jsx("div", {
      className: "jsx-3180421572",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }
    }, __jsx("button", {
      onClick: function onClick(e) {
        return setTodoEditStatus(todo.id, todo.title);
      },
      className: "jsx-3180421572" + " " + 'liButtons ',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 19
      }
    }, "Edit"), __jsx("button", {
      onClick: function onClick(e) {
        return removeTodo(todo.id, todo.title);
      },
      className: "jsx-3180421572" + " " + 'liButtons ',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 19
      }
    }, "X")));
  })), ' ', todos.length > 0 ? __jsx("p", {
    className: "jsx-3180421572",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, "Number of todos: ", todos.length) : __jsx("p", {
    className: "jsx-3180421572",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, "You have nothing in your todo list")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "150061006",
    __self: this
  }, "@media screen and (max-width:500px){li.jsx-3180421572{font-size:1rem;padding:1px;display:grid;grid-template-columns:40% auto;grid-gap:1rem;}ul.jsx-3180421572{list-style:none;padding:0px;width:100%;display:grid;grid-template-columns:auto grid-gap:10px;}p.jsx-3180421572{font-size:1rem;color:white;}.checkbox.jsx-3180421572{height:1rem;vertical-align:middle;}#editCheckbox.jsx-3180421572{height:1rem;vertical-align:middle;}.liButtons.jsx-3180421572{background-color:white;}#editTodoInput.jsx-3180421572{width:20%;}#createNewButton.jsx-3180421572{background-color:white;height:10px;width:20px;}}#alertPlaceholder.jsx-3180421572{color:red;}#todoInput.jsx-3180421572{padding:1.5rem;border-radius:10px;display:block;margin:0 auto;width:60%;margin-bottom:1rem;}#toDoPlaceholder.jsx-3180421572{padding:5rem;}#editTodoInput.jsx-3180421572{padding:1rem;width:40%;margin-left:30%;}.checkbox.jsx-3180421572{width:2rem;height:2rem;vertical-align:middle;}#editCheckbox.jsx-3180421572{width:2rem;height:2rem;vertical-align:middle;}#createNewButton.jsx-3180421572{background-color:white;padding:1rem;}#createNewButton.jsx-3180421572:hover{background-color:#3FE0D0;padding:1.2rem;}.liButtons.jsx-3180421572{background-color:white;padding:0.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGV3YWxcXE9uZURyaXZlXFxEZXNrdG9wXFx0b0RvTGlzXFx0cnlhZ2FpblxcZGV2ZWxvcGVyc3Rld1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdLa0IsQUFJMEIsQUFRQyxBQVNELEFBS0gsQUFNQSxBQUlXLEFBR2IsQUFHYSxBQU81QixBQUVvQixBQVFGLEFBR0EsQUFLRixBQU1BLEFBS1ksQUFJRSxBQUlGLFVBOUN6QixBQVNGLENBbUJnQixBQU1BLENBL0NVLEFBTUEsQ0EyQnhCLEFBR1ksRUExREUsQUFrQmYsQUE2QnNCLENBdkNQLE9Bd0JkLEFBTWMsQUFxQkksQUFLTSxBQU1BLEFBSVQsQUFRRSxFQUpBLEVBN0VGLEFBaUJmLENBVGEsTUFjYixBQU1BLEFBbUJnQixDQVJqQixDQW1DQyxFQVFBLENBekVlLEFBa0RmLENBMURrQyxBQTZFbEMsS0FkQSxBQU1BLENBL0JBLEVBU2dCLElBckNBLFVBc0NKLFNBN0NiLENBOENzQixhQTlDckIsTUErQ0EsRUF0Q0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxkZXdhbFxcT25lRHJpdmVcXERlc2t0b3BcXHRvRG9MaXNcXHRyeWFnYWluXFxkZXZlbG9wZXJzdGV3XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgLy8gQ2hlY2tzIHRvIHNlZSBpZiBhbnkgdG9kb3MgaGF2ZSBiZWVuIHNhdmVkIGFuZCBsb2FkcyB0aGVtXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBzZXRUb2RvKEpTT04ucGFyc2UoZGF0YSkpO1xuICAgIH1cbiAgfSwgW10pO1xuICAvLyBTYXZlcyBhbnkgY2hhbmdlcyBtYWRlIHdpdGggdG9kb3MgdG8gbG9jYXN0b3JhZ2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICB9KTtcblxuICBjb25zdCBhZGRUb2RvID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGZvcm1EYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0QWxlcnQoJ1lvdSBjYW5ub3Qgc2F2ZSBlbXB0eSB0b2RvIScpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0QWxlcnQoJycpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gaW5wdXRSZWYuY3VycmVudDtcbiAgICAgIHNldFRvZG8oW1xuICAgICAgICAuLi50b2RvcyxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBuYW5vaWQoNiksXG4gICAgICAgICAgdGl0bGU6IGZvcm1EYXRhLFxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgZWRpdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICBdKTtcbiAgICAgIHNldEZvcm1EYXRhKCcnKTtcbiAgICAgIGxhYmVsLnZhbHVlID0gJyc7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVtb3ZlVG9kbyA9IChpZCkgPT4ge1xuICAgIHNldFRvZG8odG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZCkpO1xuICAgIHNldEFsZXJ0KCdTdWNjZXNzZnVsbHkgUmVtb3ZlZCEnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEFsZXJ0KCcnKTtcbiAgICB9LCAzMDAwKTtcbiAgfTtcblxuICAvLyBFZGl0IHdoZXRoZXIgdG8gZG8gaXMgaW4gZWRpdCBtb2RlIG9yIG5vdCB0byBhZmZlY3QgaG93IHRvZG8gZ2V0cyBkaXNwbGF5ZWRcbiAgY29uc3Qgc2V0VG9kb0VkaXRTdGF0dXMgPSAoaWQsIHRpdGxlKSA9PiB7XG4gICAgc2V0VG9kbyhcbiAgICAgIHRvZG9zLm1hcCgodG9kbykgPT4gKHRvZG8uaWQgPT09IGlkID8geyAuLi50b2RvLCBlZGl0OiB0cnVlIH0gOiB0b2RvKSlcbiAgICApO1xuICAgIHNldEZvcm1EYXRhKHRpdGxlKTtcbiAgfTtcbiAgLy8gQWN0dWFsIGVkaXRpbmcgb2YgdG9kb1xuICBjb25zdCBlZGl0VG9kbyA9IChpZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhLmxlbmd0aCk7XG4gICAgaWYgKGZvcm1EYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0QWxlcnQoJ1lvdSBjYW5ub3Qgc2F2ZSBlbXB0eSB0b2RvIScpO1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRBbGVydCgnJyk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VG9kbyhcbiAgICAgICAgdG9kb3MubWFwKCh0b2RvKSA9PlxuICAgICAgICAgIHRvZG8uaWQgPT09IGlkID8geyAuLi50b2RvLCB0aXRsZTogZm9ybURhdGEsIGVkaXQ6IGZhbHNlIH0gOiB0b2RvXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICAvLyBBbGxvd3MgY2hhbmdpbmcgdG9kbyB0byBjb21wbGV0ZWQgb3Igbm90XG4gIGNvbnN0IHRvZG9Db21wbGV0ZWRTdGF0dXMgPSAoaWQsIGNvbXBsZXRlZCkgPT4ge1xuICAgIHNldFRvZG8oXG4gICAgICB0b2Rvcy5tYXAoKHRvZG8pID0+ICh0b2RvLmlkID09PSBpZCA/IHsgLi4udG9kbywgY29tcGxldGVkIH0gOiB0b2RvKSlcbiAgICApO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgPGgxIGlkPSdoZWFkZXInPlRvIERvIExpc3Q8L2gxPlxuICAgICAgPGZvcm0gYWN0aW9uPSdzdWJtaXQnIGNsYXNzTmFtZT0nY3JlYXRlVG9Ebycgb25TdWJtaXQ9eyhlKSA9PiBhZGRUb2RvKGUpfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9J3RvZG9JbnB1dCdcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIG5ldyBUbyBkbydcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBpZD0nY3JlYXRlTmV3QnV0dG9uJyB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgIENyZWF0ZSBuZXdcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8cCBpZD0nYWxlcnRQbGFjZWhvbGRlcic+e2FsZXJ0fTwvcD5cbiAgICAgIDxkaXYgaWQ9J3RvRG9QbGFjZWhvbGRlcic+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9kby5lZGl0KSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17dG9kby5pZH0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9J2VkaXRUb2RvSW5wdXQnXG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGVkaXRUb2RvKHRvZG8uaWQsIGZvcm1EYXRhKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpQnV0dG9ucyAnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHJlbW92ZVRvZG8odG9kby5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsaUJ1dHRvbnMgJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2hlY2tib3ggJ1xuICAgICAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29tcGxldGVkU3RhdHVzKHRvZG8uaWQsIHRhcmdldC5jaGVja2VkKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3RvZG8udGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0VG9kb0VkaXRTdGF0dXModG9kby5pZCwgdG9kby50aXRsZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGlCdXR0b25zICdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiByZW1vdmVUb2RvKHRvZG8uaWQsIHRvZG8udGl0bGUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpQnV0dG9ucyAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD57JyAnfVxuICAgICAgICB7dG9kb3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICA8cD5OdW1iZXIgb2YgdG9kb3M6IHt0b2Rvcy5sZW5ndGh9PC9wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPllvdSBoYXZlIG5vdGhpbmcgaW4geW91ciB0b2RvIGxpc3Q8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgIGF1dG87XG4gICAgICAgICAgZ3JpZC1nYXA6IDFyZW1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG9cbiAgICAgICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgIH1cbiAgICAgICAgLmNoZWNrYm94IHtcbiAgICAgICAgIFxuICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgI2VkaXRDaGVja2JveCB7XG4gICAgICAgICBcbiAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgICAgICAubGlCdXR0b25zIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAjZWRpdFRvZG9JbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgfVxuICAgICAgICAjY3JlYXRlTmV3QnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDIwcHhcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgI2FsZXJ0UGxhY2Vob2xkZXJ7XG4gICAgICAgIGNvbG9yOiByZWRcbiAgICAgIH1cbiAgICAgICAgI3RvZG9JbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgICN0b0RvUGxhY2Vob2xkZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDVyZW07XG4gICAgICAgIH1cbiAgICAgICAgI2VkaXRUb2RvSW5wdXQge1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMzAlO1xuICAgICAgICB9XG4gICAgICAgIC5jaGVja2JveCB7XG4gICAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cblxuICAgICAgICAjZWRpdENoZWNrYm94IHtcbiAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgICAgICAjY3JlYXRlTmV3QnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgICNjcmVhdGVOZXdCdXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRkUwRDA7XG4gICAgICAgICAgcGFkZGluZzogMS4ycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5saUJ1dHRvbnMge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjY1ODE7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNoZWFkZXIge1xuICAgICAgICAgICAgY29sb3I6ICM3M2IwYjQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJSAgYXV0bztcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxcmVtXG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG9cbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\dewal\\\\OneDrive\\\\Desktop\\\\toDoLis\\\\tryagain\\\\developerstew\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2543719875",
    __self: this
  }, "body{background-color:#db6581;margin:0;padding:0;font-size:18px;font-weight:400;line-height:1.8;color:#333;font-family:sans-serif;height:100%;width:100%;position:absolute;}#header{color:#73b0b4;-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);padding:2rem;}.container{display:block;text-align:center;}p{font-size:2rem;color:white;}li{font-size:2rem;padding:2px;display:grid;grid-template-columns:60% auto;grid-gap:1rem;}ul{list-style:none;padding:0px;width:100%;display:grid;grid-template-columns:auto grid-gap:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGV3YWxcXE9uZURyaXZlXFxEZXNrdG9wXFx0b0RvTGlzXFx0cnlhZ2FpblxcZGV2ZWxvcGVyc3Rld1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RUyxBQUdzQyxBQWFYLEFBTUEsQUFJQyxBQUlBLEFBT0MsY0FwQkssQUFNSCxDQUtyQixBQUdlLENBT0EsU0FsQ0gsRUF3QlgsQUFJZSxDQU9GLElBZmIsRUFuQlksS0FtQ0csQ0FQbUIsSUEzQmpCLFFBb0NELE9BbkNFLFlBNEJuQixJQTNCbUIsVUEyQmxCLElBakJlLEVBVEYsRUFtQ2IsU0FsQ3lCLEFBU3pCLHVCQVJjLFlBQ0QsV0FDTyxrQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxkZXdhbFxcT25lRHJpdmVcXERlc2t0b3BcXHRvRG9MaXNcXHRyeWFnYWluXFxkZXZlbG9wZXJzdGV3XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgLy8gQ2hlY2tzIHRvIHNlZSBpZiBhbnkgdG9kb3MgaGF2ZSBiZWVuIHNhdmVkIGFuZCBsb2FkcyB0aGVtXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBzZXRUb2RvKEpTT04ucGFyc2UoZGF0YSkpO1xuICAgIH1cbiAgfSwgW10pO1xuICAvLyBTYXZlcyBhbnkgY2hhbmdlcyBtYWRlIHdpdGggdG9kb3MgdG8gbG9jYXN0b3JhZ2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICB9KTtcblxuICBjb25zdCBhZGRUb2RvID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGZvcm1EYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0QWxlcnQoJ1lvdSBjYW5ub3Qgc2F2ZSBlbXB0eSB0b2RvIScpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0QWxlcnQoJycpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gaW5wdXRSZWYuY3VycmVudDtcbiAgICAgIHNldFRvZG8oW1xuICAgICAgICAuLi50b2RvcyxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBuYW5vaWQoNiksXG4gICAgICAgICAgdGl0bGU6IGZvcm1EYXRhLFxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgZWRpdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICBdKTtcbiAgICAgIHNldEZvcm1EYXRhKCcnKTtcbiAgICAgIGxhYmVsLnZhbHVlID0gJyc7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVtb3ZlVG9kbyA9IChpZCkgPT4ge1xuICAgIHNldFRvZG8odG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZCkpO1xuICAgIHNldEFsZXJ0KCdTdWNjZXNzZnVsbHkgUmVtb3ZlZCEnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEFsZXJ0KCcnKTtcbiAgICB9LCAzMDAwKTtcbiAgfTtcblxuICAvLyBFZGl0IHdoZXRoZXIgdG8gZG8gaXMgaW4gZWRpdCBtb2RlIG9yIG5vdCB0byBhZmZlY3QgaG93IHRvZG8gZ2V0cyBkaXNwbGF5ZWRcbiAgY29uc3Qgc2V0VG9kb0VkaXRTdGF0dXMgPSAoaWQsIHRpdGxlKSA9PiB7XG4gICAgc2V0VG9kbyhcbiAgICAgIHRvZG9zLm1hcCgodG9kbykgPT4gKHRvZG8uaWQgPT09IGlkID8geyAuLi50b2RvLCBlZGl0OiB0cnVlIH0gOiB0b2RvKSlcbiAgICApO1xuICAgIHNldEZvcm1EYXRhKHRpdGxlKTtcbiAgfTtcbiAgLy8gQWN0dWFsIGVkaXRpbmcgb2YgdG9kb1xuICBjb25zdCBlZGl0VG9kbyA9IChpZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhLmxlbmd0aCk7XG4gICAgaWYgKGZvcm1EYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0QWxlcnQoJ1lvdSBjYW5ub3Qgc2F2ZSBlbXB0eSB0b2RvIScpO1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRBbGVydCgnJyk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VG9kbyhcbiAgICAgICAgdG9kb3MubWFwKCh0b2RvKSA9PlxuICAgICAgICAgIHRvZG8uaWQgPT09IGlkID8geyAuLi50b2RvLCB0aXRsZTogZm9ybURhdGEsIGVkaXQ6IGZhbHNlIH0gOiB0b2RvXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICAvLyBBbGxvd3MgY2hhbmdpbmcgdG9kbyB0byBjb21wbGV0ZWQgb3Igbm90XG4gIGNvbnN0IHRvZG9Db21wbGV0ZWRTdGF0dXMgPSAoaWQsIGNvbXBsZXRlZCkgPT4ge1xuICAgIHNldFRvZG8oXG4gICAgICB0b2Rvcy5tYXAoKHRvZG8pID0+ICh0b2RvLmlkID09PSBpZCA/IHsgLi4udG9kbywgY29tcGxldGVkIH0gOiB0b2RvKSlcbiAgICApO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgPGgxIGlkPSdoZWFkZXInPlRvIERvIExpc3Q8L2gxPlxuICAgICAgPGZvcm0gYWN0aW9uPSdzdWJtaXQnIGNsYXNzTmFtZT0nY3JlYXRlVG9Ebycgb25TdWJtaXQ9eyhlKSA9PiBhZGRUb2RvKGUpfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9J3RvZG9JbnB1dCdcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIG5ldyBUbyBkbydcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBpZD0nY3JlYXRlTmV3QnV0dG9uJyB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgIENyZWF0ZSBuZXdcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8cCBpZD0nYWxlcnRQbGFjZWhvbGRlcic+e2FsZXJ0fTwvcD5cbiAgICAgIDxkaXYgaWQ9J3RvRG9QbGFjZWhvbGRlcic+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9kby5lZGl0KSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17dG9kby5pZH0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9J2VkaXRUb2RvSW5wdXQnXG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGVkaXRUb2RvKHRvZG8uaWQsIGZvcm1EYXRhKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpQnV0dG9ucyAnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHJlbW92ZVRvZG8odG9kby5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsaUJ1dHRvbnMgJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2hlY2tib3ggJ1xuICAgICAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29tcGxldGVkU3RhdHVzKHRvZG8uaWQsIHRhcmdldC5jaGVja2VkKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3RvZG8udGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0VG9kb0VkaXRTdGF0dXModG9kby5pZCwgdG9kby50aXRsZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGlCdXR0b25zICdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiByZW1vdmVUb2RvKHRvZG8uaWQsIHRvZG8udGl0bGUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpQnV0dG9ucyAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD57JyAnfVxuICAgICAgICB7dG9kb3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICA8cD5OdW1iZXIgb2YgdG9kb3M6IHt0b2Rvcy5sZW5ndGh9PC9wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPllvdSBoYXZlIG5vdGhpbmcgaW4geW91ciB0b2RvIGxpc3Q8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgIGF1dG87XG4gICAgICAgICAgZ3JpZC1nYXA6IDFyZW1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG9cbiAgICAgICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgIH1cbiAgICAgICAgLmNoZWNrYm94IHtcbiAgICAgICAgIFxuICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgI2VkaXRDaGVja2JveCB7XG4gICAgICAgICBcbiAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgICAgICAubGlCdXR0b25zIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAjZWRpdFRvZG9JbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgfVxuICAgICAgICAjY3JlYXRlTmV3QnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDIwcHhcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgI2FsZXJ0UGxhY2Vob2xkZXJ7XG4gICAgICAgIGNvbG9yOiByZWRcbiAgICAgIH1cbiAgICAgICAgI3RvZG9JbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgICN0b0RvUGxhY2Vob2xkZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDVyZW07XG4gICAgICAgIH1cbiAgICAgICAgI2VkaXRUb2RvSW5wdXQge1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMzAlO1xuICAgICAgICB9XG4gICAgICAgIC5jaGVja2JveCB7XG4gICAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cblxuICAgICAgICAjZWRpdENoZWNrYm94IHtcbiAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgICAgICAjY3JlYXRlTmV3QnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgICNjcmVhdGVOZXdCdXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRkUwRDA7XG4gICAgICAgICAgcGFkZGluZzogMS4ycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5saUJ1dHRvbnMge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjY1ODE7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNoZWFkZXIge1xuICAgICAgICAgICAgY29sb3I6ICM3M2IwYjQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJSAgYXV0bztcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxcmVtXG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG9cbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\dewal\\\\OneDrive\\\\Desktop\\\\toDoLis\\\\tryagain\\\\developerstew\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidG9kb3MiLCJzZXRUb2RvIiwiYWxlcnQiLCJzZXRBbGVydCIsImlucHV0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVG9kbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJsYWJlbCIsImN1cnJlbnQiLCJpZCIsIm5hbm9pZCIsInRpdGxlIiwiY29tcGxldGVkIiwiZWRpdCIsInZhbHVlIiwicmVtb3ZlVG9kbyIsImZpbHRlciIsInRvZG8iLCJzZXRUb2RvRWRpdFN0YXR1cyIsIm1hcCIsImVkaXRUb2RvIiwiY29uc29sZSIsImxvZyIsInNldEludGVydmFsIiwidG9kb0NvbXBsZXRlZFN0YXR1cyIsInRhcmdldCIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDLEVBQUQsQ0FEWDtBQUFBLE1BQ3RCQyxRQURzQjtBQUFBLE1BQ1pDLFdBRFk7O0FBQUEsbUJBRUpGLHNEQUFRLENBQUMsRUFBRCxDQUZKO0FBQUEsTUFFdEJHLEtBRnNCO0FBQUEsTUFFZkMsT0FGZTs7QUFBQSxtQkFHSEosc0RBQVEsQ0FBQyxFQUFELENBSEw7QUFBQSxNQUd0QkssS0FIc0I7QUFBQSxNQUdmQyxRQUhlOztBQUs3QixNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLEVBQXZCLENBTDZCLENBTzdCOztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxJQUFJLEdBQUdDLFlBQVks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QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQXFCakIsS0FBSyxDQUFDaUIsTUFBM0IsQ0FERCxHQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FqRUosQ0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3NlhBREY7QUErTkQ7O0dBL1N1QnJCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjBlMjg2NDljZWU0Yjc3YTM1OTEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgLy8gQ2hlY2tzIHRvIHNlZSBpZiBhbnkgdG9kb3MgaGF2ZSBiZWVuIHNhdmVkIGFuZCBsb2FkcyB0aGVtXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBzZXRUb2RvKEpTT04ucGFyc2UoZGF0YSkpO1xuICAgIH1cbiAgfSwgW10pO1xuICAvLyBTYXZlcyBhbnkgY2hhbmdlcyBtYWRlIHdpdGggdG9kb3MgdG8gbG9jYXN0b3JhZ2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICB9KTtcblxuICBjb25zdCBhZGRUb2RvID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGZvcm1EYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0QWxlcnQoJ1lvdSBjYW5ub3Qgc2F2ZSBlbXB0eSB0b2RvIScpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0QWxlcnQoJycpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gaW5wdXRSZWYuY3VycmVudDtcbiAgICAgIHNldFRvZG8oW1xuICAgICAgICAuLi50b2RvcyxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBuYW5vaWQoNiksXG4gICAgICAgICAgdGl0bGU6IGZvcm1EYXRhLFxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgZWRpdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICBdKTtcbiAgICAgIHNldEZvcm1EYXRhKCcnKTtcbiAgICAgIGxhYmVsLnZhbHVlID0gJyc7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVtb3ZlVG9kbyA9IChpZCkgPT4ge1xuICAgIHNldFRvZG8odG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZCkpO1xuICAgIHNldEFsZXJ0KCdTdWNjZXNzZnVsbHkgUmVtb3ZlZCEnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEFsZXJ0KCcnKTtcbiAgICB9LCAzMDAwKTtcbiAgfTtcblxuICAvLyBFZGl0IHdoZXRoZXIgdG8gZG8gaXMgaW4gZWRpdCBtb2RlIG9yIG5vdCB0byBhZmZlY3QgaG93IHRvZG8gZ2V0cyBkaXNwbGF5ZWRcbiAgY29uc3Qgc2V0VG9kb0VkaXRTdGF0dXMgPSAoaWQsIHRpdGxlKSA9PiB7XG4gICAgc2V0VG9kbyhcbiAgICAgIHRvZG9zLm1hcCgodG9kbykgPT4gKHRvZG8uaWQgPT09IGlkID8geyAuLi50b2RvLCBlZGl0OiB0cnVlIH0gOiB0b2RvKSlcbiAgICApO1xuICAgIHNldEZvcm1EYXRhKHRpdGxlKTtcbiAgfTtcbiAgLy8gQWN0dWFsIGVkaXRpbmcgb2YgdG9kb1xuICBjb25zdCBlZGl0VG9kbyA9IChpZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhLmxlbmd0aCk7XG4gICAgaWYgKGZvcm1EYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0QWxlcnQoJ1lvdSBjYW5ub3Qgc2F2ZSBlbXB0eSB0b2RvIScpO1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRBbGVydCgnJyk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VG9kbyhcbiAgICAgICAgdG9kb3MubWFwKCh0b2RvKSA9PlxuICAgICAgICAgIHRvZG8uaWQgPT09IGlkID8geyAuLi50b2RvLCB0aXRsZTogZm9ybURhdGEsIGVkaXQ6IGZhbHNlIH0gOiB0b2RvXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICAvLyBBbGxvd3MgY2hhbmdpbmcgdG9kbyB0byBjb21wbGV0ZWQgb3Igbm90XG4gIGNvbnN0IHRvZG9Db21wbGV0ZWRTdGF0dXMgPSAoaWQsIGNvbXBsZXRlZCkgPT4ge1xuICAgIHNldFRvZG8oXG4gICAgICB0b2Rvcy5tYXAoKHRvZG8pID0+ICh0b2RvLmlkID09PSBpZCA/IHsgLi4udG9kbywgY29tcGxldGVkIH0gOiB0b2RvKSlcbiAgICApO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgPGgxIGlkPSdoZWFkZXInPlRvIERvIExpc3Q8L2gxPlxuICAgICAgPGZvcm0gYWN0aW9uPSdzdWJtaXQnIGNsYXNzTmFtZT0nY3JlYXRlVG9Ebycgb25TdWJtaXQ9eyhlKSA9PiBhZGRUb2RvKGUpfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9J3RvZG9JbnB1dCdcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIG5ldyBUbyBkbydcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBpZD0nY3JlYXRlTmV3QnV0dG9uJyB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgIENyZWF0ZSBuZXdcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8cCBpZD0nYWxlcnRQbGFjZWhvbGRlcic+e2FsZXJ0fTwvcD5cbiAgICAgIDxkaXYgaWQ9J3RvRG9QbGFjZWhvbGRlcic+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9kby5lZGl0KSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17dG9kby5pZH0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9J2VkaXRUb2RvSW5wdXQnXG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGVkaXRUb2RvKHRvZG8uaWQsIGZvcm1EYXRhKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpQnV0dG9ucyAnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHJlbW92ZVRvZG8odG9kby5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsaUJ1dHRvbnMgJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2hlY2tib3ggJ1xuICAgICAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29tcGxldGVkU3RhdHVzKHRvZG8uaWQsIHRhcmdldC5jaGVja2VkKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3RvZG8udGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0VG9kb0VkaXRTdGF0dXModG9kby5pZCwgdG9kby50aXRsZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGlCdXR0b25zICdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiByZW1vdmVUb2RvKHRvZG8uaWQsIHRvZG8udGl0bGUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpQnV0dG9ucyAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD57JyAnfVxuICAgICAgICB7dG9kb3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICA8cD5OdW1iZXIgb2YgdG9kb3M6IHt0b2Rvcy5sZW5ndGh9PC9wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPllvdSBoYXZlIG5vdGhpbmcgaW4geW91ciB0b2RvIGxpc3Q8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgIGF1dG87XG4gICAgICAgICAgZ3JpZC1nYXA6IDFyZW1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG9cbiAgICAgICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgIH1cbiAgICAgICAgLmNoZWNrYm94IHtcbiAgICAgICAgIFxuICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgI2VkaXRDaGVja2JveCB7XG4gICAgICAgICBcbiAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgICAgICAubGlCdXR0b25zIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAjZWRpdFRvZG9JbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgfVxuICAgICAgICAjY3JlYXRlTmV3QnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDIwcHhcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgI2FsZXJ0UGxhY2Vob2xkZXJ7XG4gICAgICAgIGNvbG9yOiByZWRcbiAgICAgIH1cbiAgICAgICAgI3RvZG9JbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgICN0b0RvUGxhY2Vob2xkZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDVyZW07XG4gICAgICAgIH1cbiAgICAgICAgI2VkaXRUb2RvSW5wdXQge1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMzAlO1xuICAgICAgICB9XG4gICAgICAgIC5jaGVja2JveCB7XG4gICAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cblxuICAgICAgICAjZWRpdENoZWNrYm94IHtcbiAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgICAgICAjY3JlYXRlTmV3QnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgICNjcmVhdGVOZXdCdXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRkUwRDA7XG4gICAgICAgICAgcGFkZGluZzogMS4ycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5saUJ1dHRvbnMge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjY1ODE7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNoZWFkZXIge1xuICAgICAgICAgICAgY29sb3I6ICM3M2IwYjQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJSAgYXV0bztcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxcmVtXG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG9cbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=