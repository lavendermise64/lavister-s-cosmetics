const cartButtons = document.querySelectorAll(".add-to-cart");
const cartSection = document.getElementById("cart");
console.log(cartSection);
const cartItems = [];

cartButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.textContent.toLowerCase() === "add to cart") {
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
        // Create Elements

        const cartProduct = document.createElement("div");
        const productImage = document.createElement("img");
        const productName = document.createElement("h3");
        const productQuantity = document.createElement("input");
        productQuantity.setAttribute("type", "number");
        productQuantity.setAttribute("min", "1");
        productQuantity.setAttribute("max", "50");
        productQuantity.setAttribute("class", "quantity");
        productQuantity.setAttribute("value", "1");

        const productPrice = document.createElement("h4");

        productImage.setAttribute("src", item.itemImage);
        productName.textContent = item.itemName;
        productPrice.textContent = `Ksh. ${item.itemPrice}`;

        // Append Cart Items

        cartProduct.appendChild(productImage);
        cartProduct.appendChild(productName);
        cartProduct.appendChild(productQuantity);
        cartProduct.appendChild(productPrice);

        // if(cartSection.children.length>0){

        //   cartSection.removeChild(cartProduct);
        // }

        cartSection.appendChild(cartProduct);

        const quantity = document.querySelectorAll(".quantity");

        quantity.forEach((item, index) => {
          // console.log(item)
          item.addEventListener("change", () => {
            // console.log(parseInt(quantity))
            
            productPrice.textContent = `Ksh. ${
              parseInt(item.value) *
              parseInt(
                e.target.parentElement.parentElement.children[2].dataset.price
              )
            }`;
          });
        });

        // quantity.addEventListener("change", () => {
        //   // console.log(parseInt(quantity))
        //   productPrice.textContent = `Ksh. ${
        //     parseInt(quantity.value) *
        //     parseInt(
        //       e.target.parentElement.parentElement.children[2].dataset.price
        //     )
        //   }`;
        // });
      });

      e.target.textContent = "Added to cart";
      console.log(cartItems);
    }

    if (cartSection.children[0]) {
      cartSection.removeChild(cartSection.children[0]);
    } else {
      // console.log("Hello, there");
    }
  });
});

// document.addEventListener("DOMContentLoaded", () => {});
