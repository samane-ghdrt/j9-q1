//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

let array1 = ['hello Jo', 'fish', 'birmingham', 'periodic table', 'phone'];
//!  Answer:
let arrnw = array1.map(word=>word.length>6);
console.log(arrnw.every(word=>word.length>10));

