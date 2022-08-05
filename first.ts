let firstName:string = 'Laxmi Narayana'; // explicit type assignment

let course = "typescript"; // impicit type assignment

let city:string = "hyderabad";
// let city = 50; // this will throw error because the name is same for both string and number types 

let x:any = true;
  x ="string"; // by adding ANY type we can remove the error
Math.round(x)

let u:unknown = true;
u = "string";
// For unknown type the input field must be declare and add some null value it like below
u = { 
    funtion: ()=>{
        console.log("This is unknown example");
    }
}  as { funtion:()=> void}
if(typeof u === 'object' && u !== null) {
    (u as { funtion: Function }).funtion(); 
  }

let y:never /*= true*/ ;        //this is the error because true is a boolean it can not be never type

let a:undefined = undefined; // it will give the undefined value in console
let b:null = null  // it will give the object in console

const names:string[] = [];// this is an empty array and it does not have any leanth 
names.push("Hi! Nani"); // this is an object or value that will be pushing into names array 
names.push("How are you Doing"); // this is an object or value that will be pushing into names array 


// this is tuples example it is similar to array but it has its own predefind length and types 
let tuple:[string, number, boolean];
tuple = ["Hi! Nani, Your age is", 24, true]; 
// tuples are must define in order we can not change the order, if we did it will throw error
tuple.push("And your are working on Typescript");
//if we push anything into tuple it will accept and added at the end of the array


// typescript objects

const employee:{name:string,id:number, designation:string} = {
    name:"Laxmi Narayana Kota",
    id: 9,
    designation:" UI Developer"
}
// declaring the values will be same as key value pair, it does not effect the order of the value declarations

const car:{type:string, model?:string} = { type:"BMW"}
// ? is the optional symbol, if dont give any value to it will not show any error

// emun has two properties they are STRINGS and NUMBERS
enum sides {
    north,      // initially the value is 0 
    east,
    west,
    south
}
enum sides1 { north="North", east="East", west= "West", south="South"} //the vaules are declared to the keyies
enum sides2 {north=1, east, west, south} // initially the value is 1

// ALIASES are used for string in simple menthod,  more complex in objects and arrays
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
};// here assigning the types to name with capitalized words without any values to it

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla" 
//here assigning the values to the capitalized key and these are making alias to small letters
const car1: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
//here returning the assgined values to the given name of array

//This is the INTERFACE which is similar to aliases and interface has second type is EXTENDING interface 
interface Rectangle {
    height: number,
    width: number
  }; // initialing the some key values to RECTANGLE functions
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };
  //here provideing the the values to the RECTANGLE by using interface of rectangle method
  

// this is the EXTENDED if interface
interface Rectangle {
    height: number,
    width: number
  } // here declaring the varibale names with types
interface ColoredRectangle extends Rectangle {
    color: string
  } // here adding the property to the method by using extend method
const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
}; // here we are assigning the values to the method by using coloredRectangel property
  
//union OR "|" is used to know what type of parameter is using 

function msgError(msg:string | number){ // here the msg is the assigned to string or number type
    console.log(`${msg}`) // here the msg will appear
}
msgError("Hi to all your Tution fee is ")
msgError(250)


 // this is the function expression having return type method will give the output
function getTime(): number {
    return new Date().getTime();
}                      
// this is the function expression having the void method which will reutn the nil value
function printHello(): void {
    console.log('Hello!');
}
// this is the parameter function expressing having the parameter a, b and assigned with types
function multiply(a: number, b: number) {
    return a * b;
}
// function parameters ara optional form in this expression  
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}
// function having the default parameter with the exponent method  
function pow(value: number, exponent: number = 3) {
    return value ** exponent;
}
// function expression having the rest methood which will  not effect on the total paramenters 
function sub(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}

// CASTING in the typescript
// define casting in 3 ways 
let l:unknown = "Come in to my galaxy" //by using as keyword to casting the unknown into 'string'
let m:unknown = "do u love me like i do.....?" // by using <> to casting the unkown into string
let d = 'hello'; // console.log(((d as unknown) as number).length); // the length property should not apply on number because it defined as string

// CLASS in typescript

class Person{
    name: string;
} // declaring the varibale with type
const person = new Person();
person.name =" Laxmi Narayan kota "; //adding the value to the varibale using the new method

// class has 3 main visibilty modifiers which affct ths visibility in the view publi, private, protected
class Person1 {
    private name: string; // using the private modifire to create a  inside class only
public constructor(name: string) {
    this.name = name;
  }  
public getName(): string {   //using public class get the name from constructor and assigned to private modifires 
    return this.name;
  }
}  
const person1 = new Person1("Hi! Laxmi Narayana How are you....?");

// extending the class using the interface by implements keyword
interface Shape {
    getArea: () => number; //using interface class for a shape of rectangle and getting the values using the get method 
  }
   class Rectangle1 implements Shape {  // assigning the values to the shape by using impliment from rectangle
    public constructor(protected readonly width: number, protected readonly height: number) {}
    public getArea(): number {
      return this.width * this.height; //calculate the area of rectangle and transfored into get method
    }
  }
  const myRect = new Rectangle1(10,20);
  
//ABSTRACT CLASS

abstract class polygon{
    public abstract getArea():number;
    public toString(): string {
        return `polygon[area = ${this.getArea()}]`;
    }
}  
class square extends polygon{
    public constructor(protected readonly width:number, protected readonly height:number){
        super();
    }
    public getArea(): number {
    return this.width * this.height;
    }
}
const mySquare = new square (12,36);








console.log(firstName);
console.log("Your Are Learning  "+ course);
console.log(x);
console.log("All the Best");
console.log(typeof a);
console.log(typeof b);
console.log(names);
console.log(tuple);
console.log(employee);
console.log(car);
console.log("The cordinates values are in STRING " + sides.north);
console.log("The cordinates are declared as " + sides1.north);
console.log("The cordinates value as in NUMBER " + sides2.north);
console.log(car1);
console.log(rectangle);
console.log(coloredRectangle);
console.log(getTime()); // function of return method
console.log(multiply(20,500)); // function type parameter
console.log(add(15,36)); // function having optional parameters
console.log(pow(5)); // function having the default parameter
console.log(sub(20,30,15,5,70));  // function  having the REST method 
console.log((l as string).length); //using as to convert unknow to string
console.log(l as string);
console.log((<string>m).length) // using <> to convert unknow to string
console.log((<string>m));
console.log(person); // class method
console.log(person1.getName()); // class method having visibility modifires
console.log(myRect.getArea()); // class inheritance using the impliments
console.log(mySquare.getArea()); // abstract class example