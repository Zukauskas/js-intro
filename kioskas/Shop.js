class Shop {
  constructor(name, currency) {
    this.name = name;
    this.currency = currency;
  }

  intro() {
    console.log(
      `Hi we are "${this.name}".\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.`
    );
  }

  items() {
    console.log(`Items for sale at "${this.name}":`);
    console.log("====================");
    for (const [index, product] of inventory.entries()) {
      console.log(
        `${index + 1}) ${
          product.productName.slice(0, 1).toUpperCase() +
          product.productName.slice(1).toLowerCase()
        } - ${(product.productPrice / 100).toFixed(2)} ${this.currency};`
      );
    }
    console.log("====================");
  }

  addItem(name, price) {
    const newProduct = {
      productName: name,
      productPrice: price,
      availability: true,
    };
    inventory.push(newProduct);

    console.log(
      `"${this.name}" sells ${name} for ${(price / 100).toFixed(2)} ${
        this.currency
      } now!`
    );
  }

  updatePrice(name, price) {
    for (const product of inventory) {
      if (product.productName === name) {
        product.productPrice = price;
      }
    }
  }

  createCart(name) {
    const newCart = {
      owner: name,
      items: [],
    };
    carts.push(newCart);
    console.log(`${name} have an open cart at "${this.name}"`);
  }

  addItemToCart(owner, productID, amount) {
    let productOrder = { id: productID, count: amount };
    for (const cart of carts) {
      if (cart.owner === owner) {
        cart.items.push(productOrder);
      }
    }
  }

  order(owner) {
    for (const cart of carts) {
      if (cart.owner === owner) {
        console.log(cart);
      }
    }
  }

  orderPrice(owner) {
    let cartValue = 0;
    for (const cart of carts) {
      if (cart.owner === owner) {
        for (const item of cart.items) {
          if (inventory[item["availability"]] === true) {
            cartValue += inventory[item.id - 1].productPrice * item.count;
          } else {
            console.log(
              `Item with ID ${inventory[item.id]} is no longer available`
            );
          }
          cart["totalToPay"] = cartValue;
        }
      }

      console.log(
        `${owner} order: ${(cartValue / 100).toFixed(2)} ${this.currency}.`
      );
    }
  }
  removeItem(item) {
    for (const product of inventory) {
      if (product.productName === item) {
        product["availability"] = false;
      }
    }
  }

  pay(owner, money) {}
}
let carts = [];
let inventory = [];

export { Shop };
