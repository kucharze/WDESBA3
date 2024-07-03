const purchaseItems = () => {
  console.log("Purchasing items");
  let shoppingList = document.getElementById("shoppingList").children;
  console.log(shoppingList);
  let total = 0;

  if (shoppingList.length === 0) {
    alert("Shopping list is empty");
  } else {
    for (let i = 0; i < shoppingList.length; i++) {
      total += 2;
    }
    console.log("Your total is $", total);

    let tot = document.querySelector(".total");
    tot.innerHTML = "Your total is $" + total;
  }
};

const addToShoppingList = (item) => {
  console.log("Adding", item);
  if (item === undefined) {
    alert("Error adding item.  Please click on a picture");
    return;
  }
  let listItem = document.createElement("li");
  let shoppingList = document.getElementById("shoppingList");

  listItem.textContent = item;
  shoppingList.appendChild(listItem);
};

const removeFromList = () => {
  let shoppingList = document.getElementById("shoppingList");
  if (shoppingList.children.length === 0) {
    alert("Shopping list is empty");
    return;
  }

  shoppingList.removeChild(shoppingList.lastChild);
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
}, 200);

document.querySelector(".makePurchase").addEventListener("click", () => {
  console.log("Purchasing");
  purchaseItems();
});
