
//-------ejercicio 1------///
let calcularImc = document.getElementById("calcularIMC")
let resultado = document.getElementById("ResultadoIMC")

calcularImc.addEventListener("click", function () {
    let pesoInput = document.getElementById("peso");
    let peso = pesoInput.value
    let estaturaInput = document.getElementById("estatura")
    let estaturaEnCm = estaturaInput.value
    let estaturaEnMt = estaturaEnCm / 100;

    let imc = Math.round(peso / (estaturaEnMt * estaturaEnMt));
    resultado.innerHTML = "tu IMC ES " + imc.toFixed(2)
})

//--------ejercicio 2---------//
let dollarsInput = document.getElementById("dollars");
let pesosInput = document.getElementById("pesos");

let conversionRate = 3900; 

function convertDollarsToPesos() {
    let dollars = parseFloat(dollarsInput.value);
    let pesos = dollars * conversionRate;
    pesosInput.value = pesos.toFixed(0);
}

function convertPesosToDollars() {
    let pesos = parseFloat(pesosInput.value);
    let dollars = pesos / conversionRate;
    dollarsInput.value = dollars.toFixed(2);
}

dollarsInput.addEventListener("input", convertDollarsToPesos);
pesosInput.addEventListener("input", convertPesosToDollars);

convertDollarsToPesos();
convertPesosToDollars();

