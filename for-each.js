// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

//import { listNamesOfAllFruits } from "./filter-find";

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const animalNames = [];
    arr.forEach((animal) => {
        animalNames.push(animal.name);
    });
    return animalNames;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const reversedAnimalTypes = [];
    arr.forEach((animal) => {
        reversedAnimalTypes.push(animal.type);
    });
    return reversedAnimalTypes.reverse();
    
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const spanishArray = [];
    arr.forEach((item) => {
        spanishArray.push({ nombre: item.name, tipo: item.type });
    });
    return spanishArray;
    
}

