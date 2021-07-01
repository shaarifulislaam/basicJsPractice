//array copy
//deep copy-ডিপ করি তে শুধু মান করি করে,অপর অ্যারে তে দেখায়।
//shallow copy-শেলো কপি তে মান এবং মেমোরি উভয় এ কপি করে , অপর অ্যারে তে দেখায়।
//deep copy and shallow copy is most important thing in javasrcipt.

var day= [
    "sat",//0 =-7
    "sun",//1 =-6
    "mon",//2 =-5
    "tues",//3 =-4
    "wed",//4  =-3
    "Thus",//5 =-2
    "Fri"];//6 =-1

var day2= day;  //এখানে ডে টাকে ডে২ তে রাখা হয়েছে।

//day2[2]="no day";
//ডে তে যা চেঞ্জ করব ডে২ তেও একই তা চেঞ্জ হয়ে কপি হবে
//console.log("This is day1=",day,"This is day2=",day2); //এখানে ডে এবং ডে২ তে উভয় জায়গায় এ নো ডে দেখাচ্ছে কারণ এখানে মান এবং মেমোরি উভয় ই কপি হয়ে গেছে
 

//অ্যারে কপি করব যাতে অন্য অ্যারে তে ভ্যালু চেঞ্জ না হয়

 var day2 = day.slice();//fastest way
// var day2=[...day];//in js ES6 system
//var day2=Array.from(day); //form old js
day2[2]="hey"; //এখানে ডে২ তে সেট হবে হেই ।।এখানে ডে তে কোন পরিবর্তন না করে ডে২ তে ভ্যালু কপি করা হয়েছে

console.log("This is day1=",day,"This is day2=",day2);
