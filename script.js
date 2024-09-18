// words vs keywords

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
