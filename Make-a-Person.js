var Person = function (firstAndLast) {
  this.getFirstName = function () {
    var re = /^[a-zA-Z]+/;
    return re.exec(firstAndLast).join('');
  };
  this.getLastName = function () {
    var re = /[a-zA-Z]+$/;
    return re.exec(firstAndLast).join('');
  };
  this.getFullName = function () {
    return firstAndLast || '';
  };
  this.setFirstName = function (first) {
    var re = /^[a-zA-Z]+/;
    firstAndLast = firstAndLast.replace(re, first);
  };
  this.setLastName = function (last) {
    var re = /[a-zA-Z]+$/;
    firstAndLast = firstAndLast.replace(re, last);
  };
  this.setFullName = function (fullName) {
    firstAndLast = fullName;
  };
};
var bob = new Person('Bob Ross');
bob.getFullName();
// Object.keys(bob).length returns 6.
// bob instanceof Person returns true.
// bob.firstName returns undefined.
// bob.lastName returns undefined.
// bob.getFirstName() returns "Bob".
// bob.getLastName() returns "Ross".
// bob.getFullName() returns "Bob Ross".
// bob.getFullName() returns "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() returns "Haskell Curry" after bob.setLastName("Curry").
// bob.getFullName() returns "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName() returns "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName() returns "Curry" after bob.setFullName("Haskell Curry").