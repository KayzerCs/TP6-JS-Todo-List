// Exercice :

// document.addEventListener("DOMContentLoaded", () => {
//   const input = document.getElementById("item");
//   const form = document.querySelector("form");
//   const todoList = document.getElementById("list");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const newItemText = input.value.trim();

//     if (newItemText) {
//       addItem(newItemText);
//       input.value = "";
//     }
//   });

//   const addItem = (text) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = text;

//     listItem.addEventListener("click", () =>
//       listItem.classList.toggle("checked")
//     );
//     listItem.addEventListener("contextmenu", (e) => {
//       e.preventDefault();
//       listItem.remove();
//     });

//     todoList.appendChild(listItem);
//   };
// });

// *****************************************************************************************************

// Correctrion :

const form = document.querySelector("form");

function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
  }
}

window.addEventListener("load", getTodos);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
});
