let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

// built in object
let now: Date = new Date();

// Array
let colors: string[] = ['blue', 'red', 'green'];
let myNumbers: number[] = [12, 10, 8];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: {x: number; y: number} = {
	x: 10,
	y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

function logA(a: number): void {
	console.log(a);
}

// when to use annotations
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates);

// variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

numbers.forEach(val => {
	if(val > 0) numberAboveZero = val
})