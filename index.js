let userForm = document.getElementById("Signup");

const purchaseItems = () => {
  console.log("Purchasing items");
  let shoppingList = document.getElementById("shoppingList");
  console.log(shoppingList);
  let total = 0;

  if (shoppingList.children.length === 0) {
    alert("Shopping list is empty");
  } else {
    for (let i = 0; i < shoppingList.children.length; i++) {
      total += 2;
    }
    console.log("Your total is $", total);

    let tot = document.querySelector(".total");
    tot.innerHTML = "Your total is $" + total;
    while (shoppingList.lastChild) {
      shoppingList.removeChild(shoppingList.lastChild);
    }
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

function hello(e) {
  e.preventDefault();
  console.log("Submiting information");
}

setTimeout(() => {
  for (let i = 0; i < 12; i++) {
    console.log("Adding event listener");
    tables[i].addEventListener("click", (e) => {
      console.log("Working", e.target.classList[0]);
      addToShoppingList(e.target.classList[0]);
    });
  }

  document.querySelector(".makePurchase").addEventListener("click", () => {
    console.log("Purchasing");
    purchaseItems();
  });

  console.log(document.getElementById("Signup"));
  document.getElementById("Signup").addEventListener("submit", (e) => {
    console.log("Submiting information");
    hello(e);
  });
}, 200);
