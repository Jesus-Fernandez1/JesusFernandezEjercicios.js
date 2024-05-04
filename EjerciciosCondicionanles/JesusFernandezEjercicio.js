
// //.....ejercicio 1...... //

// let num1 = 8;
// let num2 = 35;

// if (num1 > num2) { console.log("El primer número es mayor que el segundo ") }
// else {
//     console.log("El primer número no es mayor que el segundo ")
// }

// //.......ejercicio 2 ......//

// if (num1 === num2) {
//     console.log("Los números son iguales.");
// } else {
//     console.log("Los números son diferentes.");
// }

// //...... ejercicio 3........//
// if (num1 > num2) {
//     console.log("El primer número es mayor que el segundo.");
// } else if (num1 < num2) {
//     console.log("El segundo número es mayor que el primero.");
// } else {
//     console.log("Los números son iguales.");
// }

// //........ ejercicio 4 ........//

// let numero1 = 25;
// let numero2 = 1;
// let numero3 = 12;

// if (numero1 <= numero2 && numero1 <= numero3) {
//     console.log("El número más chico es: " + numero1);
// } else if (numero2 <= numero1 && numero2 <= numero3) {
//     console.log("El número más chico es: " + numero2);
// } else {
//     console.log("El número más chico es: " + numero3);
// }


// // .......ejercicio 5.......//
// let persona1 = {
//     nombre: "Pedro",
//     edad: 31,
//     altura: 173,
// }

// let persona2 = {
//     nombre: "juan",
//     edad: 33,
//     altura:168,
// }

//   if(persona1.edad < persona2.edad) {
//     console.log(persona2.nombre + " es mayor que " + persona1.nombre);
//   } else if ( persona2.edad < persona1.edad) {
//     console.log( persona1.nombre + " es mayor que " + persona2.nombre);
//   } else{
//     console.log(" ambos tienen la misma edad ");
//   }

//   if (persona1.altura < persona2.altura) { 
//     console.log(persona2.nombre + " es mas alto " + persona1.nombre);}
//     else if (persona2.altura < persona1.altura) {
//         console.log(persona1.nombre + " es mas alto " + persona2.nombre);  
//     }else{
//         console.log( "ambos tienen la misma altura");
//     }

//     // ejercicio 6 //

//     let nombre = prompt( "cual es su nombre:")
//     let edad = prompt ( "ingresa tu edad:")
//     let altura = prompt ("igrese su altura en cm")
//     let vision = prompt ("cual es tu vision del 1 al 10")

//     if ( edad > 17 && altura > 150 && vision >= 8 ) {
//         console.log( nombre + " felicitaciones estas capacitado para conducir ");

//     } else{
//         console.log( nombre + " no estas capacitado para conducir ");
//     }

// //.......ejercicio 7......... //
// let miNombre = "jesus";
// let nombre4 = prompt("Ingrese su nombre:")
// let pase = prompt(" Ingrese su tipo de pase (vip o normal): ")
// let poseeEntrada = prompt("¿tiene entrada? (si o no?)")

// if (nombre4 === miNombre || pase === "vip") {
//     console.log("¡Bienvenido, " + nombre4);
// } else if (poseeEntrada === "si") {
//     let utilizarEntrada = confirm("¿Desea utilizar su entrada?");
//     if (utilizarEntrada) {
//         console.log("¡Bienvenido, " + nombre4);
//     }

// }
// else {
//     let comprarEntrada = confirm("¿Desea comprar una entrada?");
//     if (comprarEntrada) {
//         let dineroDisponible = prompt("Cuanto dinero tienes disponible:");
//         if (dineroDisponible >= 1000) {
//             console.log("¡compra exitosa! ¡Bienvenido/a, " + nombre4);
//         }
//         else {
//             console.log(nombre4 + " no tiene suficiente dinero para comprar una entrada.");
//         }
//     }
// }

// //........ejercicio 8..........//


// let numeroIncognita = 4
// let numeroIngresado = prompt("Ingresa un número del 1 al 10. tienes 3 intentos")
// if (numeroIngresado == numeroIncognita) {
//     alert(" Lo adivinaste felicitaciones")
// } else if (numeroIngresado < numeroIncognita) {
//     alert("tu numero ingresado es menor")
//     numeroIngresado = prompt("Ingresa un número del 1 al 10. te quedan 2 intento")
//     if (numeroIngresado == numeroIncognita) {
//         alert("Lo adivinaste felicitaciones")
//     } else if (numeroIngresado < numeroIncognita) {
//         alert("tu numero ingresado es menor")
//         numeroIngresado = prompt("Ingresa un número del 1 al 10. ultimo intento!")
//         if (numeroIngresado == numeroIncognita) {
//             alert("Lo adivinaste felicitaciones")
//         } else {
//             alert("se acabaron tus intentos lo sentimos el numero era " + numeroIncognita )
//         }
//     } else if (numeroIngresado > numeroIncognita) {
//         alert("Ingresaste un numero mayor")
//         numeroIngresado = prompt("Ingresa un número del 1 al 10. ultimo intento")
//         if (numeroIngresado == numeroIncognita) {
//             alert("Lo adivinaste felicitaciones")
//         } else {
//             alert(" se acabaron tus intentos lo sentimos el numero era " + numeroIncognita )
//         }
//     }
// } else if (numeroIngresado > numeroIncognita) {
//     alert("tu numero ingresado es  mayor")
//     numeroIngresado = prompt("Ingresa un número del 1 al 10. Segundo intento!")
//     if (numeroIngresado == numeroIncognita) {
//         alert("Lo adivinaste felicitaciones")
//     }else if (numeroIngresado > numeroIncognita) {
//         alert("tu numero ingresado es  mayor")
//         numeroIngresado = prompt("Ingresa un número del 1 al 10. ultimo intento")
//         if (numeroIngresado == numeroIncognita) {
//             alert("Lo adivinaste felicitaciones")
//         } else {
//             alert(" se acabaron tus intentos lo sentimos el numero era " + numeroIncognita)
//         }


//     }  else if (numeroIngresado < numeroIncognita) {
//         alert("tu numero ingresado es menor")
//         numeroIngresado = prompt("Ingresa un número del 1 al 10. ultimo intento ")
//         if (numeroIngresado == numeroIncognita) {
//             alert("Lo adivinaste felicitaciones")
//         } else {
//             alert(" se acabaron tus intentos lo sentimos el numero era " + numeroIncognita)
//         }
//     }
// }

// // .........ejercicio 9...... //

// let edad9 = prompt("Ingresa tu edad")
// if (edad9 <= 12) {
//     console.log("Eres un infante")
// } else if (edad9 >= 13 && edad9 <= 18) {
//     console.log("Eres un adolecente")
// } else if (edad9 >= 19 && edad9 <= 45) {
//     console.log("Eres un mayor joven")
// } else if (edad9 >= 46) {
//     console.log("Eres un anciano")
//     if (edad9 >= 100) {
//         alert("En realidad tienes esa edad")
//     }
// }

// // ...... ejercicio 10 .........//

// let jugador1 = prompt("jugador 1  ingresa (piedra, papel o tijera)")
// let jugador2 = prompt("jugador 2  ingresa (piedra, papel o tijera)")

// if ((jugador1 == "piedra" && jugador2 == "piedra") || (jugador1 == "papel" && jugador2 == "papel") || (jugador1 == "tijera" && jugador2 == "tijera")) {
//     console.log("hay un empate ");
// } else if ((jugador2 == "piedra" && jugador1 == "tijera") || (jugador2 == "papel" && jugador1 == "piedra") || (jugador2 == "tijera" && jugador1 == "papel")) {
//     console.log("jugador dos gana");
// } else if ((jugador1 == "piedra" && jugador2 == "tijera") || (jugador1 == "papel" && jugador2 == "piedra") || jugador1 == "tijera" && (jugador2 == "papel")) {
//     console.log("jugador uno gana");
// } else {
//     console.log("uno de los dos jugadores hizo trampa");
// }



// //........ ejercicio 11........///

// let colores = prompt("Ingresa un color")
// switch (colores) {
//     case "blanco":
//         console.log("falta de color");
//         break;
//     case "negro":
//         console.log("falta de color");
//         break;
//     case "verde":
//         console.log("el color de la naturaleza");
//         break;
//     case "azul":
//         console.log("el color del agua ");
//         break;
//     case "amarillo":
//         console.log("el color del sol");
//         break;
//     case "rojo":
//         console.log("el color del fuego");
//         break;
//     case "marron":
//         console.log("el color de la tierra");
//         break;
//     default:
//         console.log("Excelente eleccion, no lo teniamos pensado.");
//         break;
// }


// // .......ejercicio 12.......////



// let numb1, numb2, suma, resta, multiplicacion, division
// numb1 = parseInt(prompt("ingresa el primer numero"))
// let operacion = prompt(" Si quieres sumar ingresa  (+)  restar ingresa  (-)  multiplicar ingresa (*) dividir ingresa  (/) "
// )
// numb2 = parseInt(prompt("ingresa el segundo numero"))

// switch (operacion) {
//     case "+":
//         suma = numb1+numb2
//         console.log( "la suma es = " + suma)
//         break;
//     case "-":
//         resta = numb1-numb2
//         console.log(" la resta es = " + resta)
//         break;
//     case "*":
//         multiplicacion = numb1*numb2
//         console.log("La multiplicacion es =" + multiplicacion)
//         break;
//     case "/":
//         division = numb1/numb2
//         if (numb2 == 0) {
//             console.log(" su operacion no se puede realizar ")
//         } else {
//             console.log( "la division es =" + division)
//         }

//         break;
//     default:
//         console.log("error")
// }

//..... ejercicio 13....///

let DatosDni = {
    nombre: prompt("Ingrese su nombre"),
    apellido: prompt("Ingrese su apellido"),
    sexo: prompt("Ingrese su sexo"),
    numeroDocumento: prompt("Ingrese su numéro de DNI"),
    pais: prompt("Ingrese su pais natal"),
    fechaNacimiento: prompt("Ingrese su fecha de nacimiento dd/mm/aaaa"),
    lugarDeNacimiento: prompt("Ingrese su lugar de nacimiento"),
    lugarDeExpedicion: prompt("Ingrese lugar de expedicion del documento"),
    fechaDeExpedicion: prompt("Ingrese fecha de expedicion del documento dd/mm/aaaa")
}
let dni
dni = " Nombre: " + DatosDni.nombre + " Apellido: " + DatosDni.apellido + " Sexo: " + DatosDni.sexo + " Numero de documento: " + DatosDni.numeroDocumento + " Pais: " + DatosDni.pais + " Fecha de nacimiento: " + DatosDni.fechaNacimiento + " Ciudad de nacimiento: " + DatosDni.lugarDeNacimiento + " Lugar de expedicion: " + DatosDni.lugarDeExpedicion + " Fecha de expedicion " + DatosDni.fechaDeExpedicion
alert(dni)
dni = confirm(" ¿ Estos son sus datos ingresados ?")
if (dni == true) {
    console.table(DatosDni)
    alert("Su registro fue exitoso")
} else {
    console.log("Vuelve a intentarlo detro de 1 mes")
    alert("Vuelve a intentarlo  dentro de 1 mes")
}




