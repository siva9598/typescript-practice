interface User{
    name: string;
    age?: number; // age is not mandatory
    getMessage(): string;
}

const user1 : User = {
    name: "monster",
    age: 100,
    getMessage() {
        return "Hello" + name;
    }
}
const user2 : User = {
    name: "mass",
    getMessage() {
        return "Hello" + name;
    }
}
console.log(user1.getMessage())