const purchaseItems = () => {
  console.log("Purchasing items");
};

let tables = document.getElementsByTagName("td");
console.log(tables);

setTimeout(() => {
  for (let i = 0; i < 12; i++) {
    console.log("Adding event listener");
    tables[i].addEventListener("click", (e) => {
      console.log("Working");
    });
  }
}, 1000);

// document.getElementById("ShoppingItems").addEventListener("click", (e) => {
//   console.log("Hello");
// });
