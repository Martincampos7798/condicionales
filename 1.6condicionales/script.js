let num1 = prompt ("dame un numero");
let num2 = prompt ("dame un numero");
let num3 = prompt ("dame un ultimo numero");



if(num1>=num2 && num1>=num3) {
    mayor=num1;
} else if (num2 >= num1 && num2 >= num3) {
    mayor=num2;    
} else{
    mayor=num3;
}
    
alert ("numero mayor es:" + mayor);