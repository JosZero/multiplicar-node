// requireds 
const fs = require('fs');
const colors = require('colors');


const listarTabla = (base,limite)=>{
   
    return new Promise((resolve,reject)=>{
        let mult='';
        for (let i = 1; i <= limite; i++) {
            mult += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, mult , (err) => {
            if (err)
                reject(err)
            else 
                resolve(`tabla-${base}.txt`);
          });
    });
    
}
// 2da fomar de realizar el module.exports
// module.exports.crearArchivo
const crearArchivo = (base) => {

    return new Promise((resolve,reject)=>{
        if( !Number(base)){
            reject(`el valor introducido ${base} no es un numero`);
            return;
        }
        
        let data='';

        for(let i = 1;i<=10;i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }
        
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data , (err) => {
            if (err)
                reject(err)
            else 
                resolve(`tabla-${base}.txt`);
          });
        
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}

