interface VehiculoProps {
    ruedas: number;
    marca: string;
    velocidad: number;
    acelerar?(velocidad: number): void;
}


abstract class Vehiculo implements VehiculoProps {
    ruedas: number;
    marca: string;
    velocidad = 0;
    constructor(
        marca: string,
        ruedas: number,
    ) {
        this.marca = marca;
        this.ruedas = ruedas;
    }
    acelerar(velocidad: number): void {
        this.velocidad = velocidad;
    }
}


class Motocicleta extends Vehiculo {
    constructor(marca: string) {
        super(marca, 2);
    }
}

class Camion extends Vehiculo {
    constructor(marca: string) {
        super(marca, 6);
    }
}

class Limosina extends Vehiculo {
    constructor(marca: string) {
        super(marca, 6);
    }
}


const motocicletaYamaha = new Motocicleta('Yamaha');
const motocicletaSusuki = new Motocicleta('Sukuki');

const camionMercedesBens = new Camion('Mercedes Bens');

console.log(motocicletaSusuki);
console.log(motocicletaYamaha);


camionMercedesBens.acelerar(100);
console.log(camionMercedesBens);





























// console.log('Hola desde Typescript');

// // Primitivos

// // Number
// const cantidadAlumnos = 10;
// let notaNumerica: number;
// notaNumerica = 5;

// // String
// const titulo = 'Hola esto es un titulo'

// // Boolean
// const estaCargando = true;

// // Array

// const alumnos: Array<number> = [];
// const profesores: number[] = [1, 2, 3];

// alumnos.push(1);

// // Tuplas
// const myTupla: [number, string] = [1, 'Hola Mundo'];
// Promise.all([
//     new Promise<number>((resolve) => resolve(1)),
//     new Promise<string>((resolve) => resolve('Hola mundo')),
// ]).then((res) => console.log(res))

// // Enum

// enum Volumen {
//     min = 0,
//     medium = 50,
//     max = 100,
// }

// enum Roles {
//     Admin = 'admin',
//     Costumer = 'costumer',
// }

// const volumenActual: Volumen = Volumen.max;

// const clienteLoggeado = 'costumer';

// if (clienteLoggeado === Roles.Costumer) {
//     console.log(`Es un ${Roles.Costumer}`);
// }

// // Any

// let cualquierCosa: any;

// cualquierCosa = 10;
// cualquierCosa = '';

// // Void

// function saludar(): any {
//     console.log('Hola mundo');
//     return 12;
// }

// // Null

// const notaActual = null;

// // Undefined

// const valor = undefined;

// // Never

// function retornaNever() {
//     throw new Error('ERROR');
// }

// // Object

// const alumno: object = {
//     id: 1,
//     nombre: 'Juan',
//     apellido: 'Perez',
// };


// // GENERICOS

// const animales: Array<Array<string>> = [];

// type Paginacion<T = any> = {
//     paginaActual: number;
//     paginaSiguiente: number;
//     paginaAnterior: number;
//     datos: T[];
// }

// interface PaginacionInterface<T = any> {
//     paginaActual: number;
//     paginaSiguiente: number;
//     paginaAnterior: number;
//     datos: T[];
// }

// // interface Color  'rojo' | 'azul'
// type Color = 'rojo' | 'azul' | 'verde';

// type PaginacionConLinks = PaginacionInterface & {
//     links: string[];
// }

// const paginacionConLinks: PaginacionConLinks = {
//     datos: [],
//     links: [],
//     paginaActual: 1,
//     paginaAnterior: 0,
//     paginaSiguiente: 3
// }

// const colorDeRemera: Color = 'rojo';

// const objetoPaginacion: Paginacion = {
//     datos: [1, 2],
//     paginaActual: 1,
//     paginaAnterior: 0,
//     paginaSiguiente: 2,
// }

// const paginacionStrings: Paginacion<string> = {
//     datos: ['hola', 'mundo'],
//     paginaActual: 1,
//     paginaAnterior: 0,
//     paginaSiguiente: 2,
// };


// function procesarDato<T>(dato: T): T {
//     console.log(`Hola soy un dato, ${dato}`);

//     return dato;
// }

// procesarDato<string>('3');


// interface ComponenteOpciones {
//     selector: string;
//     styleUrls: string[];
// }

// const selectoresUsados: string[] = [];


// function Component(componenteOptions: ComponenteOpciones) {
//     return function(_: any) {
//         if (selectoresUsados.indexOf(componenteOptions.selector) >= 0) {
//             throw new Error(`El selector ${componenteOptions.selector} esta usado en multiples componentes`)
//         }
//         selectoresUsados.push(componenteOptions.selector);
//     }
// }


// @Component({
//     selector: 'mi-selector',
//     styleUrls: ['mi-componente.css']
// })
// class MiComponente {}

// @Component({
//     selector: 'mi-selector',
//     styleUrls: []
// })
// class OtroComponente {}