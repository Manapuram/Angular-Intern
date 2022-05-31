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
console.log((25**(1/2)))
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
console.log(Number([230_00]));
console.log(Number('230_00'));//NaN:String not a number
console.log(Number(' 230_00'));
//BigInt
console.log(2**53-1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2**53+1);
console.log(BigInt(34567891))
console.log(12n>15)//false
console.log(26n>23);
console.log(20n===20);//false:not allow type coresion
console.log(20n==20)//true
//console.log(10n/3)//error:we can't able to mix bigint to anyohter
console.log(10n/3n)



/////Creating Dates
const date=new Date();
console.log(date);
console.log(new Date(2034,8,12,3,45));
console.log(new Date(2034,8,32,3,45));//it will add to next month
console.log(new Date(0));//milli seconds:Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
console.log(new Date(2));
//returns the current time in internal format, as an object containing the number of milliseconds elapsed since the start of 1970 in UTC

const future=new Date(2022,10,13,45,23,22);
console.log(future)
console.log(future.getFullYear());
console.log(future.getMonth())
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getMinutes());
console.log(future.getTime());
console.log(future.setFullYear(2024))//gives time stamp

//Operations with Dates
const dateop=new Date(2031,10,19,14,12);
console.log(+dateop);
dayspassed=(date1,date2)=>(date2-date1);
dp=dayspassed(new Date(2024,10,10),new Date(2024,10,20));
console.log(dp)//864000000 milliseconds
dayspassed=(date1,date2)=>(date2-date1)/(1000*60*60*24);
dp1=dayspassed(new Date(2035,9,15),new Date(2035,9,26))
console.log(dp1)

//Internationalizing Dates(Intl)
now=new Date();
const options={
    hour:'numeric',
    minute:'numeric',
    day:'numeric',
    month:'long',
}
intl=new Intl.DateTimeFormat('en-AU').format(now);//English //30/05/2022:0include in month
intl1=new Intl.DateTimeFormat('ar-EG').format(now);//this will be executed  arabic:egypt
intl2=new Intl.DateTimeFormat('te').format(now);//telugu   //30/5/2022:not include 0
intl3=new Intl.DateTimeFormat('te',options).format(now);
intl4=intl2=new Intl.DateTimeFormat('en-AU',options).format(now);//30 May, 11:06 pm
console.log(intl);
console.log(intl1);
console.log(intl2);


//Timers:SetTimeOut&SwrInterval
setTimeout((ing1,ing2)=>console.log(`here is your pizza with${ing1} and ${ing2}`),3000,'olives','spincah');
console.log("waiting....")//After 2 seconds the string will be like this here is your pizza witholives and spincah

//SetInterval
setInterval(function(){
    const now=new Date();
    console.log(now);
},3000);//Mon May 30 2022 23:21:51 GMT+0530 (India Standard Time) for every second seconds wil be updated to 3 seconds

