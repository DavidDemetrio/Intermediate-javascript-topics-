/*************** GROUPING OF MATRICES BY METHODS ALREADY KNOWN ************************/

Suppose we have the following students array

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

You could to use foreach method to group students according their marks.

// Define variables
let students_category = {};
let students_fail = [];
let students_regular = [];
let students_goods = [];

// Iterate on each student
students.forEach(student => {
  const { mark } = student;
  if(mark < 60) {
    students_fail = [...students_fail, student];
  }
  if(mark >= 60 && mark <= 80.5) {
    students_regular = [...students_regular, student];
  }
  if(mark > 80.5 && mark <= 100) {
    students_goods = [...students_goods, student];
  }
});

// Define new properties to the object students_category
Object.defineProperty(students_category, 'fail', {
  value: students_fail
}); 

Object.defineProperty(students_category, 'regular', {
  value: students_regular
}); 

Object.defineProperty(students_category, 'goods', {
  value: students_goods
}); 

console.log(students_category);

************ Test this method (forEach) and check the result ********

Open the groupBy and groupByToMap folders to taste these two methods, which group an array 
according to a condition specified by the programmer. 