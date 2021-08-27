var user1 = {
    name: "monster",
    age: 100,
    getMessage: function () {
        return "Hello" + name;
    }
};
var user2 = {
    name: "mass",
    getMessage: function () {
        return "Hello" + name;
    }
};
console.log(user1.getMessage());
