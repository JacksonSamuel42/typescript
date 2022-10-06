import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import { CharacterCollection } from "./CharacterCollection";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0])
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const characterCollection = new CharacterCollection('Xaay')
const sorter = new Sorter(characterCollection)
sorter.sort()
console.log(characterCollection.data);
