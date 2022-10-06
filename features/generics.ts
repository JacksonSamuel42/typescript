class ArrayOfNumbers {
    constructor(public collection: number[]){}

    get(index: number): number {
        return this.collection[index]
    }
}

class ArrayOfString {
    constructor(public collection: string[]){}

    get(index: number): string {
        return this.collection[index]
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]){}

    get(index: number): T {
        return this.collection[index]
    }
}

const array = new ArrayOfAnything<number>([1,2,4,5])

// Generics with functions

function printString(arr: string[]):void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printAnything<T>(arr: T[]) :void{
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printAnything<string>(['a', 'b', 'c'])

// Generics constraints

class Car {
    print(){
        console.log('I am a car');
    }
}

class House {
    print(){
        console.log('I am a House');
    }
}

interface Printable {
    print(): void;
}

function printHouseOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print()
    }
}

printHouseOrCars<House>([new House(), new House()])
printHouseOrCars<Car>([new Car(), new Car()])

