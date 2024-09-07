/*
// ItemCreator
// - validates inputs
//   SKU code:
//     - consists of first 3 letters of the item and first 2 letter of category
//     - if item name consists of two words, do not include a whitespace in the 3 letters
//   Item Name
//     - must contain 5 characters no including whitespace. can be more than 1 word
//   Category:
//     - Must consist of 5 characters min. Only 1 word
//   Quantity:
//     - must be a valid number. assume valid number is provided

// ItemManager
//   create
//     - creates a new item. Return false if not successful, return item if succesful
  update
    - provided SKU code and object containing properties. Update the properites of the
      item with the provided SKU.
  delete
    - take a SKU and delete the indicated item from the list. SKU will always be valid
  // items
  //   - property consisting of a list of all items
  inStock
    method that lists all items with quanity greater than 0
  itemsInCategory
    list all items for a category

ReportsManager
  init
    - takes ItemManager object and assigns it to the items property
  createReporter
    - take SKU and returns an object
      - returned object has one method, itemInfo. It logs to the console all
      properties of the object key value pairs (one per line).
  reportInStock
    - log to the console the item names of all the items that are in stock
    as comma seperated values.
*/
class ItemCreator {
  constructor(name, category, quantity) {
    if (this.isValidItem(name, category, quantity)) {
      this.name = name;
      this.category = category;
      this.quantity = quantity;
      this.SKU = this.generateSKU(name, category);
    } else {
      return {notValid: true};
    }
  }

  isValidItem(name, category, quantity) {
    return name.match(/\S/g).length >= 5
        && category.match(/\S/g).length >= 5
        && !(/\s/.test(category))
        && quantity !== undefined;
  }

  generateSKU(name, category) {
    let SKU = '';
    SKU += name.match(/\S/g).slice(0, 3).join('');
    SKU += category.match(/\S/g).slice(0, 2).join('');
    return SKU.toUpperCase();
  }
}

class ItemManager {
  static items = [];

  static create(name, category, quantity) {
    let newItem = new ItemCreator(name, category, quantity);
    if (newItem.notValid) {
      return false;
    } else {
      this.items.push(newItem);
      return newItem;
    }
  }

  static update(SKU, updatedItem) {
    this.items.forEach(item => {
      if (item.SKU === SKU) {
        Object.keys(updatedItem).forEach(key => {
          item[key] = updatedItem[key];
        });
      }
    });
  }

  static delete(SKU) {
    this.items.forEach((item, index) => {
      if (item.SKU === SKU) {
        this.items.splice(index, 1);
      }
    });
  }

  static inStock() {
    return this.items.filter(item => {
      return item.quantity > 0;      
    });
  }

  static itemsInCategory(category) {
    return this.items.filter(item => {
      return item.category === category;      
    });
  }
}

class ReportManager {
  static items;

  static init(itemManager) {
    this.items = itemManager;
  }

  static reportInStock() {
    this.items.inStock().forEach(item => {
      console.log(item.name);
    });
  }

  static createReporter(SKU) {
    let item = this.items.items.filter(item => item.SKU === SKU)[0];

    return {
      itemInfo() {
        Object.entries(item).forEach(([key, value]) => {
          console.log(`${key}: ${value}`);
        });
      }
    }
  }
}


ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// // logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// // returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// // logs football,kitchen pot
console.log(ItemManager.itemsInCategory('sports'));
// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10