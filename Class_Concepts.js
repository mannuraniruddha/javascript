// const user1 = {
//     firstName: "Aniruddha",
//     lastName: "Mannur",
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(user1.firstName);
// console.log(user1.lastName);
// console.log(user1.fullName());

// const user2 = {
//     firstName: "Shruti",
//     lastName: "Archak",
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(user2.firstName);
// console.log(user2.lastName);
// console.log(user2.fullName());


class User {

    // special method that will be called when we create an instance
    // PLEASE NOTE : In JavaScript, Method Overloading is NOT possible at all.
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // constructor (firstName, lastName, age){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    // }

    static isIndianFamily() {
        return true;
    }

    getFullName() {
        // console.log("This is a parent method");
        return this.fullName = `${this.firstName} ${this.lastName}`
    }

    // In JS, Only Public and Private modifiers are there and there is NO PROTECTED modifier yet.

    // To make this method PRIVATE, add # 
    // modifyName(value){
    #modifyName(value) {
        return `${value[0].toUpperCase()}${value.slice(1)}`
    }

    // understand Setterand Getter methods
    set firstName(value) {
        //this._firstName = `${value[0].toUpperCase()}${value.slice(1)}`;
        // this._firstName = this.modifyName(value);
        this._firstName = this.#modifyName(value);
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(value) {
        // this._lastName = `${value[0].toUpperCase()}${value.slice(1)}`;
        //this._lastName = this.modifyName(value);
        this._lastName = this.#modifyName(value);
    }

    get lastName() {
        return this._lastName;
    }

}


class SuperUser extends User {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }

    selectFamily() {
        return ["Shruti", "Ankush"];
    }

    getFullName() {
        // this.fullN = super.getFullName();
        // return "Hello from SuperUSer: "+ `${this.fullN}`;
        return "Hello from SuperUSer: " + super.getFullName();
    }
}


const user1 = new User("ankush", "mannur");
const user2 = new User("shruti", "archak");

// Accessing Static methods won't need any Object
console.log(User.isIndianFamily());

console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.getFullName());

console.log(user2.firstName);
console.log(user2.lastName);
console.log(user2.getFullName());

const su = new SuperUser("Aniruddha", "Mannur");
console.log(su.selectFamily());

console.log(su.getFullName());

