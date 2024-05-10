const myArr = [0,1,28,34,474,875]
//Element can also be different like [1,2,3,"Bilal",25,"Hello"]
//Array in JavaScript is resizable
console.log(myArr[3]);

const myHeroes = ["Salman","Shahrukh","Aamir"];
let newHeroes = new Array("Tiger","Varun","Arjun")
console.log(newHeroes[2]);
//Arjun

// Array methods

myArr.push(6);
myArr.push(8);

console.log(myArr);
// [
//     0,   1, 28, 34,
//   474, 875,  6,  8
// ]

myArr.pop()
console.log(myArr);
// [
//     0,   1, 28, 34,
//   474, 875,  6
// ]

myArr.unshift(322);
console.log(myArr);
// [
//     322,   0,   1, 28,
//      34, 474, 875,  6
//   ]

myArr.shift();
console.log(myArr);
// [
//     0,   1, 28, 34,
//   474, 875,  6
// ]

console.log(myArr.includes(28));
//true

console.log(myArr.includes(322));
//false...boolean

console.log(myArr.indexOf(28));
//2

///////Join///////////

const newArr = myArr.join();
console.log(typeof newArr);
//String

console.log("A", myArr);


const myArr1 = [1,2,3,4,5,6,7];
console.log("A", myArr1);

const myn = myArr1.slice(1,3);
console.log("B" ,myArr1);
console.log(myn);
//[ 1, 2, 3, 4, 5 ]

const myn2 = myArr1.splice(1,3)
console.log("C", myArr1);
//C [ 1, 5, 6, 7 ]

//myArr1 changes in splice....
//splice gives the desired value....

console.log(myn2);
//[ 2, 3, 4 ]

