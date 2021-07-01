//positive nagetive number check
var n=-8;
if(n>0){
  var result = "This number "+n+" is positive"
}else {
  var result="This number "+n+" is naegetive";
}
console.log(result);


///even or odd number

var m=0;
var oddeven;

if(m==0){
  oddeven ="This is a neutral number";
}
else if(m%2==0){
 oddeven ="This number "+m+" is an even number";
}
else {
   oddeven ="This number "+m+" is an odd number";
}

console.log(oddeven);

///movie watching
;
var movieRating ="r"
var age =18;

if(movieRating=="pg" && age>=13){
  console.log("You can watch this movie");
}else if (movieRating=="r" && age>=18) {
    console.log("You can watch this movie");
}else if ("g" == movieRating) {
  console.log("You can watch this movie");
}else {
  console.log("You can't watch this movie");
}


////age stage

var age=100;
var ageResult;
if(age<=0){
  ageResult="They are vempire"
}
else if (age<=1){
  ageResult="They are baby";
}
else if(age<=12){
  ageResult="They are kid";
}else if (age<=18) {
  ageResult="They are Young"
}else if (age>=18) {
  ageResult="They are adult";
}else {
ageResult="They are old.";
}
console.log(ageResult);
