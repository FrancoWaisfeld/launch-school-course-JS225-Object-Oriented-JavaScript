function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    setPrice(newPrice) {
      if (newPrice >= 0) {
        this.price = newPrice;
      } else {
        console.log("Invalid Price.");
      }
    },

    describe() {
      console.log(
        `=> Name: ${this.name}\n` +
        `=> ID: ${this.id}\n` +
        `=> Price: ${this.price}\n` +
        `=> Stock: ${this.stock}`
      )
    }
  }
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);
console.log(drill.describe());
