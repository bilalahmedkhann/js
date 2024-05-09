const fName = "Bilal";
const age = 18;

console.log('My name is '+ fName + ' and age is '+ age);
//old method 

console.log(`My name is ${fName} and age is ${age}`);
//both output will be same but different 

const gameName = new String ('Bilal');

// To access key value pair
console.log(gameName[2]);
// output: 1;

//To access methods/Functions 
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.toLowerCase());
//Original value not change here because String is a primitive Data Type
//Checking value of gameName
console.log(gameName);

console.log(gameName.charAt(3));

console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,3);
//In substring function only accepts positive value
console.log(newString);
//Output: Bil

const anotherNewString = gameName.slice(-5,2);
console.log(anotherNewString);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

const newString1 = new String ("     Hello     ")
console.log(newString1.trim());

//trimend and trimstart is also there

const url = "https://bilal.com/bilal%20ahmedkhan";
console.log(url.replace('%20','-'));

const sentence = "My-name-is-Bilal-Ahmed-Khan";
console.log(sentence.split('-'));
//[ 'My', 'name', 'is', 'Bilal', 'Ahmed', 'Khan' ]