// const myArr = [0,1,28,34,474,875]
// //Element can also be different like [1,2,3,"Bilal",25,"Hello"]
// //Array in JavaScript is resizable
// console.log(myArr[3]);

// const myHeroes = ["Salman","Shahrukh","Aamir"];
// let newHeroes = new Array("Tiger","Varun","Arjun")
// console.log(newHeroes[2]);
// //Arjun

// // Array methods

// myArr.push(6);
// myArr.push(8);

// console.log(myArr);
// // [
// //     0,   1, 28, 34,
// //   474, 875,  6,  8
// // ]

// myArr.pop()
// console.log(myArr);
// // [
// //     0,   1, 28, 34,
// //   474, 875,  6
// // ]

// myArr.unshift(322);
// console.log(myArr);
// // [
// //     322,   0,   1, 28,
// //      34, 474, 875,  6
// //   ]

// myArr.shift();
// console.log(myArr);
// // [
// //     0,   1, 28, 34,
// //   474, 875,  6
// // ]

// console.log(myArr.includes(28));
// //true

// console.log(myArr.includes(322));
// //false...boolean

// console.log(myArr.indexOf(28));
// //2

// ///////Join///////////

// const newArr = myArr.join();
// console.log(typeof newArr);
// //String

// console.log("A", myArr);


// const myArr1 = [1,2,3,4,5,6,7];
// console.log("A", myArr1);

// const myn = myArr1.slice(1,3);
// console.log("B" ,myArr1);
// console.log(myn);
// //[ 1, 2, 3, 4, 5 ]

// const myn2 = myArr1.splice(1,3)
// console.log("C", myArr1);
// //C [ 1, 5, 6, 7 ]

// //myArr1 changes in splice....
// //splice gives the desired value....

// console.log(myn2);
// //[ 2, 3, 4 ]

// console.log(
    
    
    
//     "************************************************************************************************************************************************************************************************************************************");



  const marvel_heroes = ["Thor","C_America","Ironman","AntMan"]
  const dc_heroes = ["SuperMan","BatMan","WonderWomen","Flash"]
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// // [
// //     'Thor',
// //     'C_America',
// //     'Ironman',
// //     'AntMan',
// //     [ 'SuperMan', 'BatMan', 'WonderWomen', 'Flash' ]
// //   ]

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

const newHeroes = [...marvel_heroes,...dc_heroes];
console.log(newHeroes);
//Mostly used spread method for joining two arrays

const n_arr = [1,2,3,[4,3,5,],7,5,4,6,[7,8,9[9,6,4,[4,4,[3,2]],5]]];
const n_arr1 = n_arr.flat(Infinity);
console.log(n_arr1);
//[ 1, 2, 3, 4, 3, 5, 7, 5, 4, 6, 7, 8, undefined ]

console.log(Array.isArray("Bilal"));
//False

console.log(Array.from("Bilal"));
//[ 'B', 'i', 'l', 'a', 'l' ]

console.log(Array.from({name: "Bilal"}));
//Interesting
//[]

let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1,score2,score3));
//[ 100, 100, 100 ]

//is Array
//From Array
//Or Array
//These 3 are importants