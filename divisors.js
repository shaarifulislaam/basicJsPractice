//divisor means ja number gulo k bag korle nises e kono bagses thake nah

//example=4-1,2,4
/*      Function
math.cail()-cail holo kono sonkhar tar uporer songkha ta nibe jmn 13.54=14
trick||cailing upore mane cail
        floor nice mane floor
math.floor()-floor holo kono shokhar tar nice ta nibe jmn 13.54=13
math.sqrt()-square root ber korar jnno 

*/
var n=145;
//range mane kotodur porjnto calabo
var range = Math.ceil(Math.sqrt(n));
//kono number squre bar krbo jodi beshi hoy tahole    purnoshaka nayar jnno cail() function use korlam

var divisors = "";

for(var i=0;i<range;i++){
    if(n%i==0){
        divisors  += i + " " + (n/i) + " ";
    }
}
console.log(divisors);