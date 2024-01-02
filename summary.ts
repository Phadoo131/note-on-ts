//Must declare a variable, function (Also a return stuff like in Go), 
//interface with type 

//***************Function************************************************************  
// => User at the end is the type of the returning stuff
// => id is a param name and number is a type of a param
// => Using void instead of type if the function has no return
// => Don't forget that function is also an object as well (Same as JS)
// they can be placed as a param, type or anywhere object could.
function getUser(id: number):User{
	return User;
}

// Traditional function
function add(x: number, y: number): number {
    return x + y;
}

// Arrow function
const addArrow = (x: number, y: number): number => {
    return x + y;
};

// Arrow function with implicit return
const multiply = (x: number, y: number): number => x * y;

// Arrow function with no parameters
const greet = (): void => {
    console.log("Hello, TypeScript!");
};

// Arrow function with a single parameter
const square = (x: number): number => x * x;

//***************Variable************************************************************
let firstName: string; //or
let lastName: string = "Hongthai";
let isActive: boolean = true; 
// => If the val is never reassigned => use const instead (TS is intolerate on this)

//***************Types****************************************************************
//In TypeScript, the type keyword is used to define custom types. 
//It allows you to create a name for a type that can be used 
//throughout your code. The type keyword is not the same as let, 
//which is used to declare variables.
type StringArray = Array<string>;

//and Type or T can be used to refer to any type in TypeScript
//Just like any or T in Go
//Ex.
let something: Type;
something = "";
something = 5;

let myStringList: Array<T>;
myStringList = ["haha", "hahok", "hajed"];

//Note: If the difference object has the same or similar attribute or format
//they'll be considered as the same type


//***************Composing Types****************************************************** 
//Unions => | (ไอเส้นๆขีดเดียวคือ Union)
type WindowStates = "open" | "closed" | "minimized";
type MyBool = true | false;
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

//Unions also being used for a param as well => we can take and process any of the param
//under the | operator
function getLength(obj: string | string[]) {
  return obj.length; //For both string or string[] 
//or can handle both
//ex. below
	if (typeof obj === string){
		console.log(obj);
	}
}

//***************Generics************************************************************* 
//To specify the type of the collection (Just like in Java)
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;


//***************Interface************************************************************
//Just like in Go => Declare interface to use as a blueprint
//to create an object

interface User{
	name: string,
	id: number,
}

//object
let john: User = {
	name: "Narapong",
	id: 12467,
}

//class
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("Murphy", 1);

//Interface can be used as a blueprint for object like class
interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
 
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

//***************'declare' keyword************************************************************
//declare keyword is used to tell the compiler that a variable, 
//function, class, or module exists and is defined elsewhere. 
//It is often used to declare the types for variables or 
//to define interfaces for external libraries that may not 
//have TypeScript type definitions.

// *************** '?' in TypeScript beside from Ternary**************************************

interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
} //n? stated that this interface can has n or not both are fine.