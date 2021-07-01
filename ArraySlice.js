//slice-array majer element gulo niya kaj kore

//slice e 2 ta value dita hoy akta kothy theke nibe and last ta kontar ag porjnoto niba
//splice-
var day= [
    "sat",//0 =-7
    "sun",//1 =-6
    "mon",//2 =-5
    "tues",//3 =-4
    "wed",//4  =-3
    "Thus",//5 =-2
    "Fri"];//6 =-1
var chank = day.slice(2,5)//mon theke wed porjnto dakabe bcz 5 ar ag porjnto slice dakabe
console.log(day,chank);

//akon ami 4,5 nita cai so jata porjnto nita cai tar satha 1 + korta hobe..tahole 6 hobe

chank2= day.slice(4,6);//wed ,thus print hobe
console.log(chank2);

//last theke element ber korta hole last theke - hisabe count hobe jmn -1,-2
//ses theke 2 ta thekee first ar 3 ta
var day2=day.slice(-5,-2);
console.log("value of day2-",day2);