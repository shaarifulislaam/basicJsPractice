//array copy
//deep copy-ডিপ করি তে শুধু মান করি করে,অপর অ্যারে তে দেখায়।
//shallow copy-শেলো কপি তে মান এবং মেমোরি উভয় এ কপি করে , অপর অ্যারে তে দেখায়।
//deep copy and shallow copy is most important thing in javasrcipt.

var v1=1;
var v2=v1;

v2=2;
console.log("V1 value is=",v1,"and V2 value is=",v2);//এখানে ভ্যারিয়েবন এ কিন্তু ঠিক ই হয়েছে মান কপি হয়েছে কিন্তু মেমোরি করি হয় নাই ।।কিন্তু অ্যারের ক্ষেত্রে মান এবং মেমোরি ২ টাই কপি করে.
