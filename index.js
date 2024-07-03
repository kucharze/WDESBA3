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
    tot.style.backgroundColor = "lightgreen";
    tot.style.color = "black";
    tot.style.fontSize = "20px";

    let buy = document.querySelector(".pay");
    tot.innerHTML = "Your total is $" + total;

    buy.style.display = "block";
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

const purchase = () => {
  let shoppingList = document.getElementById("shoppingList");
  let buy = document.querySelector(".pay");
  let tot = document.querySelector(".total");

  while (shoppingList.lastChild) {
    shoppingList.removeChild(shoppingList.lastChild);
  }
  buy.style.display = "none";

  tot.style.backgroundColor = "blue";
  tot.style.color = "white";
  tot.style.fontSize = "30px";

  tot.innerHTML = "Thank you for shopping!  Have a good day!";
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

  document.querySelector(".makePurchase").addEventListener("click", () => {
    console.log("Purchasing");
    purchaseItems();
  });

  document.getElementById("Signup").addEventListener("submit", (e) => {
    console.log("Submiting information");
    e.preventDefault();
    hello(e);
  });

  document.querySelector(".pay").addEventListener("click", purchase);
}, 200);
