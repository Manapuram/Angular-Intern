'use strict ';
const rest={
    name:'manga',
    location:'vizag',
    categories:['italian','indian','vegetarian','organic'],
    startemenu:['focaccia','bruschetta','garlic bread','caprese salad'],
    mainMenu:['pizza','burger','pasta'],//these all are objects
    openingHours:
    {
        mon:
        {
            open:12,
            close:22,
        },
        tues:{
            open:15,
            close:23
        },
        wedn:
        {
            open:13,
            close:10
        }
    },
    order:function(starte,mainer)
{
return [this.startemenu[starte],this.mainMenu[mainer]]
}

}
//receive 2 values form function


const orderlist=rest.order(2,2)
console.log(orderlist)
//console.log(rest.order(1,2))

//for array destructing  we use []
const arr=[1,2,3];
const a=arr[0]
b=arr[1]
c=arr[3]
const [x,y,z]=arr;
console.log(x,y,z);
const [first,second]=rest.categories;//Destructing the elemtns in array
console.log(first,second);
let [a1,b1,,d]=rest.startemenu;
console.log(a1,b1,d)
//[a1,b1]=[b1,a1]//destructing to re assigning


const nestedarray=[2,3,4,[8,9]];
const [i,j,k,[m,n]]=nestedarray;
console.log(m,n)

const [o,p,q]=[1,2]
console.log(p,q)//undefined beacuse no elememt is  assgined to q
const[s=0,f=1,g=2]=[4,5]
console.log(s,f,g)//s=4,f=5,g=2

//Destructing Objects we use {}
const {name,openingHours,categories}=rest;
console.log(name,openingHours,categories)
const {name:restname,openingHours:hours,categories:tages}=rest;
console.log(restname,hours,tages)


const ab=[1,2,...[4,5]];
console.log(ab)
