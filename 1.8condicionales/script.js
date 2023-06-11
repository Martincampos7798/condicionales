alert ("calificacion");

let calificacion = prompt("nota")

if(calificacion <=5.9) {
    alert ("reprobado");
} else if (calificacion >=6.0 && calificacion <= 8.0 ) {
    alert ("regular");
} else if (calificacion >= 8.1 && calificacion <= 9.9) {
    alert ("bien");
} else if ( calificacion ==10) {
    alert ("excelente");
} else {
    alert (" ES ERROR");
}