
/*  Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses*/

let programa = prompt ("Que carrera quieres estudiar? \n\ 1-Course \n\ 2-Carrera \n\ 3-Master");


if(programa == "1") {
    alert ("el curso tiene un costo de 4999 por mes");
} else if (programa == "2") {
    alert ("La carrera tiene un costo de 3999 por mes");
} else if (programa == "3") {
    alert ("El master tiene un costo de 2999 por mes");
} else {
    alert ("no tenemos mas programas")
}
let beca = prompt("tiene alguna beca? \n\ 4-Facebook \n\ 5-Google \n\ 6-Jesua");

if(beca == "4") {
    alert ("Tienes un descuento de 20%");
} else if (beca =="5") {
    alert ("Tienes un descuento del 15%");
} else if (beca =="6") {
    alert ("Tienes un descuento del 50%");
} else {
    alert ("lo siento");
}

Course= ("4999");
Carrera= ("3999");
Master= ("2999");

Facebook= ("0.15");
Google= ("0.20");
Jesua= ("0.50");

function Producto ( Course,Facebook) {
    let resultado = Course * Facebook;
    return resultado;
}
let resultadoProducto =  Producto (4999,0.15);
alert (`El resultado ${Course} y ${Facebook} es ${resultadoProducto}`);

if (Course == resultadoProducto) {
    alert ("resultado Es")
}