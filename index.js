import readline from 'readline';

// Info. estudiantes

const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
},
{
    age: 48,
    examScores: [],
    gender: 'female',
    name: 'silvia'

}]

const availableMaleNames = ['pepe', 'juan', 'victor', 'leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

// Crear interface con la utilidad de node, ejecutando método:

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Comprobar si el input recibido en consola es un número:

const isInt = (num) => {
    return !Number.isNaN(num)
}

// Definir la promesa:
function getNumberFromConsole() {
    const promise = new Promise((resolve, reject) => {
        rl.question('Introduce un número entre el 1 y el 15;\n\ (pulsa 0 para salir de la app): ', (num) => {
            rl.pause();
            if (isInt(num)) {
                num = Number.parseInt(num);
                resolve(num);
            } else {
                reject('Introduce un número entre el 1 y el 15')
            }
        });
    });
    return promise;
}

// Mostrar texto con las opciones disponibles:
async function optionsAvailables () {
    let choiceUserInConsole;
  


    do {
        console.log('1. Mostrar en formato de tabla todos los alumnos.\n\
        2. Mostrar por consola la cantidad de alumnos que hay en clase.\n\
        3. Mostrar por consola todos los nombres de los alumnos.\n\
        4. Eliminar el último alumno de la clase.\n\
        5. Eliminar el último alumno aleatoriamente de la clase.\n\
        6. Mostrar por consola todos los datos de los alumnos que son chicas.\n\
        7. Mostrar por consola el número de chicos y chicas que hay en la clase.\n\
        8. Mostrar true o false por consola si todos los alumnos de la clase son chicas.\n\
        9. Mostrar por consola los nomsbres de los alumnos que tengan entre 20 y 25 años.\n\
        10. Añadir un alumno nuevo con los siguientes datos:\n\
            - nombre aleatorio.\n\
            - edad aleatoria entre 20 y 50 años.\n\
            - género aleatorio.\n\
            - listado de calificaciones vacío.\n\
        11. Mostrar por consola el nombre de la persona más joven de la clase.\n\
        12. Mostrar por consola la edad media de todos los alumnos de la clase\n\
        13. Mostrar por consola la edad media de las chicas de la clase\n\
        14. Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria (número entre 0 y 10) y añadirla a su listado de notas.\n\
        15. Ordenar el array de alumnos alfabéticamente según su nombre.');
        try {
            choiceUserInConsole = await getNumberFromConsole()
        } catch (error) {
            console.log(error)
            process.exit(0)
        }

        const femaleGender = students.filter(student => student.gender === 'female');
        const maleGender = students.filter(student => student.gender === 'male');
        const femaleStudents = student => student.gender === 'female';

        switch(choiceUserInConsole) {
            // 1. Mostrar en formato de tabla todos los alumnos.
            case 1:
                console.table(students);
                break;
            // 2. Mostrar por consola la cantidad de alumnos que hay en clase.
            case 2:
                console.log(students.length);
                break;
            // 3. Mostrar por consola todos los nombres de los alumnos.
            case 3:
                for (let student in students) {
                    console.log(students[student].name)
                };
                break;
            // 4. Eliminar el último alumno de la clase.
            case 4:
                students.pop();
                console.table(students);
                break;
            // 5. Eliminar un alumno aleatoriamente de la clase.
            case 5:
                let randomIndex = Math.floor(Math.random() * students.length);
                students.splice(random.Index, 1);
                console.table(students);
                break;
            // 6. Mostrar por consola todos los datos de los alumnos que son chicas.
            case 6:
                if(femaleGender.length > 0) {
                    console.table(femaleGender);    
                } else {
                    console.log('En este listado de clase no hay chicas')      
                } 
                break;
            // 7. Mostrar por consola el número de chicos y chicas que hay en la clase.
            case 7:
                console.log('Alumnos: ' + (maleGender.length));
                console.log('Alumnas: ' + (femaleGender.length));
                break;
            // 8. Mostrar true o false por consola si todos los alumnos de la clase son chicas.
            case 8:
                if(students.length > 0) {
                    console.log(students.every(femaleStudents));    
                } else {
                    console.log('No hay alumnos')
                }
                break;
            // 9. Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
            case 9:
                const studentsAge20and25 =students.filter(student => student.age >= 20 && student.age <= 25);
                if (studentsAge20and25.length > 0) {
                    for (let student in studentsAge20and25) {
                        console.log(studentsAge20and25[student].name)
                    };   
                } else {
                    console.log('No hay alumnos con dichas edades')
                }
                break;
            // 10. Añadir un alumno nuevo con los siguientes datos:
            case 10:
                let randomGender = availableGenders[Math.floor(Math.random() * availableGenders.length)]
                
                let randomName = randomGender === 'female' ? availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)] : availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)];

                function randomInterval(min, max) { 
                    return Math.floor(Math.random() * (max - min + 1) + min)
                };

                let randomAge = randomInterval(20, 50);

                students.push({age: randomAge, examScores: [], gender: randomGender, name: randomName});
                console.table(students);
                break;
            // 11. Mostrar por consola el nombre de la persona más joven de la clase.
            case 11:
                let listOfAges = Object.values(students).map(({age}) => age);
                let minAge = (Math.min(...listOfAges));
                let indexMinAge = listOfAges.indexOf(minAge);
                console.log (students[indexMinAge].name);
                break;
            // 12. Mostrar por consola la edad media de todos los alumnos de la clase.
            case 12:
                let total = 0;
                for (let student in students) {
                    total += students[student].age;      
                } if (students.length > 0) {
                    console.log (total / students.length)
                } else {
                    console.log ('No hay alumnos')
                }
                break;
            // 13. Mostrar por consola la edad media de las chicas de la clase.
            case 13:
                let contador = 0;
                let femaleAge = 0;
                if (femaleStudents.length > 0) {
                    for (let student in students) {
                        if (students[student].gender === 'female') {
                            femaleAge += students[student].age;      
                        }
                    } console.log (femaleAge / femaleGender.length);
                } else {
                    console.log('No hay chicas en la clase')

                }
                break;
            // 14. Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria (número entre 0 y 10) y añadirla a su listado de notas.
            case 14:
                for (let student in students) {
                    let randomScore = Math.floor(Math.random() * 11);
                    students[student]['examScores'].push(randomScore);

                };
                console.table(students)
                break;
            // 15. Ordenar el array de alumnos alfabéticamente según su nombre.
            case 15:
                students.sort((a, b) => a.name.localeCompare(b.name));
                console.table(students)
                break;
            
            default:
                process.exit(0)     
        }
    } while (choiceUserInConsole <= 15 && choiceUserInConsole > 0);

}

optionsAvailables();

