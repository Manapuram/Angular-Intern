
//MAP METHOD
const movements=[350,321,901,-911,567,100,-100,-800]
const euroToUsd=1.1;
const movementsUsd=movements.map(function (mov)
{
return mov*euroToUsd;
})
console.log(movements)
console.log(movementsUsd)

//Filter Method

const deposites=movements.filter(function (mov)
{
    return mov>0;
})
console.log(movements);
console.log(deposites);


const depositesFor=[];
for(const mov of movements) if(mov>0) depositesFor.push(mov);
console.log(depositesFor );
const withdraws=movements.filter(mov=>mov<0);
console.log(withdraws);

//Reduce Method
const balance=movements.reduce((acc,cur)=>acc+cur,0);
console.log(balance);
let balance2=0;
for(const mov of movements) balance2+=mov
{
 console.log(balance2)
}

