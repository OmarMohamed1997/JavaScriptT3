const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
console.log(children);
/////////////////////////////////////////////////
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 1);
console.log(fruits);
/////////////////////////////////////////////////
const ages = [32, 33, 20, 40];

console.log(ages.every(checkAge));

function checkAge(age) {
  return age > 18;
}
//////////////////////////////////////////////////
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.fill("Kiwi");
console.log(fruits2);
//////////////////////////////////////////////////
var fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.reverse();
console.log(fruits3);
/////////////////////////////////////////////////////
const points = [40, 100, 1,  25, 10];
points.sort();
console.log(points);
/////////////////////////////////////////////////////
const ages2 = [3, 10, 25, 20];

var x =ages2.findIndex(checkAge);
console.log(x);
function checkAge(age) {
  return age > 18;
}
/////////////////////////////////////////////
const ages3 = [32, 33, 16, 40];
const result = ages3.filter(checkAdult);
console.log(result);
function checkAdult(age) {
  return age >= 18;
}
///////////////////////////////////////////
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits4.join(" and ");
console.log(text);
//////////////////////////////////////////////
const fruits5 = ["Apple", "Orange", "Apple", "Mango"];
let index = fruits5.lastIndexOf("Apple");
console.log(index);