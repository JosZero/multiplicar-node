const argv  = require('./config/yargs.js').argv;
const colors = require('colors');

const { crearArchivo,listarTabla }  = require('./multiplicar/multiplicar');
const { alias } = require('yargs');

// let argv2 = process.argv;
// console.log('Limite ',argv.limite);

// console.log(argv);

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`.green))
            .catch(e => console.log(e));
    break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado ${archivo}`.red))
            .catch(e => console.log(e));
    break;

    default:
        console.log('comando no reconocido');
}
// let parametro = argv[2];
// let base = parametro.split('=')[1];


    
