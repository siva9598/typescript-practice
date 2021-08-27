var doSomething = function () {
    console.log("doSomething");
};
var foo = 'foo'; // when we use any we will not get any typescript errors for this variable, its not recommended
console.log(foo.bar());
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
var s2 = vUnknown; // ts doesnt allow assigning unknown types to any other type
console.log(vAny.foo()); //works
console.log(vUnknown.foo()); // ts throws error as vUnknown does have a value foo
var pageNumber = "1";
var numbericPageNumber = pageNumber; // to convert one type to another we need to first make it into unknown
