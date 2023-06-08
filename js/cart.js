const cartButtons = document.querySelectorAll(".add-to-cart");
const cartSection = document.getElementById("cart");
// console.log(cartSection);
const cartItems = [];

const cartProduct = document.createElement("div");
const productImage = document.createElement("img");
const productName = document.createElement("h3");
const productQuantity = document.createElement("input");
productQuantity.setAttribute("type", "number");
productQuantity.setAttribute("min", "1");
productQuantity.setAttribute("max", "50");
productQuantity.setAttribute("id", "quantity");
productQuantity.setAttribute("value", "1");

const productPrice = document.createElement("h4");


cartButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.textContent.toLowerCase() === "add to cart") {
      21311;

      e.target.textContent = "Added to cart";
      console.log(e);
      const item = {
        itemName: e.target.parentElement.parentElement.children[1].innerHTML,
        itemPrice:
          e.target.parentElement.parentElement.children[2].dataset.price,
        itemImage:
          e.target.parentElement.parentElement.children[0].getAttribute("src"),
      };
      cartItems.push(item);

      console.log(cartItems);

      cartItems.map(function (item) {
        productImage.setAttribute("src", item.itemImage);
        productName.textContent = item.itemName;
        productPrice.textContent = `Ksh. ${item.itemPrice}`;
      });

    }


cartProduct.appendChild(productImage);
cartProduct.appendChild(productName);
cartProduct.appendChild(productQuantity);
cartProduct.appendChild(productPrice);

cartSection.appendChild(cartProduct);


const quantity = document.getElementById("quantity");

quantity.addEventListener("change", ()=>{

  // console.log(parseInt(quantity))
  productPrice.textContent= `Ksh. ${parseInt(quantity.value) * parseInt(e.target.parentElement.parentElement.children[2].dataset.price)}`
})

console.log(document.getElementById("quantity"))
  });
});



