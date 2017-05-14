var names = ['Anthony', 'Paola', 'Loki', 'Zach', 'Jess'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunction', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => `${name}!!`;
// console.log(returnMe('Anthony'));

// var person = {
//   name: 'Anthony',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     })
//   }
// }
//
// person.greet();

function add (a, b) {
  return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

// addStatement
var addExpression = (a, b) => a + b;
console.log('addExpression', addExpression(1, 3));
console.log('addExpression', addExpression(9, 0));

// addExpression
var addStatement = (a, b) => {
  return a + b;
}
console.log('addStatement', addStatement(1, 3));
console.log('addStatement', addStatement(9, 0));
