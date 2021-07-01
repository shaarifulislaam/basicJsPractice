//js  e mixed type ar data rakha jay
        /*JS Array Method*/
//push()-add last element
//unshift-add first element
//pop-delete last element
//shift-delete first element

var fruits = ["mango","apple","lichi","Goyaba","pineapple"];

fruits.push("Graps");//last element e data add kore
console.log(fruits);
console.log("Element length after push =",fruits.length);
fruits.unshift("Plum");// first e element add kore
console.log(fruits);
console.log("Element length after push =",fruits.length);

fruits.pop();   //last theke element delete kore
console.log("Result after Pop-",fruits);
console.log("Element length after pop =",fruits.length);
fruits.shift();//first theke element delete kore
console.log("Result after shift-",fruits);
console.log("Element length after shift =",fruits.length);

//delete kora element ta dakahr jnno
var lastPop= fruits.pop();
console.log("This item lastly deleted-",lastPop);
var firstShift= fruits.shift();
console.log("this item is firstly deleted item-",firstShift);
