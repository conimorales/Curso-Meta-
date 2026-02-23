for (let i = 1; i <= 5; i++) {

    if (i === 3) {

        break; // Stops when i is 3
    }
    console.log(i);
}

let light = "green"
if (light == "green") {
    console.log("Drive");
} else if (light == "orange") {
    console.log("Get ready");
} else if (light == "red") {
    console.log("Don't drive");
} else {
    console.log("The light is not green, orange, or red");
}



//converting the previous if-else example with switch-case
switch(light) {
   case 'green':
       console.log("Drive");
       break;
   case 'orange':
       console.log("Get ready");
       break;
   case 'red':
       console.log("Don't drive");
       break;
   default:
       //this block will run if no condition matches
       console.log('The light is not green, orange, or red');
}



var weather = "sunny"
var temperature =30
if (weather === "sunny" && temperature > 20) {
    console.log("Go for a picnic");
} else if (weather === "rainy" || temperature < 10) {
    console.log("Stay indoors");
}



let edad = 10
if (edad >= 65) {
    console.log("Obtienes tus ingresos de tu pensión");
} else if (edad < 65 && edad > 18) {
    console.log("Cada mes recibes un salario");
} else if (edad <18) {
    console.log("Recibes un subsidio");
} else {
    console.log("El valor de la variable edad no es numérico");
}

let day= "lunes"
switch(day) {
   case 'lunes':
       console.log("Trabaja");
       break;
   case 'martes':
       console.log("Trabaja");
       break;
   case 'miercoles':
       console.log("Trabaja");
       break;
    case 'jueves':
       console.log("Trabaja");
       break;
    case 'viernes':
       console.log("Trabaja");
       break;
    case 'sabado':
       console.log("Ordena");
       break;
    case 'domingo':
       console.log("Ordena");
       break;
   default:
       //this block will run if no condition matches
       console.log('No es un día');
}
