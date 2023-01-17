const { assertEquals } = require(`../testing.framework`);
const { assertTrue } = require("../testing.framework");
const { Basket } = require("../src/basket");
const { Item } = require("../src/item")


let expected, actual, result;


console.log(`1:1 add() add AN item to the basket`);
//Arrange
const basket = new Basket();
let item = { id: Item};
expected = 1;

//Act
basket.add(item);
actual = basket.basketItems.length;

//Assert
result = assertEquals(expected, actual);
console.log(`1:1 ${result}`);

//Clean-up
actual = undefined;
expected = undefined;
result = undefined;


