let usuario = prompt("Ingrese un nombre de ususario"),
    contraseña = prompt("Ingrese contraseña");

verificacion();

function verificacion(){
    let vusuario = prompt("Vuelva a ingresar el ususario"),
     vcontraseña = prompt("vuelva a ingresar la contraseña");
     if(usuario === vusuario && contraseña === vcontraseña){
         alert("Login Exitoso")
     }else{
         alert("ERROR")
         verificacion();
     }
}