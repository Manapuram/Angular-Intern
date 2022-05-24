
    /*Values and VARIABLES
    
    
    
    let js="Manga Manapuram"
   
    
    a=45+97-10;
    console.log(a);
    //Value:piece of data
    console.log('manga');
    console.log(23);
    let fn="cattymanga";
    let firstname='MANAPURAM';
    prompt(fn);
    console.log(firstname)
    //let function=24; function is a keyword that we should not able to use
    //let 5="dfs"; wrong syntax that we use numbers as variables
    let $function=34;
    alert($function)
    let PI=3.14;
    console.log(PI)
    let myfirstjob='Programmer';
     



    //ASSIGNMENT-1
    let country='INDIA'
    continent='Asia';
    population=1234567890;
    console.log(country,continent,population)*/

   /*
   DATA TYPES
    console.log(true);
    let jsfn=true;
    console.log(jsfn);
    console.log(typeof true);
    console.log(typeof 'manga');
    console.log(typeof 34);
    //let jsfn='Yes!'; already we mentioned let,should not use again
jsfn=23;
console.log(typeof jsfn);
let year;
console.log(year);
console.log(typeof year);
year=2001;
console.log(year)*/

/* LET  AND VAR AND CONST
let a=20;//we can change after assigning
a=21;
console.log(a);
const bd=2000;
//bd=2; Cann't able to change because  it is defined constant 
console.log(bd)
var job='programmer';
job='developer';
console.log(job);
ln='manapuram';
console.log(ln);*/
/* 
BASIC OPERATORS

ASSIGNMENT OPERATORS
const m=2000-1000;
const age=2020-2000;
console.log(m*10,age/2,2**3);
const ma=2000;
man=ma-20;
console.log(man);
const fn='manga';
const ln='manapuram';
console.log(fn+" "+ln);
let x=2+3;;
x+=10
y=++x;
x*=10;
x--;
console.log(y)
console.log(x)*/
a=34;
b=56;
console.log(a>b);
console.log(a>=19);
//Operator precedence
console.log(34-5-1);
let x,y;
x=y=25-10-5;
console.log(x,y);
avg=(x+y)/2;
a=x+y/2;
console.log(avg,a)

//ASSIGNMENT-2
/*
var isIsland=false;
let language='Telugu';
const country='inida';
population=123,456,734;
const continent='Asia';
console.log(typeof(isIsland),typeof(language),typeof(country),typeof(population),typeof(continent));
half1=half2=population/2;
console.log(half1,half2);
countryinc=population+1;
console.log(countryinc);
finland=6,000,000;
console.log(population>finland);
avgcou=33,000,000;
console.log(population<avgcou);
description='Portugal is in Europe, and its 11 million people speak portuguese';

*/
/*marksw=65;
johnw=54;
markh=5;
johnh=4.9;
bhim=marksw/markh**2;
bhij=johnw/johnh**2;
markhigherbmi=bhim>bhij;
console.log(markhigherbmi);
const fn='manga';
const job='teacher';
const by=2000;
yr=2022;
const manga="I'm"+' '+fn+',a'+(by-yr)+'years old'+job+'i';
console.log(manga);
mangas="I'm $(fn),a &(yr-by) year old &(job)";
console.log('just a regular string');
console.log('string with \n\ multiple \n\ lines');
console.log('string multiple lines');


*/
/*
age=30;
isoldenough=age>=18;
if(isoldenough)
{
console.log('gfgdfdfsdsd jghfgfhgfg');
}
if(age>25)
{
    console.log(60-age);
}
else
{
    console.log("hjgh lkjlkj utyutyuS")
}

const by=2000;
if(by<=2000)
{
    country=25;
}
else{
    country=35;
}
console.log(country)*/
/*marksw=65;
johnw=54;
markh=5;
johnh=4.9;
bhim=marksw/markh**2;
bhij=johnw/johnh**2;
markhigherbmi=bhim>bhij;
console.log(markhigherbmi);
const fn='manga';
const job='teacher';
const by=2000;
yr=2022;
if(bhim>bhij)
{
    console.log("Marks's bmi " +bhim+" is higher than john");
}
else{
    console.log('johns bmi is higher than marks (${bhim})');
}
*/
//TYPE CONVERSION:WITH  2 VALUES HAVE SAME TYPES
const iy='1991';
console.log(Number(iy),iy);
console.log(iy+18);
//console.log(Number('manga'));
console.log(typeof NaN);
console.log(String(23),23)
//TYPE COERSION:2 different values with same operators
n='10'-'5'-1;;//except +all will convert to number and + will execute concatenation
console.log(n)
m='20'+3;
console.log(m)
j='20'-2;
console.log(j)
k='45'+'45';
console.log(k)
l=90*'2';
console.log(l)
d='34'+34+'676';
console.log(d)
e=34+34+'34'
console.log(e);
/*
//Falsy Values:that are not exactly false when we try to convert them into boolean;
//5 falsy values:0,'',undefined,null,NaN;
console.log(Boolean(0));
console.log(Boolean(undefined))
console.log(Boolean({}))//empty objects can not be a falsy value
const mon=0;
if(mon)
{
    console.log("money is there with you");

}
else{
    console.log("Not an nough money")
}

 var hight;
if(hight)
{
    console.log("height is defined")
}
else{
    console.log("dsfks is undefined")
}
*/
/*
//EQALITY OPERATOR
const age1=19;
if(age1===19) console.log("aduclt")//comparasion :strict to the same data types:not type coercion
if(age1==19) console.log("adult")//loose eqality operators like type conversion
age2='19';
if(age2===19) console.log("no worries")//nothing will be printed
if(age2==19) console.log("same");
const fav=prompt("enter your fav number");
console.log(fav)
console.log(typeof fav)//converts number to built in string
if(fav===5)//the console value is string and this 5 is number so === not encourage type coercion so,not going to executed
{
    console.log("mine is 5");
}
else if(fav===7)
{
    console.log('7 is good number')
}
else{
    console.log("mine is not 5")
}
if(fav!==5)console.log("why 5")*/

/*
//BOOLEAN LOGIC:and or not operators:not speicifi to js but it will work for programming
// AND :all true
//OR :ANY ONE
//NOT :opposite to one another
age3=15;
if(age3>=10 && age3<30)
{
    console.log("you are a teenager")
}
else{
console.log("you are adult now");
}
const hdc=true;
const hdb=false;
console.log(hdc&&hdb);
console.log(hdc||hdb);
console.log(!hdc)
*/


/*
//CODING CHALLENGE#3;
//For avgs

// dolphinsscoreavg=(96+108+89) /3;
// console.log(dolphinsscoreavg);
// koalasscoreavg=(88+91+110)/3;
// console.log(koalasscoreavg);

// if(dolphinsscoreavg>koalasscoreavg)
// {
//     console.log("dolphin wins the macth")
// }
// else if(dolphinsscoreavg==koalasscoreavg)//else if(koalasscoreavg>dolphinsscoreabg) console.log("koalses wins the match")
// {
//     console.log("need to play again")
// }
// else{
//     console.log("koalses wins the macth")
// }

//FOR BONUS1:

dolphinbonus1=(97+112+101)/3;
console.log(dolphinbonus1);
koalasbonus1=(98+101+90)/3;
console.log(koalasbonus1)
if(dolphinbonus1>koalasbonus1 && dolphinbonus1>=100)
{
    console.log("dolphin wins th match")
}
else if(koalasbonus1>dolphinbonus1 && koalasbonus1>=100)
{
    console.log("koases wins the match")
}
else{
    console.log("both wins th ematch becuase it's draw")
}

//BONUS 2;

dolphinbonus2=(97+112+101)/3;
console.log(dolphinbonus2);
koasesbonus2=(109+95+106)/3;
console.log(koasesbonus2)
if(dolphinbonus2>koasesbonus2 && dolphinbonus2>=100)
{
    console.log("dolphin wins th match")
}
else if( koasesbonus2>dolphinbonus2 && koasesbonus2>=100)
{
    console.log("koases wins the match")
}
else if(dolphinbonus2===koasesbonus2 && (koasesbonus2&& dolphinbonus2)>=100){
    console.log("both wins the match becuase it's draw")
}
else{
    console.log("no onw wins the match")
}
*/

/*
//Switch statemtns
const day=prompt("Enter any one week day here");
switch(day)
{
    case 'monday':
        console.log("today is monday");
        break;
    case 'tuesday':
            console.log("today is tuesday");
            break;
            case 'wednesday':
                console.log("today is wednesday");
                break;
                case 'thursday':
                    console.log("today is thursday");
                    break;
                    case 'friday':
                        console.log("today is friday");
                        break;
                        case 'saturday':
                            console.log("today is fsgday");
                            break;
                            default:
                                console.log("not a valid day")
}

//Conditional (tenrary operarator)
const ab=45;
ab>=89? console.log("yes"):console.log("no");
*/
//CODING CHALLENGE#4
bill=275;
const tip=bill>=50&& bill<=300? bill*0.15:bill*0.20;
console.log(`the bill is ${bill},the tip is ${tip},and the total ${bill+tip}   `)


