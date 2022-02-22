import 'https://cdn.skypack.dev/core-js/actual/array/group-by-to-map';

// At the moment this method have a polyfill, you can use import this link
import 'https://cdn.skypack.dev/core-js/actual/array/group-by';

const students = [
    {
        name: "David López",
        mark: 80.5
    },
    {
        name: "Erick Herrera",
        mark: 60.5
    },
    {
        name: "Alicia Romero",
        mark: 90
    },
    {
        name: "Dennis Marim",
        mark: 40.8
    },
    {
        name: "Alín Guerrero",
        mark: 100
    },
    {
        name: "Daniela Paes",
        mark: 50
    }
];

const students_category = students.groupByToMap(student => {
    const { mark } = student;
    if(mark < 60) {
        return 'fail';
    }
    if(mark >= 60 && mark <= 80.5) {
        return 'regulars';
    }
    if(mark > 80.5 && mark <= 100) {
        return 'goods';
    }
});

console.log(students_category);