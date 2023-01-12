var object1 = {  
    a: 11,  
    b: 12,  
    c: 33  
  };  
  var object2 ={}; 
Object.assign(object2, object1);  

  console.log(object2); 

////////////////////////////////////////////////////////////
const person = {
    name : "omar"
  };
  const p = Object.create(person);
  console.log(p);
  /////////////////////////////////////////////////////////
const foo = { a: 1 };
const bar = { a: 1 };
console.log(Object.is(foo.a, bar.a));
/////////////////////////////////////////////////////////
const object3 = {  
    a: 'Rahul',  
    b: 0,  
    c:false  
  };  
  console.log(Object.values(object3)); 
  /////////////////////////////////////////////////////
  const object4 = {  
    a: 'Rahul',  
    b: 0,  
    c:false  
  };  
  console.log(Object.keys(object4)); 
  ///////////////////////////////////////////////////
  const obj = {
    prop: 42
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;  
  console.log(obj.prop);
  
  ////////////////////////////////////////////////////
  const arr = [
    ["0", "a"],
    ["1", "b"],
    ["2", "c"],
  ];
  const object5 = Object.fromEntries(arr);
  console.log(object5);
  //////////////////////////////////////////////////
  const object6 = {
    prop: 'exists'
  };
  
  console.log(Object.hasOwn(object6, 'prop'));
  //////////////////////////////////////////////////
  const object7 = { 10: 'arry', 21: 'barry', 23: 'carry' };  
console.log(Object.entries(object7));  
////////////////////////////////////////////////////
const object8 = {};

console.log(Object.isExtensible(object8));
object8.name="omar";
console.log(object8)

Object.preventExtensions(object8);
object8.id=5;
console.log(object8)

//////////////////////////////////////////////////
