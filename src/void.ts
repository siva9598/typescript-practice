const doSomething = () : void =>{ // this function should not return anything
    console.log("doSomething")
};
let foo :any = 'foo'; // when we use any we will not get any typescript errors for this variable, its not recommended
console.log(foo.bar()) 

let vAny : any = 10;
let vUnknown : unknown = 10;

let s1 :string = vAny;
let s2 :string = vUnknown; // ts doesnt allow assigning unknown types to any other type

console.log(vAny.foo()) //works
console.log(vUnknown.foo()) // ts throws error as vUnknown does have a value foo

let pageNumber : string = "1"; 
let numbericPageNumber : number = (pageNumber as unknown) as number; // to convert one type to another we need to first make it into unknown
