/*CORRECCIÓN DESAFIO COMPLEMENTARIO 1*/ 

/*let calificacion = Number(prompt("Ingrese nota del alumno"));

for (let i= 1; calificacion <= 10; i++)

if (calificacion >=9 )
alert ("FELICITACIONES APROBADO! Seguramente estes en los primeros 10")

else if (calificacion >=6 && calificacion <=8)

alert ("FELICITACIONES APROBADO!")

else if( calificacion <=5)

alert ("DESAPROBADO")*/


/* DESAFIO 1*/

/*let usuario = prompt("Ingrese usuario"),
    contraseña = prompt("Ingrese contraseña");

    verificacion();

    function verificacion(){
        let vusuario = prompt("vuelva a ingresar el usuario"),
            vcontraseña = prompt("vuelva a ingresar contraseña")
        if(usuario === vusuario && contraseña === vcontraseña){
            alert("login Exitoso")
        }else{
            alert("ERROR!")
        }
    }*/

    /*Primer entrega proyecto final*/ 
function agregar(){

    function Persona (nombre, edad){
    this.nombre=nombre
    this.edad=edad
}

let nombreAgregar = document.getElementById("nombre").value;
let edadAgregar = document.getElementById("edad").value;

nuevoSujeto = new Persona(nombreAgregar, edadAgregar);
console.log(nuevoSujeto);
agregarPersona();
}

let baseDatos=[];
function agregarPersona(){
baseDatos.push(nuevoSujeto);
console.log(baseDatos);
document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.edad+'<tbody><td>';
};
