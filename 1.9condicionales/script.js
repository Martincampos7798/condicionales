

//El helado sin topping cuesta 50 MXN.
//El topping de oreo cuesta 10 MXN.
//El topping de KitKat cuesta 15 MXN.
//El topping de brownie cuesta 20 MXN.

alert ("helados")

let helado = prompt ("que helado desea?.\n\ 1-helado sencillo \n\ 2-helado con oreo \n\ 3-helado con kitkat \n\ 4-helado con brownie" )

if( helado == "1" ) {
    alert ("cuesta 50 mx");
} else if (helado =="2") {
    alert ("cuesta 60 mx");
} else if (helado =="3") {
    alert ("cuesta 65 mx");
} else if (helado =="4") {
    alert ("cuesta 70 mx");
} else {
    alert (`no tenemos ese topping hay helado sencillo a 50 mx`);
}