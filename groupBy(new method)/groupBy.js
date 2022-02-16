import 'https://cdn.skypack.dev/core-js/actual/array/group-by';

const group_numbers = [1, 2, 3, 4, 5].groupBy(number => {
    return number % 2 === 0 ? 'par' : 'impar';
});

console.log(group_numbers);

const people = ['David Gonzales', 'Cosmes Merito', 'Juana de la Flor', 'JJJWWZZZ'].groupBy(person => {
    return person.includes('les') ? 'with les' : 'without les'
});

console.log(people);