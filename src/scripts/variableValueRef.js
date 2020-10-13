// Javascript has 5 data types that are passed by value: Boolean, null, undefined, String, and Number. We’ll call these primitive types.
// Javascript has 3 data types that are passed by reference: Array, Function, and Object. These are all technically Objects, so we’ll refer to them collectively as Objects.

// Primitive data types
var isValid = true;

var nothing = null;

var notDefined = undefined;

var name = "Michael Jeffrey Jordan";

var age = 57;

// Reference
var welcome = {
  en: "Hello",
  it: "Ciao",
  de: "Hallo",
  es: "Hola",
  pt: "Olà"
};

var copy = obj;

copy.it = "Oi";
console.log(welcome.pt); // Oi
console.log(copy.pt); // Oi

var fruits = [];

fruits.push("Apple");
fruits.push("Banana");
fruits.push("Melon");
fruits.push("Strawberry");

console.log(fruits);

fruits[2] = "Peach";

console.log(fruits);
