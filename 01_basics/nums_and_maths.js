const score = 400;
//Simple Pattern

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
//100
console.log(balance.toString().length);
//3

console.log(balance.toFixed(3));
//100.000
//Used especially for ecommerce platform application

const otherNumber = 23.969;
console.log(otherNumber.toPrecision(2));
//should be used carefully, above only take first 2 number to precise

const hunreds = 10000000;
console.log(hunreds.toLocaleString());
//10,000,000 american Standards

console.log(hunreds.toLocaleString('en-IN'));
//1,00,00,000 Indian Standards


//************Maths******************//

console.log(Math.abs(-43.56));
//Absolute Value...Negative becomes positive

console.log(Math.round(43.56));//44
console.log(Math.ceil(43.25));//44
console.log(Math.floor(43.75));//43


console.log(Math.min(1,3,5,7,9,0));//0
console.log(Math.max(1,3,5,7,9,0));//9

console.log((Math.random()*10)+1);

const min = 10;
const max = 20;

 






