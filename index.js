var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 cart.push({[item]: Math.floor(Math.random() * 100)});
 console.log(`${item} has been added to your cart.`);

 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");

  } else {
    var status = "In your cart, you have";

    for(var i = 0, l = cart.length; i < l; i++) {
      var key = Object.keys(cart[i]).join("");
      status +=  ` ${key} at $${cart[i][key]},`;
    }
    debugger;
    console.log(`${status.slice(0,-1)}.`);
  }
}

function total() {
  var total = 0;

  for(var i = 0, l = cart.length; i < l; i++) {
    var key = Object.keys(cart[i]);
    total += cart[i][key];
  }

  return total;
}

function removeFromCart(item) {
  var itemCart = false;

  for(var i = 0, l = cart.length; i < l; i++) {
      if (cart[i].hasOwnProperty(item)) {
        itemCart = true;
        cart = cart.slice(0,i).concat(cart.slice(i + 1))

        return cart;
      }
  }

  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
