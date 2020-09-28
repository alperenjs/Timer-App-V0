const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//

function addTodo(event) {
  event.preventDefault();

  //New todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo", "color");

  //Creating li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //add to localstorage
  saveLocalTodos(todoInput.value);

  //Check Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //delete Button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i> </i>';
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  //append to html
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  console.log(item);
  //DELETE
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    deleteLocal(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
    // todo.remove();
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

//Local Storage

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteLocal(todo) {
  console.log(todo);
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    //New todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo", "color");
    //Creating li
    const newTodo = document.createElement("li");
    // const cebim = document.createElement("input");
    // cebim.value = todo;
    // todoDiv.appendChild(cebim);
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Check Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //delete Button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i> </i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    //append to html
    todoList.appendChild(todoDiv);
  });
}

///
//
//
//RIGHT SECTION TEXT
const todoInput2 = document.querySelector(".todo-input2");
const todoButton2 = document.querySelector(".todo-button2");
const todoList2 = document.querySelector(".todo-list2");
const filterOption2 = document.querySelector(".filter-todo2");

//
document.addEventListener("DOMContentLoaded", getTodos2);
todoButton2.addEventListener("click", addTodo2);
todoList2.addEventListener("click", deleteCheck2);

//

function addTodo2(event) {
  event.preventDefault();

  //New todo Div
  const todoDiv2 = document.createElement("div");
  todoDiv2.classList.add("todo", "color2");

  //Creating li
  const newTodo2 = document.createElement("li");
  newTodo2.innerText = todoInput2.value;
  newTodo2.classList.add("todo-item");
  todoDiv2.appendChild(newTodo2);

  //add to localstorage
  saveLocalTodos2(todoInput2.value);

  //Check Button
  const completedButton2 = document.createElement("button");
  completedButton2.innerHTML = '<i class="fas fa-check"></i>';
  completedButton2.classList.add("complete-btn");
  todoDiv2.appendChild(completedButton2);
  //delete Button
  const deleteButton2 = document.createElement("button");
  deleteButton2.innerHTML = '<i class="fas fa-trash"></i> </i>';
  deleteButton2.classList.add("delete-btn");
  todoDiv2.appendChild(deleteButton2);

  //append to html
  todoList2.appendChild(todoDiv2);
  todoInput2.value = "";
}

function deleteCheck2(e) {
  const item = e.target;
  console.log(item);
  //DELETE
  if (item.classList[0] === "delete-btn") {
    const todo2 = item.parentElement;
    todo2.classList.add("fall");
    deleteLocal2(todo2);
    todo2.addEventListener("transitionend", function () {
      todo2.remove();
    });
    // todo.remove();
  }

  if (item.classList[0] === "complete-btn") {
    const todo2 = item.parentElement;
    todo2.classList.toggle("completed");
  }
}

function filterTodo2(e) {
  const todos2 = todoList2.childNodes;
  todos2.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

//Local Storage

function saveLocalTodos2(todo) {
  let todos;
  if (localStorage.getItem("notes") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("notes"));
  }
  todos.push(todo);
  localStorage.setItem("notes", JSON.stringify(todos));
}

function deleteLocal2(todo) {
  console.log(todo);
  let todos;
  if (localStorage.getItem("notes") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("notes"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("notes", JSON.stringify(todos));
}

function getTodos2() {
  let todos;
  if (localStorage.getItem("notes") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("notes"));
  }
  todos.forEach(function (todo) {
    //New todo Div
    const todoDiv2 = document.createElement("div");
    todoDiv2.classList.add("todo", "color2");
    //Creating li
    const newTodo2 = document.createElement("li");
    // const cebim = document.createElement("input");
    // cebim.value = todo;
    // todoDiv.appendChild(cebim);
    newTodo2.innerText = todo;
    newTodo2.classList.add("todo-item");
    todoDiv2.appendChild(newTodo2);

    //Check Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv2.appendChild(completedButton);
    //delete Button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i> </i>';
    deleteButton.classList.add("delete-btn");
    todoDiv2.appendChild(deleteButton);

    //append to html
    todoList2.appendChild(todoDiv2);
  });
}
