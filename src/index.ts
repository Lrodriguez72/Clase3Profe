console.log('Hola desde Typescript');

// Primitivos

// Number
const cantidadAlumnos = 10;
let notaNumerica: number;
notaNumerica = 5;

// String
const titulo = 'Hola esto es un titulo'

// Boolean
const estaCargando = true;

// Array

const alumnos: Array<number> = [];
const profesores: number[] = [1, 2, 3];

alumnos.push(1);

// Tuplas
const myTupla: [number, string] = [1, 'Hola Mundo'];
Promise.all([
    new Promise<number>((resolve) => resolve(1)),
    new Promise<string>((resolve) => resolve('Hola mundo')),
]).then((res) => console.log(res))

// Enum

enum Volumen {
    min = 0,
    medium = 50,
    max = 100,
}

enum Roles {
    Admin = 'admin',
    Costumer = 'costumer',
}

const volumenActual: Volumen = Volumen.max;

const clienteLoggeado = 'costumer';

if (clienteLoggeado === Roles.Costumer) {
    console.log(`Es un ${Roles.Costumer}`);
}

// Any

let cualquierCosa: any;

cualquierCosa = 10;
cualquierCosa = '';

// Void

function saludar(): any {
    console.log('Hola mundo');
    return 12;
}

// Null

const notaActual = null;

// Undefined

const valor = undefined;

// Never

function retornaNever() {
    throw new Error('ERROR');
}

// Object

const alumno: object = {
    id: 1,
    nombre: 'Juan',
    apellido: 'Perez',
};
