var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.unchangeableName = firstname;
    }
    User.prototype.changeUnchangeableName = function () {
        this.unchangeableName = "foo"; //cannot change this as its declared as readonly
    };
    User.prototype.getFullname = function () { return this.firstname + " " + this.lastname; }; // this function must be declared in this class as its present in the interface
    User.maxAge = 50;
    return User;
}());
var user4 = new User("Monster", "lessons");
console.log(user4.firstname);
console.log(User.maxAge);
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(User));
var admin = new Admin("foo", "bar");
