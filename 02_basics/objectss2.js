//const tinderUser = new Object();

const tinderUser = {}
tinderUser.id="abc123"
tinderUser.name="alpha"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    name1 : "Bilal",
    age: 25,
    fullName: {
        first_name: "Bilal",
        last_name: "Khan"
    }

}
console.log(regularUser.name1);
console.log(regularUser.fullName.first_name);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

console.log(obj1,obj2);
//wrong 

const obj3 = Object.assign(obj1,obj2)
console.log(obj3);