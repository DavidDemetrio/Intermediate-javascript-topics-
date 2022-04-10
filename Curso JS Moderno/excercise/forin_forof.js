const dates = ["2021-10-01", "2021*04*03", "01&12/2020", "20-12-31", "11-01-2021"];
const students = {
    student1: {
        name: "John",
        lastName: "Perez",
        average: 9.999
    },
    student2: {
        name: "David",
        lastName: "López",
        average: 99.8
    },
    student3: {
        name: "Juana",
        lastName: "López",
        average: 5.9
    },
    student4: {
        name: "Erick",
        lastName: "Quintana",
        average: 3.5
    },    
    student5: {
        name: "Emilio",
        lastName: "López",
        average: 8
    },    
    student6: {
        name: "David Demetrio",
        lastName: "López",
        average: 7
    }
};
const people = {
    maria: {
        edad: 21
    },
    juan: {
        edad: 11
    },
    pablo: {
        edad: 14
    }
};
/** 
 * De acuerdo al quien tenga un average mayor, imprimir una frase de elogeo, y el que tiene un promedio menor, una frase para
 * que suba más su calificación
*/
/* for (const student in students) {
    if (students[student].average < 6) {
        console.log(`Estás reprobado ${students[student].name}\nTu calificación es de: ${students[student].average}`);
    } else if(students[student].average >= 6 && students[student].average < 10) {
        console.log(`¡Buena calificación ${students[student].name} sigue esforzándote!`);
    } else {
        students[student].average = 10;
        console.log(`¡Excelente ${students[student].name} tu promedio es de ${students[student].average} sigue así!`);
    }
} */

/* for (const [,attr] of Object.entries(students)) {
    console.log(attr);
    if (attr.average < 6) {
        console.log(`Estás reprobado ${attr.name}\nTu calificación es de: ${attr.average}`);
    } else if(attr.average >= 6 && attr.average < 10) {
        console.log(`¡Buena calificación ${attr.name} sigue esforzándote!`);
    } else {
        attr.average = 10;
        console.log(`¡Excelente ${attr.name} tu promedio es de ${attr.average} sigue así!`);
    }
} */

// Imprimir de la fecha mayor a la menor
/* console.log("Start:",dates);
let i = 0;
for (let date of dates) {
    const numbers = /[0-9]/;
    const year = date.slice(0,4);
    for (let digito of year) {
        const is_number = numbers.test(digito);
        if (!is_number) {
            const year_in_array = dates[i].split(digito);
            console.log(year_in_array);
            const full_year = year_in_array.reverse();
            dates[i] = full_year.join('-');
        }
    }

    i++;
}

console.log("Fin:",dates);
for (let [nombre, edad] of  Object.entries(people)) {
    console.log(`${nombre} tiene ${edad.edad}`);
} */

/** 
 * Uso del if ternario y del return dentro de una estructura de control
*/
// for (let [persona, edad] of Object.entries(people)) {
//     edad.edad >= 18 ? 
//         console.log(`${persona} es mayor de edad.`) 
//         : 
//         console.log(`${persona} no es mayor de edad`);
// }


/** 
 * Dado unos valores de un cubo, determinar su área y volumen.
 * Para ello intenta de usar operadores ternarios y return en if dentro de una funcion
*/
// Obtener ancho, alto y largo
// let ancho = 34;
// let largo = 34;
// let alto = 34;

// function calcular_area(largo, ancho) {
//     const area = Number.parseFloat(largo) * Number.parseFloat(ancho);
//     return area;
// }

// function calcular_volumen(largo, ancho, alto) {
//     let volumen = 0;
//     largo == ancho &&  largo == alto && ancho == alto ? 
//         (
//             volumen = Number.parseFloat(largo) * Number.parseFloat(ancho) * Number.parseFloat(alto)
//         ) 
//         : 
//         (
//             volumen = "Es otra cosa"
//         );
//     return volumen;
// }

// const area = calcular_area(largo, ancho);
// let volumen = calcular_volumen(largo, ancho, alto);
// console.log(area);
// console.log(volumen);

// Imprimir una oración de cosas que hice hoy en día

const oracion = ["Estuve", "checando", "lo", "del", "video", "de", "la", "presentacion"];

for (let oration of oracion) {
    console.log(oration);
}

for (let student in students) {
    console.log(students[student].name);
}

for (let [llave, valor] of Object.entries(students)) {
    console.log(llave);
    console.log(valor.name);
}