'use strict'

window.addEventListener('load', function(){
    let formulario = document.querySelector('#form');

    let baseConversion = document.getElementsByClassName('conversion');
    
    function convertir(cantidad, UnidadMedida){
        let base = UnidadMedida=="Docena"? cantidad:false
    }
    formulario.addEventListener('submit', function(){
        console.log(baseConversion);
    });
});


let num;
do {
num = prompt("Ingresa un número mayor a 100", 0);
} while (num <= 100 && num);
// let inicio =prompt("Desea iniciar sesión")
// if(inicio == "Si"){
//     let usuario = prompt("Ingrese su usuario:");
//     if(usuario == "Admin"){
//         let contraseña = prompt("Ingrese Contraseña:");
//         if(contraseña== "TheMaster"){
//             alert("Bienvenido");
//         }else if(contraseña == " "|| contraseña == null){
//             alert("Cancelado");
//         }else{
//             alert("Contraseña incorrecta");
//         }
//     }else{
//         alert("No te conozco")
//     }

// }else{
//     alert("Hasta pronto")
// }