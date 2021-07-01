//So=0 1 2 3 4 5 6 7 8 9 10
// S1=2 4 6 8 10 12 14  [uporer series ar satha 2 jog]
//S2=1 4 7 10 13 16   [S0 ar satha 3 jog]
//S3=0 3 8 15 24 35 48  [S0 ke square kore 1 minus]
//S4=1 4 3 8 5 12 7 16 9 20 [odd hole rakhe deya even hole 2 diya gun kora]
//S5=0 1 1 2 3 5 8 13   [fibonacci series:jakno songkha tar purber 2 ti songkar jogfol]

//solutin of S1
/*
var series="";
var n;
for(var i=1;i<10;i++){
    n = i*2;
    series = series + n + " ";
}
console.log("Series 1",series);
*/

//solution of S2
//S2=1 4 7 10 13 16   [S0 ar satha 3 jog]

var series = "1 ";
var n=1;

for (var i=1;i<10;i++){
    n=n+3;
    series= series + n + " ";
}
console.log("Series 2 is =",series);

//S3=0 3 8 15 24 35 48  [S0 ke square kore 1 minus]

var series ="";
var n;
for (var i=1;i<10;i++){
    n=i*i-1;
    series= series + n + " ";
}
console.log("series 3 is =",series); 


//S4=1 4 3 8 5 12 7 16 9 20 [odd hole rakhe deya even hole 2 diya gun kora]

var series="";
var n;
for (var i=1;i<10;i++){
    n=i;
    if(n%2==0){
        n=i*2;
    }
    series= series + n + " ";
}
console.log("series 4 is =",series); 


//fibonacci series


/*
                    implementation of fibonacci series
    

*/
var fibonacciSeries ="0 1 ";
var m=0;
var x=0;
var y=1;

for(var i=1;i<10;i++){
    m=x+y;
    x=y;
    y=m;
    fibonacciSeries = fibonacciSeries + m + " ";
}
console.log("Fiboccaciseries 5 is =",fibonacciSeries); 