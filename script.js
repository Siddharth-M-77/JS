// words vs keywords

const { error } = require("console");

// keyword=> any word which any meaning in JavaScript Programming lamguage is called keywords
// word=> any word which any meaning is not  in JavaScript Programming lamguage is called word

// console.log("helooo");
// console.error("helooo");
// console.warn("helooo");

// variables=>variable is basically a container where we can store diffrent type of data ,like(string,number,boolean,array,object etc)....

// var string = "hey sidd";
// console.log(string);

// = is basically a assignmental opreator by the help of this opreator we can assign any value to a variable.

//left side of = is variable name and variable and the right side of = is value

//Naming convention  of the variables
//1. variable must start with small/capital /_ and not must be started number ,any-special character

//2. variable must be in a single word

//3.    camelCase=> helloBro
//      snake_case=> hello_bro
//      PascalCase=> HelloBro
//      kabab-case=> hello-bro

// datatypes in js

// 1.number  => NaN ,infinitty, -infinity
// var age = 12;
// console.log(age);
// console.log(typeof age);

// 2.String

// var str = "bhopal" + "MP";
// var str2 = "bhopal";

// var tL = `hell hey hiiii`;
// console.log(str);
// console.log(typeof str);
// console.log(typeof str2);
// console.log(tL);

// +  => concatination
//when we add anything in string then its convert that datatype  into string always
//string => '',"",``
//single line string=>"",''
//multiline string => ``(template literals)

//template literals=> by the help of template literels we can use dynamic values in the web

// var name = "siddharth";
// var age = 21;

// console.log(`Name is ${name} and the age is ${age}`);

// 3. boolean

// boolean is basically a datatype which value will only true or false

// var isValid = true;
// console.log(typeof isValid);

//7. null 👇👇👇👇👇

//when programmer is khow value is empty then peogrammer is use null and NaN  type  is "Object"

// var age = 23;
// console.log(age);

// var age = null;
// console.log(typeof age);

//Undefined👇👇👇👇👇

// var a;
//when we print a variable before its initilization then its give us undefined and the DATATYPE of undefined is also UNDEFINED
// console.log(a);

// a = 12; //Initialization
// console.log(a);

// a = 34; //reInitialization
// console.log(a);

//5. symbol=>👇👇👇👇👇
// symbal is basically a primitive datatype ,and its make our variable unique and the datatype of symbol is also a "SYMBOL"

// var sym1 = Symbol(10);
// var sym2 = Symbol(10);

// console.log(sym1);
// console.log(sym2);

// even if pass a same value of both variables then it is also a unique
// console.log(sym1 === sym2); //output:false

// console.log(typeof sym1);  output: symbol

// output-methods
// 1.console.log("hello");
// 2.alert("heyyy")

//input methods👇👇👇👇👇

// 1. prompt
// var a  = prompt("enter first number")
// var b  = prompt("enter second number")
// console.log(a+b);

//2. comfirm()

// let result = confirm("Are you sure want to leave this page")
// console.log(result);

//type conversion 👇👇👇👇👇

// 1. Explicit type conversion=>developer does that

// var a = Number(prompt("enter first number"));
// var b = +prompt("enter second number"); //flow=>right to left
// console.log(a + b);

// Symbol()
// Boolean()
// Number()

// 1. Implicit type conversion=> computer(Programming Language ) does that

//   12 +"hello" => "12hello"

//scope 👇👇👇👇👇

// there are two types of scope
//1. Global variable or Global Scope =>we can use this variable througout the whole program

//2. Local Scope or Local variable =>only accessible in curly brackets we we initialize this into curley brackes

//there are two type of local variables =>
//1. let =>it value can be modified
//    {
//     const a = 'hello'
//     console.log(a);
//     a = 'hey'
//     console.log(a) //it value can not change=> Refrence error =>

//    }

//2. Const => it value cant modified
// {
//     let name = "sidd"
//     console.log(name);
//     name = "john"
//     console.log(name);// it will be modified

// }

// what is just in time cmpiler ???

//Operators 👇👇👇👇👇
// 1. Arthemetic operator
//2.  Asssinment Operator
//3. Conditinal Operator

//1. Arithemetic operator=> +,-,* ,/,%,**
// a. unirary operator->increment and decrement operator (++ , --)
//b. binary operator-> +,-,* ,/,%,**
//c. shorthand operator -> += ,-=,*=, /= ,%=

// let n = 1;
// let m = 2;
// let sum = n + m;
// console.log(`the sum of ${n} and ${m} is ${sum}`);

// let a = 1;
// let b = 2;
// let sub = a - b;
// console.log(`the sum of ${a} and ${b} is ${sum}`);

// let c = 1;
// let d = 2;
// let multi = c - d;
// console.log(`the sum of ${c} and ${d} is ${multi}`);

// let p = 1;

// let t = 2;
// let div = p - t;

// console.log(`the sum of ${p} and ${t} is ${div}`);

//modulodivision => %

// let a = 10
// let b  = 20
// let c= b%a
// console.log(c); output: 0

// let a = 2
// let b  = 10
// let c= a%b
// console.log(c);  output:2

//double astrics (**) => it find the square of any number

// let a = 3;
// let b = 2;
// let exp = a ** b;
// console.log(exp);  output: 9

//shorthand operator = > += ,-=,*=, /= ,%=

// let a = 10
// a  += 20
// console.log(a)  op=30

// let a = 10
// a  -= 20
// console.log(a) op=-10

// let a = 10;
// a /= 20;
// console.log(a);

// let a = 10
// a  %= 20
// console.log(a)

// let a = 10
// a  *= 20
// console.log(a)

// let a = 10
// a  **= 20
// console.log(a)

//increment and decrement opreator 👇👇👇

// let a =12
// let res = ++a + ++a + ++a + a--
// console.log(res);
// console.log(a)

// let a = 13
// let x = a++ + --a + ++a + a++
// console.log(x)
// console.log(a)

//comparison operator 👇👇👇 comparison operator always return only boolean values....

// >= , <= , == , === , != , < , > , !==

// let  a= 10
// let b = "10"
// console.log(a==b) output:> true

// let  a= 10
// let b = "10"
// console.log(a==+b) output:> false

//when we campare string with comparision operator , only the first non equal character is compared a/c to its ASCII value

// let a = "hello"
// let b = "hey"
// console.log(a>b)  output:> false

// let a = "Hi"
// let b = "HI"
// console.log(a>b)

//Logical operator 👇👇👇

//:>   && , || , !

//logical operators  && || ! results (a/c to the data which is logiclly comapred)

// console.log(true && true && true)
// console.log(true && false && true)

//false values => 0, "" , undefined , NaN , false , null

// console.log(0 || 8 || true || false)
// console.log("hii" || true || 0 || NaN)  output-- will be the true value

// console.log(9 && 8 && null && false); //output will be null

//conditional statement 👇👇👇

//if, else ,if-else , switch  //

//1. simple if-else statement
// if(condition){
//     //do somethings
// }
// else{
//     // do somethings
// }

//2. ladder / multiple if-else statement

// if(condition){
//     //do smethings
// }
// else if(){
//     //do somethings
// }
// else if(){
//     //do somethings
// }
// else{
//     // do somethings
// }

//3. nested if-else condition

// if (condition) {
//   if (codition2) {
//     //do somethings
//   } else {
//     //do somethings
//   }
// }else{
//     //do domethings
// }

//program 1
// let n = 12;

//simple if  👇👇👇👇👇
// if (n >= 0) {
//   console.log("Positive");
// }

//simple if-else  👇👇👇👇👇

// if (n >= 0) {
//   console.log("Positive");
// } else {
//   console.log("negative");
// }

//ladder if-else or multiple if-else  👇👇👇👇👇

// if (n > 0) {
//   console.log("Positive");
// } else if (n == 0) {
//   console.log("Zero");
// } else {
//   console.log("Negative");
// }

//Nested if-else 👇👇👇👇👇

// if (n > 0) {

//   if (n % 2 == 0) {
//     console.log("Number is Positive and Even");
//   } else {
//     console.log("Number is Positive and ODD");
//   }
// } else if (n == 0) {
//   console.log("Zero");
// } else {
//   console.log("Negative");
// }

//using logical operator in if-else (nested) 👇👇👇👇👇

// let n = 12;
// if (n > 0 && n % 2 == 0) {
//   console.log("Positive Even");
// } else if (n > 0 && n % 2 != 0) {
//   console.log("Positive Odd");
// } else if (n < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

//  fall throw???  print number without loop and recersion ??   switch kya hai???   =>interview Question

//   W.A.P to take name and age input from the user and print  👇👇👇👇👇

// let name = prompt("Enter your name");
// let age = Number(prompt("Enter your age"));
// console.log(`name is ${name} and the age is ${age}`);

// if (age >= "18") {
//   console.log("you can vote");
// } else {
//   console.log(`You can not age for more ${18 - age} years`);
// }

//ternary operator  👇👇👇👇👇

//syntax => condition ? true statement  : false statement

//program

// const result =
//   age >= 18 ? "You can vote" : `You can not age for more ${18 - age} years`;

//   console.log(result)

//2. W.A.P to takes 3numeric inputs from the user

// const num1 = Number(prompt("ENter 1st Number"));
// const num2 = Number(prompt("ENter 2nd Number"));
// const num3 = Number(prompt("ENter 3rd Number"));

// if (num1 == num2 && num2 == num3) {
//   console.log("Threee side  Are Equal:=>Triangle");
// } else if (num1 == num2 || num2 == num3 || num1 == num3) {
//   console.log("Two side are equal:=>");
// } else {
//   console.log("Three side are not equal");
// }

//W.A.P to sum three number

// let a = 12;
// let b =12;
// let c = 12;
// console.log(a+b+c)

// W.A.P to reverse a string

// let str = "siddharth"
// let res = str.split("").reverse().join('')
// console.log(res)

//W.A.P to cheak given words is vowel or consonents

// let vowels = ["a", "e", "i", "o", "u"];

// function checkVowelOrConsonant(letter) {
//   // Convert the letter to lowercase to handle both uppercase and lowercase inputs
//   letter = letter.toLowerCase();

//   // Check if the letter is a vowel
//   if (vowels.includes(letter)) {
//     console.log(`${letter} is a vowel.`);
//   } else {
//     console.log(`${letter} is a consonant.`);
//   }
// }

// // Example usage
// let letter = prompt("Enter a letter:");
// checkVowelOrConsonant(letter);

//Iteertive statement /loops 👇👇👇👇👇

// there is two types of loops

//1. entry controll loop(while)(for-loop)
//2. exit controll loop(do-while)

//1. loop variable
//2. condition exp
//3. Body of the loop
//4. Updtion exp

//syntax=>   👇👇👇👇👇
// while (condition) {
//     //loop statement
//     //updation
//     }

//example => print 1 - 10 number

//entry controll loop  👇👇👇👇👇

// let i = 1;
// while(i<=10){
//     console.log(i)
//     i++

// }
//console.log("ENd Of The Loop")

//for loop syntax

// for (i = 0; i <= 20; i++) {
//   console.log(i);
// }
// console.log("End Of The Loop");

// //exit controll loop(do-while)👇👇👇👇👇
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);
//console.log("ENd Of The Loop")

//break and continue statement=>

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 != 0) {
//     console.log("skip");
//     continue;
//   }
//   console.log(i);
// }
// console.log("End Of The Loop");

// for (let i = 1; i <= 20; i++) {
//   if (i<=10) {
//     console.log("break");
//     break;
//   }
//   console.log(i);
// }
// console.log("End Of The Loop");

// //1=> W.A.P TO accept two integer from user and display the sum of them

// let num1 = Number(prompt("Enter first number"))
// let num2 = Number(prompt("Enter second number"))
// let sum = num1 +num2
// alert(`sum is ${sum}`)

// //2=> W.A.P TO swap two number

// using 3rd variable

// let n = 3;
// let m = 6;
// console.log("Before swapping ", n, m);
// let temp = n;
// n = m
// m = temp;
// console.log("After swapping ", n, m);

//without using 3rd variable
// let n = 3;
// let m = 6;
// console.log("Before swapping ", n, m);
// n = n + m;
// m = n - m;
// n = n - m;
// console.log("Before swapping ", n, m);

// W.A.P TO ACCEPT LENGTH AND WIDTH FOR THE RECTANGLE AND DISPLAY ITS AREA  AND PARAMETER

// let length = Number(prompt("Enter length"));
// let width = Number(prompt("Enter width"));
// console.log(`area is ${length * width}`);
// console.log(`Parameter is ${2 * [length + width]}`);

//W.A.P A PROGRAM TO FIND THE FIND SIMPLE INTREST

// let a = +prompt("Enter principle amount")
// let b = +prompt("Enter Intrest rate ")
// let c = +prompt("Enter year")

// let SI = a*b*c/100
// console.log(SI)

//W.A.P TO accept 3 sides of the tringle and find the area with herons formula

// formula 1 = S =( a+b +c)/2 where s = semiparamerter of trangle
//formula 2 SA =SQRT(S(S-A)(S-B)(S-C) )

// let a = +prompt("Enter 1st side of Trangle");
// let b = +prompt("Enter 2nd side of Trangle");
// let c = +prompt("Enter 3rd side of Trangle");
// let SP = (a + b + c) / 2;
// console.log(SP)

// let Area = Math.sqrt(SP * (SP - a) * (SP - b) * (SP - c));
// console.log(Area)

//W.A.P to find circumference of the spahre

//formula 1 => Surface area = 4pirr
// let R = +prompt("Enter Redius");
// const pi = 3.14;

// let SA = 4 * pi * R ** 2;
// console.log(SA);

//W.A.P to find the area and parameter of the circle

//formula =>parameter =  2piR
//          area = piRR

// const pi = 3.14;

// let R = +prompt("Enter Redius");

// // let P = 2*pi*R
// // console.log(P)
// let Area = pi*(R**2)
// console.log(Area)

//Functions in Javascript ???

//1.st => function decleration;
//2nd => function calling

//example
// function name() {
//   let a = "siddharth"; // function decleration or function initialization
//   console.log(a);
// }
// name(); //function calling

// function name() {
//     let a =10; // function decleration or function initialization
//     let b= 20
//   console.log(a+b);
// }
// name(); //function calling

//key points in function*****

//1. By default funtion return undefined
//2.return must be the last line of the funtion
//3.only single entity must be returned by the  function
//4. function call is replaced by the return value
//5. code written after return in the function will not be reachable.

//if we want to access and use  the data  from out of the function then we use RETURN in funtion;

// function name() {
//   let name = "sidd";
//   return name;
// }
// console.log(a);
// let a = name();

// name();              //our function call (non-parametrized function call)
// console.log("hello"); // Js Function call (parametrized function call)

// **************
// if we pass arguments a function then its called parametarized function and we accept this arguments in function parameter

// ***********************
//function=>not compulsory to return somethings
//method(object) => compulsory to return somethings

// function getName(name, city) {
//   console.log(name, city);
// }

// getName("Sidd", "mumbai");

//example of return

// function getSum(n,m){
//     const sum = n+m;
//     return sum;
// }

// let res = getSum(2,3)
// console.log(res*5)

//default Parameter???

//1. Default parameter must be the parameter og the function
//2.there shuld be only 1 default parameter in the function

// function dets(firstname, batchcode = " mern12") {
//   console.log(firstname, batchcode);
// }
// dets("Sidd");
// dets("Abhi", "B28");

//rest operator (...) they can hold infinite value . when we dont know how many values will come then we use rest operator✅✅✅✅✅
// function hobbies(name, ...args) {
//   console.log(name, args);
// }

// hobbies("john", "swimming");
// hobbies("john", "swimming", "cricket");
// hobbies("john", "swimming", "running", "singing");
// hobbies("john");

//Fat Arrow Function syntax ✅✅✅✅✅

// const fun = () => "hello";

// let res1 = fun();
// console.log(res1);

//non parametrize arrow function
// const greet = () => "hello";

// parametrize arrow function
// const sum = (a, b) => a + b;

// let res = sum(2, 3);
// console.log(res);

//Hoisting me var partially hosted ho jata hai isliye ye undefined show krta hai

//but hoisting me  let and const ko compiler undefined  initailize nhi kr paata  so is case ko Temporal Dead Zone bolte hai

//function are fully hoisted and make sure function keyword is used in that function then only it hoisted

//var is partially hosted

//let & const is shows the TDZ(no hoisting)

//function with arrow function show no hositing(TDZ) or depanding the way it is decleared

// example:

// add(1, 2); // this is throw an error that add is not a function bcas it is a anonymus function and without fuction keyword it cant not hoisted❌❌❌❌
// var add = (a, b) => {
//   console.log(a + b);
// };

//  primitive or non refrence dataTypes
// let a = 12;
// let b = a;
// b = 15;
// console.log(a); // here value of a is immutable or unchanged
// console.log(b); // so value of b will changed

//mutable or non primitive or Reference Data Type

// Array & Object
// let a = [1, 2, 3, 4, 5];
// let b = a;
// a[1] = 200
// console.log(a)
// console.log(b)

//objects???

//syntax => {}
// const obj = {
//   name: "Siddharth",
//   age: 20,
// };

// //access the property
// console.log(obj.name); //1st way to acees obj data (.property or .keyname)
// console.log(obj["name"]); //2nd way to acees obj data["keyname"] or ["property"]

// //update the property

// obj.age = 34;
// obj["name"] = "Sidd";
// console.log(obj);

// //add new property

// obj.city = "Gorakhpur";
// console.log(obj);

// //delete property
// // delete obj.age;
// // console.log(obj);

// const obj = {
//   name: "Siddharth",
//   age: 20,
// };

// //traversing an object with for in loop to find key and values

// for (let key in obj) {
//   console.log(key, "=>", obj[key]); //here key store key name so that i write obj[key]=> this key represent  each key of an object
// }

//coping the objects  with spread operator(...) it is also called shallow copy
// let obj2 = {...obj}
// console.log(obj)
// console.log(obj2)

// this keyword
// normal function in Objects
// const Profile = {
//   name: "Alex",
//   getName: function () {
//     console.log(this.name);
//   },
// };
// Profile.getName(); output : Alex

//using arrow function
// const Profile = {
//   name: "Alex",
//   getName: () => {
//     console.log(this.name);
//   },
// };
// Profile.getName();  output : undefined

// pure and impure functions

//pure function is a function which is does not use data outside of the function is called pure function  if we want make it pure we have to paas arguments and accept it via parameter and then we can use it ..

//impure function is a function which is use data outside of the function is callled impure function

//normal function vs arrow function

// //normal function hold extra property of the global objects
// function greet(){
//   console.log(this)
//   console.log(arguments)
//   console.log(globalThis)
//   console.log(" function")
// }

// //arrow function does not hold the extra property so it is very sufficent

// const greetArrow =()=>{
//   console.log(this)
//   console.log(arguments)
//   console.log(globalThis)
//   console.log("Arrow function")
// }

// console.log(greet())
// console.log("--------------------------------")
// console.log(greetArrow())

//Array
//1. creating a array
// let arr = [1,2,3,4,"Sidd",true]

// //accessing an array
// console.log(arr[0]) //output:1

// console.log("Accessing aray",arr[0,1,2])// if u write multiple index while accessing time then it return only last index of the given index; //output: 3

// //Updating an array

// arr.push(1122,3344,5566)
// console.log("Push array",arr)

// arr.unshift(5566,7788,9900)
// console.log("Unshift array",arr)

//deleting an array

// let arr = [1,2,3,4,5,6]
// // let res = arr.pop()//remove the last element of an array
// // console.log(res)
// // let res2 = arr.shift() // remove the first element of an array
// // console.log(res2)

// let res3 = arr.splice(2,2)
// console.log(res3)

//traversing array(using for of loop for array & for in loop for Objects)
// let arr = [1, 2, 3, 4, "Sidd", true];

// for(const element of arr){
//     console.log(element)
// }

// find the length

// console.log(arr.length);

//  arr.length => length is property(.)
//  arr.pop() => pop is method()

//Array methods in Javascript✅✅✅✅✅

// foreach vs map✅✅✅
// let arr = [1,2,3,4,5]

//forEach=> is a mutable method which change original array✅✅
// //call back  function
// arr.forEach((elem,index)=>{
//     arr[index] = elem*2

// })
// console.log(arr)

//map=> map is a immutable method which return a new array with some opeartions✅

// let arr = [1,2,3,4,5]
// let arr2 = arr.map((elem,index)=>{
//     return elem*2
// })
// console.log(arr)
// console.log(arr2)

// let arr = [1,2,3,4,5]

//filter=>Returns the elements of an array that meet the condition specified in a callback function✅✅
// let filteredArray=arr.filter((elem,index)=>{
//     return elem%2!==0
// })
// console.log(filteredArray)

//find =>Returns the value of the first element in the array where predicate is true, and undefined otherwise✅✅
// let arr = [1,2,3,4,5]
// let findedelem=arr.find((elem,index)=>{
//     return elem%2!==0
// })
// console.log(findedelem)

//findIndex=>Returns the index of the first element in the array where predicate is true, and -1 otherwise.
// let arr = [1,2,3,4,5,6,7,5]
// let index=arr.findIndex((elem,index)=>{
//     return elem===5
// })
// console.log(index)

//includes() & some() and every()

// includes=>Determines whether an array includes a certain element, returning true or false as appropriate.
// let arr = [1, 2, 34, 5, 6, 7];
// let includess = arr.includes(2,5);//5 is a starting index from where will condition cheak
// console.log(somee);

//some()=>Determines whether the specified callback function returns true for any element of an array.
// let arr = [1, 2, 34, 5, 6, 7];

// let somee = arr.some((value, index) => {
//   return value % 2 === 0;
// });
// console.log(somee)

//every=>Determines whether all the members of an array satisfy the specified test.

// let arr = [1, 2, 34, 5, 6, 7];

// let everyy= arr.every((value,index)=>{
//     return value%2 ===0
// })
// console.log(everyy)

//reduce()=>Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function

// let arr = [1, 2, 3, 45, 6, 7, 89];
// let sum = arr.reduce((acc, curVal) => {
//   return acc + curVal;
// }, 0);

// console.log(sum);

//Destructureing in Javascript✅✅✅✅

// array Distructuring✅✅
// let arr = [1,2,33,44,55]
// // const [one,two,three,four] = arr
// // console.log(three)

// // if u want to skip some items then use comma(,) for this
// const [, , , ,five] = arr
// console.log(five)

//Object Distructring✅✅✅

// let obj = {
//     name:"SIdd",
//     age:23,
//     city:"UP"

// }
// const {city,name,age} = obj
// console.log(name)

//JSON(Javascript object Notation)=>

// let arr = [{}, {}, {}, {}];
// // console.log(typeof arr);
// let resStr = JSON.stringify(arr); // convert object to string we use JSON.stringify()
// console.log(typeof resStr);

// let resObject = JSON.parse(resStr);
// console.log(typeof resObject); // convert string to Object we use JSON.parse()

//String in Javascript

//creating a string
// let str = "Hello"

// //Read string
// console.log(str)
// console.log(str[0])
// console.log(str.at(-1))

// //strign can be reassigned but never can be changed by its index

// // for example
// console.log(str[0]=o)

// //you can reassigned
// str = "Hey"  //this is applicable
// str = null //this is applicable

//Strign traverse using for loop
let str = "Shri-Krishna";
// for(let i = 0; i <str.length; i++){
//     console.log(i,str[i])
// }

//String Methods
// let str2 = str.concat("-hello")
// console.log(str2)

// let str3 = str.replace("S","B")//case sensitive if u give small later and given string is capital later then it search which letter is smal and then replace it.so this is case sensitive so make sure give small letter or capital letter acoording to the replace letter
// console.log(str3)

// let num;
// let randomNumber;
// do{
//     let randomNumber =  Math.floor(Math.random()*10)
//     // console.log(randomNumber)
//     num = +prompt("Enter a num")
//     if(num<randomNumber){
//         console.log("Number is too low")
//     }
//     else if(num>randomNumber){
//         console.log("Number is too high")
//     }
//    else if(num===randomNumber){
//     console.log("Congrates you r winner")
// }

// }while(num!==randomNumber)

//NESTED LOOP / PATTERN Day 20 to 21-
// 46=> Right Triangle - Star
// let row = 5;
// for(let i = 1; i<=row; i++){
//     let stars = ''
//     for(j=1;j<=i; j++){
//         stars+="*"
//     }
//     console.log(stars)
// }

//47 Right Triangle - Number

// let row = 5;
// for(let i = 1; i<=row; i++){
//     let stars = ''
//     for(j=1;j<=i; j++){
//         stars+=j
//     }
//     console.log(stars)
// }

//- Right Triangle - Alphabet

// let rows = 5;
// let Alphabet = 65;
// for (let i = 1; i <= rows; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += String.fromCharCode(Alphabet) + " ";
//     Alphabet++;
//   }
//   console.log(line);
// }

//49 Inverted Right Triangle - Star

// let row = 5;
// for(let i= row; i>=1;i--){
//     let star= ""
//     for(let j =1; j<=i; j++){
//         star+="*"
//     }
//     console.log(star)
// }

//50 Mirrored Right Triangle

// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let line = '';

//     // Print spaces

//     for (let j = 1; j <= rows - i; j++) {
//         line += ' ';
//     }

//     // Print stars
//     for (let k = 1; k <= i; k++) {
//         line += '*';
//     }

//     console.log(line);
// }

//Error handling in javascript✅✅✅✅✅
//try-block is used to handle synchronus(code which run line by line) code erors

// try {
//   let a = 10;
//   console.log(a + b);
// } catch (error) {
//   console.log("Somethings went wrong from the developers end.");
// } finally {
//   console.log("Mai to chalunga hi chalunga bhai kuch bhi ho jaye");
// }

//custom errors

// try {
//   let a = 10;
//   let b = 2;
//   if (a % b == 0) {
//     throw new EvalError();
//   } else {
//     throw new Error();
//   }
// } catch (error) {
//   if (error.name == "EvalError") {
//     console.log("Even not allowed");
//   } else if (error.name == "Error") {
//     console.log("Odd not allowed");
//   } else {
//     console.log("somethings went wrong");
//   }
// }

// synchronus programming
// console.log("Hey with synchronus");

//setTimeout=>Schedules execution of a one-time callback after delay milliseconds
// setTimeout(() => {
//   console.log("Hey i came from 2s ");
// }, 2000);

// console.log("Hey from line 3");

// //setinterval=>Schedules repeated execution of callback every delay milliseconds.
// setInterval(() => {
//   console.log("setInterval");
// }, 1000);

//Promise in javascript
//promises is used to handle the error of asynchronus code

// fetch=> it takes api and returns string data in first then ,we convert it into json by data.json() and after that we have to call another then which gives the final result/data after that we put catch for error handling

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((res) => console.log(res))
//   .catch((error)=>console.log(error))


//   async/await for handling asynchronus code and fetch apis 

// async function fetchData(){
//    try {
//     let data = await fetch('https://jsonplaceholder.typicode.com/users')
//     let res =await data.json()
//     console.log(res)
//    } catch (error) {
//     console.log(error)
//    }
// }
// fetchData()