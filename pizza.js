//#5
let pizzaPlace = 'Imos';
let numberOfToppings = 10;

//#6
console.log("Typeof pizzaPlace=" + typeof pizzaPlace)
console.log('Typeof numberOfToppings=' + typeof numberOfToppings
);

//#7
console.log(
  `pizzaPlace=${pizzaPlace} and it's data type is ${typeof pizzaPlace}, numberOfToppings=${numberOfToppings} and it's data type is ${typeof numberOfToppings}`
);

//#8
if (numberOfToppings<10) {
  console.log("Quality, not quantity.")
} else {
console.log('A whole lot of pizza.');
}