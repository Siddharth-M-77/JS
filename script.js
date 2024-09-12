// words vs keywords

// keyword=> any word which any meaning in JavaScript Programming lamguage is called keywords
// word=> any word which any meaning is not  in JavaScript Programming lamguage is called word

console.log("helooo");
console.error("helooo");
console.warn("helooo");

// variables=>variable is basically a container where we can store diffrent type of data ,like(string,number,boolean,array,object etc)....

var string = "hey sidd";
console.log(string);

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
var age = 12;
console.log(age);
console.log(typeof age);

// 2.String

var str = "bhopal" + "MP";
var str2 = "bhopal";

var tL = `hell hey hiiii`;
console.log(str);
console.log(typeof str);
console.log(typeof str2);
console.log(tL);

// +  => concatination
//when we add anything in string then its convert that datatype  into string always
//string => '',"",``
//single line string=>"",''
//multiline string => ``(template literals)

//template literals=> by the help of template literels we can use dynamic values in the web

var name = "siddharth";
var age = 21;

console.log(`Name is ${name} and the age is ${age}`);

// 3. boolean

// boolean is basically a datatype which value will only true or false

var isValid = true;
console.log(typeof isValid);

//7. null

//when programmer is khow value is empty then peogrammer is use null and NaN  type  is "Object"

var age = 23;
console.log(age);

var age = null;
console.log(typeof age);

//Undefined

var a; //when we print a variable before its initilization then its give us undefined and the DATATYPE of undefined is also UNDEFINED
console.log(a);

a = 12; //Initialization
console.log(a);

a = 34; //reInitialization
console.log(a);


//5. symbol=>symbal is basically a primitive datatype ,and its make our variable unique and the datatype of symbol is also a "SYMBOL"

var sym1 = Symbol(10)
var sym2 = Symbol(10)

console.log(sym1);
console.log(sym2);

// even if pass a same value of both variables then it is also a unique
console.log(sym1===sym2);//output:false 

// console.log(typeof sym1);  output: symbol





//4. Object

