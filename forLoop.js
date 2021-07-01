//For loop
/*
var i;
for(i=1;i<=10;i++){

  console.log(i);
}
*/

//infinite loop
var i=0;
for(;;){
  console.log(i);  //output NAN >>Not a number,,,nan bcz no value inital
  i++;
  if (10==i) {
    break;    //infinite loop ke stop korte break use krta hobe
  }
}
