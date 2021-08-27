interface UserInterface{
    getFullname() :string;
}
class  User implements UserInterface{
    firstname: string;
    lastname: string;
    readonly unchangeableName : string;
    static readonly maxAge = 50;

    constructor(firstname: string, lastname: string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.unchangeableName = firstname;
    }
    changeUnchangeableName() :void {
        this.unchangeableName ="foo"; //cannot change this as its declared as readonly
    }
    getFullname():string { return this.firstname + " "+ this.lastname; } // this function must be declared in this class as its present in the interface
}

const user4  = new User("Monster", "lessons");
console.log(user4.firstname);
console.log(User.maxAge);

class Admin extends User {
}
const admin = new Admin ("foo", "bar")
