//Three useful array functions:

//====================
//push
//====================
var array = [];

array.push("Pushed Element"); //pushing to end of array 
array.push("Second Pushed Element");

console.log("After two pushes: ", array)

//====================
//pop
//====================
var poppedElement = array.pop(); //popping off the end
console.log("This element get popped: ", poppedElement);
console.log("Now the array looks like this: ", array);

//====================
//unshift
//====================
//adds to front of array



//====================
//shift
//====================
//removes from front of array

//====================
//splice
//====================
//removes from anywhere in array
var arr2 = [0,1,2,3,4,5];

//to remove an element:
arr2.splice(3,1); //where to start and # to remove (if only give one value removes everything that number and beyond)
console.log("Now the array looks like this: ", arr2) //[0, 1, 2, 4, 5]

//adds to anywhere in array
arr2.splice(3,0,8,9)
console.log("Now it's this: ", arr2) //[0, 1, 2, 8, 9, 4, 5]


//====================
//problem
//====================
//how go about finding out if array has "bears"



