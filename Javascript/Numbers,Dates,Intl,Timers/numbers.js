//Numbers
console.log(23==23.0);
console.log(23===23.0);
console.log(23==='23');//does not implement type coersion
console.log(23=='23');
console.log(1.2+1.3===2.5);
console.log(0.2+0.3===0.5);
console.log(0.1+0.2===0.3)
console.log(0.1+0.2==0.3)
//Number
console.log(Number('23'))
console.log(+'23')
console.log(Number(NaN))
//Parsing
console.log(Number.parseInt('23px'));

console.log(Number.parseInt('e25'));//first non white space cannot be converted to number
console.log(Number.parseInt(' 25'));//first space character can be converted to number
console.log(Number.parseInt('30px',10))//Base 10 will be changed
console.log(Number.parseInt('30px',2))//NaN:beacuse base2 cannot be changed
//NaN
console.log(Number.isNaN(20))//false beacuse it's a number
console.log(Number.isNaN('20'))//false
console.log(Number.isNaN(+'20'))
console.log(Number.isNaN(20/0))
//isFinite
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'))//false beacuse it's string
console.log(Number.isFinite(23/0));
//isInteger
console.log(Number.isInteger(23))
console.log(Number.isInteger(23.0))//implicitely it'll convert to integer
console.log(Number.isInteger(+'23'));
console.log(Number.isFinite('23'))
//Math Function
console.log(Math.sqrt(25))//5
console.log(Math.sqrt(255))
console.log(Math.max(5,18,23,11,28));
console.log(Math.max(5,18,23,11,'28','98'))
console.log(Math.max(5,18,23,11,'28','980','145px'))//Nan we can't do on pixel values
console.log(Math.min(5,18,23,11,'28','98'))
console.log(Math.trunc(5.9))
console.log(Math.trunc('9.8'))
//Trunc:Will remove the fractional values
console.log(Math.trunc(45.6))//45
console.log(Math.trunc(34.9))//34
//Round: It rounds the decimal number to the nearest integer value
console.log(Math.round(34.5))//35
console.log(Math.round(34.9))//35
//Ceil:Gives the next value
console.log(Math.ceil(22.3))//23
console.log(Math.ceil(25.1))//26
//Floor
console.log(Math.floor(25.1))//25
console.log(Math.floor(25.9))//25
//Rounding Decimals
console.log((2.6).toFixed(0))//3
console.log((2.6).toFixed(2))//2.60:UPTO 2 decimals
console.log((2.690).toFixed(1))//2.7
//Remainder Operator
console.log(5%2)
console.log(5/2)
//Numeric Separators
const d=123456799;
a=124_3456_454_576//it will remove _
console.log(a)
console.log(3.14_678)
//console.log(3._14)error
//console.log(3_.14)//error


