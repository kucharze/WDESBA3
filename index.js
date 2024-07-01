const purchaseItems = () => {
  console.log("Purchasing items");
};

const addToShoppingList = (item) => {
  console.log("Adding", item);
  let listItem = document.createElement("li");
  let shoppingList = document.getElementById("shoppingList");

  listItem.textContent = item;
  shoppingList.appendChild(listItem);
};

let tables = document.getElementsByTagName("td");
console.log(tables);

setTimeout(() => {
  for (let i = 0; i < 12; i++) {
    console.log("Adding event listener");
    tables[i].addEventListener("click", (e) => {
      console.log("Working", e.target.classList[0]);
      addToShoppingList(e.target.classList[0]);
    });
  }
}, 500);
