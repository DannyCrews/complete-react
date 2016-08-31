var names = ['Dan', 'Cindy', 'Luke', 'Will'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + "!";
// console.log(returnMe('Dan'));

var person = {
  name: "dan",
  greet() {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

person.greet();
