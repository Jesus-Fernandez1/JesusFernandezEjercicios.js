// ......ejercicio 1......//

console.log("---- ejercicio 1-------");

let numeroMultiplicar = prompt( "ingresa un numero")
for (let i = 0; i < 10; i++) {
    console.log(numeroMultiplicar * i);
}

//------ ejercicio 2 ------//
console.log("...ejercicio 2....");


let numero = parseInt(prompt(" ingresa un numero"))
let suma = numero


while (numero != 0) {
   numero = parseInt(prompt(" ingresa un numero"))
   suma += numero
}
console.log("la sumam de numero es");
console.log(suma);




// -------ejercicio 3-------//
console.log("-----ejercicio 3 ------");

let numeroI = 45
let numeroIngresado = 0;
let intentos = 0

do {
    numeroIngresado = parseInt(prompt( "ingresa un numero del 1 al 100"))
    if (numeroIngresado < numeroI) {
        console.log("el numero ingresado es menor ");
    } else if (numeroIngresado > numeroI) {
        console.log("el numero ingresado es mayor");
        
    }
    intentos++
    
} while (numeroIngresado != numeroI);
console.log(" felicidades lo adivinaste, lo hiciste en " + intentos + " intentos");






//-----ejercicio 4------//
console.log("----ejercicio 4-----");

let numero4 = parseInt(prompt(" ingresa un numero "))
   contador = 0;
   let i = 1

   for (i = 1; i <= numero4; i++) {
    if (numero4 % i == 0) {
        contador++;
    }
  }
    
   
   if (contador == 2) {
    console.log(" el numero " + numero4 + " es primo");
    
   }else{
    console.log( " el numero " + numero4 + " no es primo");
   }

//------ ejercicio 5-----//
console.log("------- ejercicio 5------");

numero5 = parseInt(prompt("ingrese un numero para ver todos sus dvisores"))

for (let i = 1; i <= numero5; i++) {
    if (numero5 % i == 0) 
    console.log(i + " es un divisor de " + numero5);
        
    
     }

// ----- ejercicio 6-----//

console.log("------ejercicio 6------");

let array6 = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < array6.length; i++) {
    console.log(array6[i] + " manzana")
    
}

//--------ejercicio 7-----//
console.log("------- ejercicio 7------");

console.log("ejercicio 7");
let array = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < array.length; i++) {
    let doble = array[i] * 2;
    console.log(doble);
    
}

//-------ejercicio 8-----///
console.log("------- ejercicio 8------");

let papa = {
    Nombre: "pedro",
    apellido: "rodriguez",
    sexo: "masculino",
    edad : 55
    
};

let mama = {
    Nombre: "maria",
    apellido: "rodriguez",
    sexo: "femenino",
    edad : 32
    
};

let hermano = {
    Nombre: "jose",
    apellido: "rodriguez",
    sexo: "masculino",
    edad : 25
    
};

let abuela = {
    Nombre: "gloria",
    apellido: "perez",
    sexo: "femenino",
    edad : 84
    
};

let abuelo = {
    Nombre: "bernardo",
    apellido: "rodriguez",
    sexo: "masculino",
    edad : 85
    
};

let familia = [papa,mama,hermano,abuela,abuelo]

for (let i = 0; i < familia.length; i++) {
    const element = familia[i];
    console.log(element);
    
}


//-------ejercicio 9------//
console.log("------- ejercicio 9------");

let grupo  = [2,4,5,6,7,15,8,9,10,13]

for (let i = 0; i <= grupo.length; i++) {

    if (grupo[i] % 2 == 1) {
        console.log(grupo[i]);

        
    }

    
 }

//------- ejercicio 10------//
console.log("------- ejercicio 10------");

let sumaPares = 0;
let sumaImpares = 0;
let numero10
while ( numero10 != 0) {
     numero10 = parseInt(prompt("ingrese un numero"))

    if (numero10 % 2 == 0) {
        sumaPares += numero10;
        
    }else {
        sumaImpares += numero;
    }
    
}
console.log("suma pares es: " + sumaPares + " suma impares " + sumaImpares);

// -------- ejercicio 11-----//
console.log("------- ejercicio 11------");

let arrayN = [2,4,5,6,7,15,8,9,10,13]
let mayor = 0 

for (let i = 0; i < arrayN.length; i++) {
    if (arrayN[i] > mayor) {
        mayor = arrayN[i]

    }
    
}
console.log( "el numero mayor es: " + mayor );


// ejercicio 12 // 

console.log("------- ejercicio 12------");

let arrayM = [9,4,5,6,7,1,15,8,9,10,13]
let menor = 8

for (let i = 0; i < arrayM.length; i++) {
        if (arrayM[i] < menor) {
            menor = arrayM[i]


        }
    }
    console.log("el numero menor es : " + menor);

//---------ejercicio 13---------- //


//------ejercicio 14-----//
console.log("------- ejercicio 14------");

let asterico = ""

for (let i = 0; i < 5; i++) {
    asterico += "*"
    console.log(asterico);
    
}

//-------- ejercicio 15 ------//
console.log("------- ejercicio 15------");

let asterico1 = ["*","**","***","****","*****"]

for (let i = asterico1.length - 1; i >= 0; i--) {
    
    console.log(asterico1[i]);
    
}

// -------- ejercicio 16 ------//
console.log("---------ejercicio 16-------");

let array16 = [35,22,5,9,15,28,39,67,2,6]
orden = false;
console.log(array16);

while (!orden) {
    orden = true;
    for (let i = 0; i < array16.length; i++) {
        if (array16[i] < array16 [i - 1]) {
            let temp = array16[i];
            array16[i] = array16 [i - 1];
            array16 [i - 1] = temp;
            orden = false
            
        }
        
    } console.log(array16);
    
}