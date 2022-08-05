var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var firstName = 'Laxmi Narayana'; // explicit type assignment
var course = "typescript"; // impicit type assignment
var city = "hyderabad";
// let city = 50; // this will throw error because the name is same for both string and number types 
var x = true;
x = "string"; // by adding ANY type we can remove the error
Math.round(x);
var u = true;
u = "string";
// For unknown type the input field must be declare and add some null value it like below
u = {
    funtion: function () {
        console.log("This is unknown example");
    }
};
if (typeof u === 'object' && u !== null) {
    u.funtion();
}
var y /*= true*/; //this is the error because true is a boolean it can not be never type
var a = undefined; // it will give the undefined value in console
var b = null; // it will give the object in console
var names = []; // this is an empty array and it does not have any leanth 
names.push("Hi! Nani"); // this is an object or value that will be pushing into names array 
names.push("How are you Doing"); // this is an object or value that will be pushing into names array 
// this is tuples example it is similar to array but it has its own predefind length and types 
var tuple;
tuple = ["Hi! Nani, Your age is", 24, true];
// tuples are must define in order we can not change the order, if we did it will throw error
tuple.push("And your are working on Typescript");
//if we push anything into tuple it will accept and added at the end of the array
// typescript objects
var employee = {
    name: "Laxmi Narayana Kota",
    id: 9,
    designation: " UI Developer"
};
// declaring the values will be same as key value pair, it does not effect the order of the value declarations
var car = { type: "BMW" };
// ? is the optional symbol, if dont give any value to it will not show any error
// emun has two properties they are STRINGS and NUMBERS
var sides;
(function (sides) {
    sides[sides["north"] = 0] = "north";
    sides[sides["east"] = 1] = "east";
    sides[sides["west"] = 2] = "west";
    sides[sides["south"] = 3] = "south";
})(sides || (sides = {}));
var sides1;
(function (sides1) {
    sides1["north"] = "North";
    sides1["east"] = "East";
    sides1["west"] = "West";
    sides1["south"] = "South";
})(sides1 || (sides1 = {})); //the vaules are declared to the keyies
var sides2;
(function (sides2) {
    sides2[sides2["north"] = 1] = "north";
    sides2[sides2["east"] = 2] = "east";
    sides2[sides2["west"] = 3] = "west";
    sides2[sides2["south"] = 4] = "south";
})(sides2 || (sides2 = {})); // initially the value is 1
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
//here assigning the values to the capitalized key and these are making alias to small letters
var car1 = {
    year: carYear,
    type: carType,
    model: carModel
};
; // initialing the some key values to RECTANGLE functions
var rectangle = {
    height: 20,
    width: 10
};
var coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
}; // here we are assigning the values to the method by using coloredRectangel property
//union OR "|" is used to know what type of parameter is using 
function msgError(msg) {
    console.log("".concat(msg)); // here the msg will appear
}
msgError("Hi to all your Tution fee is ");
msgError(250);
// this is the function expression having return type method will give the output
function getTime() {
    return new Date().getTime();
}
// this is the function expression having the void method which will reutn the nil value
function printHello() {
    console.log('Hello!');
}
// this is the parameter function expressing having the parameter a, b and assigned with types
function multiply(a, b) {
    return a * b;
}
// function parameters ara optional form in this expression  
function add(a, b, c) {
    return a + b + (c || 0);
}
// function having the default parameter with the exponent method  
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 3; }
    return Math.pow(value, exponent);
}
// function expression having the rest methood which will  not effect on the total paramenters 
function sub(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
// CASTING in the typescript
// define casting in 3 ways 
var l = "Come in to my galaxy"; //by using as keyword to casting the unknown into 'string'
var m = "do u love me like i do.....?"; // by using <> to casting the unkown into string
var d = 'hello'; // console.log(((d as unknown) as number).length); // the length property should not apply on number because it defined as string
// CLASS in typescript
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}()); // declaring the varibale with type
var person = new Person();
person.name = " Laxmi Narayan kota "; //adding the value to the varibale using the new method
// class has 3 main visibilty modifiers which affct ths visibility in the view publi, private, protected
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    return Person1;
}());
var person1 = new Person1("Hi! Laxmi Narayana How are you....?");
var Rectangle1 = /** @class */ (function () {
    function Rectangle1(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle1.prototype.getArea = function () {
        return this.width * this.height; //calculate the area of rectangle and transfored into get method
    };
    return Rectangle1;
}());
var myRect = new Rectangle1(10, 20);
//ABSTRACT CLASS
var polygon = /** @class */ (function () {
    function polygon() {
    }
    polygon.prototype.toString = function () {
        return "polygon[area = ".concat(this.getArea(), "]");
    };
    return polygon;
}());
var square = /** @class */ (function (_super) {
    __extends(square, _super);
    function square(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    square.prototype.getArea = function () {
        return this.width * this.height;
    };
    return square;
}(polygon));
var mySquare = new square(12, 36);
console.log(firstName);
console.log("Your Are Learning  " + course);
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
console.log(multiply(20, 500)); // function type parameter
console.log(add(15, 36)); // function having optional parameters
console.log(pow(5)); // function having the default parameter
console.log(sub(20, 30, 15, 5, 70)); // function  having the REST method 
console.log(l.length); //using as to convert unknow to string
console.log(l);
console.log(m.length); // using <> to convert unknow to string
console.log(m);
console.log(person); // class method
console.log(person1.getName()); // class method having visibility modifires
console.log(myRect.getArea()); // class inheritance using the impliments
console.log(mySquare.getArea()); // abstract class example
