//array modde theke element remove kora
//suppose amader 2 ta array ache but akta array sonkha onno array te akon amra 2 ta k change korte cai


var maleArray =["rahim","Karim","jabbar","rahima"];
var femaleArray = ["Khatun","amina"];

// var add=maleArray.pop();
// femaleArray.push(add);
// console.log(femaleArray);
// console.log(maleArray.length,femaleArray.length);

var persontoremove= maleArray[2];

femaleArray.push(persontoremove);
console.log(femaleArray);
delete(maleArray[2]);//delete korar poro empty element theke jacce
console.log(maleArray);
console.log(maleArray.length)//elemnet ace 3 ta but empty element ar jnno 4 ta element show krtace
//aita theke dur korar jnno slice() babohar kora hoy;
maleArray.splice(2,1);  ///koto number offset bad dibo r koyta empty element bad jabe
console.log(maleArray);