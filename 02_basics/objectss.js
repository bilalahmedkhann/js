//Singleton created through constructors
//object.create......Constructor

//Object Literals
const sym = Symbol("key1");

const JsUser = {
    name : "Hitesh",
    age : 30,
    "broName":"Junaid",
    location : 'jaipur',
    email : 'bilal@google.com',
    isloggedIn : false,
    [sym]: "mkey1"

}

console.log(JsUser.email);
console.log(JsUser["email"])
console.log(JsUser.broName);
console.log(typeof JsUser[sym]);
console.log(typeof sym);
//ALL ARE IMPORTANT


JsUser.email = "bilal@amazon.com"
//Object.freeze(JsUser);

JsUser.email = "bilal@kungfu.com"
console.log(JsUser.email);
//OBJECT FREEZE

JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting2());





