let totalPrice = 0;

const purchaseItems = () => {
  console.log("Purchasing items");
  let shoppingList = document.getElementById("shoppingList");
  console.log(shoppingList);
  let total = 0;

  if (shoppingList.children.length === 0) {
    window.alert("Shopping list is empty");
  } else {
    for (let i = 0; i < shoppingList.children.length; i++) {
      total += 2;
    }
    console.log("Your total is $", total);
    totalPrice = total;

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
    window.alert("Error adding item.  Please click on a picture");
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

  let amount = window.prompt("Enter amount");
  console.log(typeof amount);

  if (amount < totalPrice) {
    window.alert("Not enough money");
    return;
  } else {
    while (shoppingList.lastChild) {
      shoppingList.removeChild(shoppingList.lastChild);
    }
    buy.style.display = "none";

    tot.style.backgroundColor = "blue";
    tot.style.color = "white";
    tot.style.fontSize = "30px";

    tot.innerHTML = "Thank you for shopping!  Have a good day!";
  }
};

const removeFromList = () => {
  let shoppingList = document.getElementById("shoppingList");
  if (shoppingList.children.length === 0) {
    window.alert("Shopping list is empty");
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
    let userForm = document.getElementById("Signup");
    console.log("Submiting information");
    e.preventDefault();
    // hello(e);

    if (userForm.elements["email"].value === "") {
      window.alert("Email needs a value");
      return;
    }

    if (userForm.elements["password"].value === "") {
      window.window.alert("Password needs a value");
      return;
    }

    if (
      userForm.elements["Confirm"].value !== userForm.elements["password"].value
    ) {
      window.alert("Passwords do not match");
      return;
    }

    localStorage.setItem("email", userForm.elements["email"].value);
    localStorage.setItem("password", userForm.elements["password"].value);
    alert("Successful login");

    let signin = document.getElementById("signedin");

    let copy = signin.cloneNode(true);
    copy.innerHTML = "Signed in: Yes";
    copy.setAttribute("Signedin", "True");

    let status = document.querySelector(".loginstatus");
    while (status.lastChild) {
      status.removeChild(status.lastChild);
    }
    status.appendChild(copy);
  });

  document.getElementById("Login").addEventListener("submit", (e) => {
    e.preventDefault();
    let Loginform = document.getElementById("Login");

    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");

    console.log(email);
    console.log(password);

    if (Loginform.elements["email"].value !== email) {
      alert("Emails do not match");
      return;
    }

    if (Loginform.elements["password"].value !== password) {
      alert("Passwords do not match");
      return;
    }

    alert("Successfully logged in ");
    let signin = document.getElementById("signedin");

    let copy = signin.cloneNode(true);
    copy.innerHTML = "Signed in: Yes";
    copy.setAttribute("Signedin", "True");

    let status = document.querySelector(".loginstatus");
    console.log(status.children);
    while (status.lastChild) {
      status.removeChild(status.lastChild);
    }

    status.appendChild(copy);
  });

  document.querySelector(".pay").addEventListener("click", purchase);
}, 200);
