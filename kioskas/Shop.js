class Shop {
  constructor(name, currency) {
    this.name = name;
    this.currency = currency;
    this.inventory = [];
    this.carts = [];
  }

  intro() {
    console.log(`Hi we are "${this.name}".\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.`);
  }

  items() {
    console.log(`Items for sale at "${this.name}":`);
    console.log("====================");
    for (const [index, product] of this.inventory.entries()) {
      if (product["availability"] === false) {
        console.log(
          `${index + 1}) ${
            product.productName.slice(0, 1).toUpperCase() +
            product.productName.slice(1).toLowerCase()
          } - ${(product.productPrice / 100).toFixed(2)} ${
            this.currency
          } - Sold out;`
        );
      } else {
        console.log(
          `${index + 1}) ${
            product.productName.slice(0, 1).toUpperCase() +
            product.productName.slice(1).toLowerCase()
          } - ${(product.productPrice / 100).toFixed(2)} ${this.currency} ;`
        );
      }
    }
    console.log("====================");
  }

  addItem(name, price) {
    const newProduct = {
      productName: name,
      productPrice: price,
      availability: true,
    };
    this.inventory.push(newProduct);

    console.log(
      `"${this.name}" sells ${name} for ${(price / 100).toFixed(2)} ${
        this.currency
      } now!`
    );
  }

  updatePrice(name, price) {
    for (const product of this.inventory) {
      if (product.productName === name) {
        product.productPrice = price;
      }
    }
  }

  createCart(name) {
    const newCart = {
      owner: name,
      items: [],
      status: "Unpaid",
    };
    this.carts.push(newCart);
    console.log(`${name} have an open cart at "${this.name}"`);
  }

  addItemToCart(owner, productID, amount) {
    for (const cart of this.carts) {
      if (cart.owner === owner && cart["status"] === "Paid") {
        return console.log("You can not add items to already paid cart!");
      }
    }
    for (const [index, product] of this.inventory.entries()) {
      if (index === productID - 1 && product.availability === false) {
        return console.log("Item is out of stock");
      }
    }
    let productOrder = { id: productID, count: amount };
    for (const cart of this.carts) {
      if (cart.owner === owner) {
        cart.items.push(productOrder);
      }
    }
  }

  order(owner) {
    for (const cart of this.carts) {
      if (cart.owner === owner) {
        console.log(cart);
      }
    }
  }

  orderPrice(owner) {
    let cartValue = 0;
    for (const cart of this.carts) {
      if (cart.owner === owner) {
        for (const item of cart.items) {
          cartValue += this.inventory[item.id - 1].productPrice * item.count;
        }
        cart["totalToPay"] = cartValue;
      }
    }

    console.log(
      `${owner} order: ${(cartValue / 100).toFixed(2)} ${this.currency}.`
    );
  }

  removeItem(item) {
    for (const product of this.inventory) {
      if (product.productName === item) {
        product["availability"] = false;
      }
    }
  }

  pay(owner, money) {
    for (const cart of this.carts) {
      if (cart.owner === owner && cart.totalToPay > money) {
        return console.log("Need more money!");
      }
      if (cart.owner === owner && cart.totalToPay < money) {
        const change = money - cart.totalToPay;
        cart["status"] = "Paid";
        return console.log(
          `Here is your ${(change / 100).toFixed(2)} ${
            this.currency
          } change!\nThank you for purchasing at "${this.name}"!`
        );
      }
      if (cart.owner === owner && cart.totalToPay === money) {
        cart["status"] = "Paid";
        return console.log(`Thank you for purchasing at "${this.name}"!`);
      }
    }
  }

  shopSummary() {
    let itemsSold = 0;
    let ordersCompleted = 0;
    let ordersInProgress = 0;
    let profit = 0;
    let possibleProfit = 0;
    for (const cart of this.carts) {
      if (cart["status"] === "Paid") {
        for (const item of cart.items) {
          itemsSold += item.count;
        }
        profit += cart["totalToPay"];
        ordersCompleted++;
      } else {
        possibleProfit += cart["totalToPay"];
        ordersInProgress++;
      }
    }
    console.log(`Summary for the "${this.name}"`);
    console.log("====================");
    console.log("Items sold:", itemsSold);
    console.log("Orders completed:", ordersCompleted);
    console.log("Orders in progress:", ordersInProgress);
    console.log(`Profit: ${(profit / 100).toFixed(2)} ${this.currency}`);
    console.log(`Possible profit: ${(possibleProfit / 100).toFixed(2)} ${this.currency}`);
    console.log("====================");
  }
}
export { Shop };
