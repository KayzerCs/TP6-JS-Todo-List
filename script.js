document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("item");
  const form = document.querySelector("form");
  const todoList = document.getElementById("list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newItemText = input.value.trim();

    if (newItemText) {
      addItem(newItemText);
      input.value = "";
    }
  });

  const addItem = (text) => {
    const listItem = document.createElement("li");
    listItem.textContent = text;

    listItem.addEventListener("click", () =>
      listItem.classList.toggle("checked")
    );
    listItem.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      listItem.remove();
    });

    todoList.appendChild(listItem);
  };
});
