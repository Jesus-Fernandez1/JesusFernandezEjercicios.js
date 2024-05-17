

let notas = [
    {
        id: 1,
        titulo: "Sacar la basura",
        texto: "mi mama me va retar si no lo hago",
        realizada: false,
    },

    {
        id: 2,
        titulo: "Comer",
        texto: "Quedo comida ayer",
        realizada: false,
    }


    
];

let idGlobal = 2;

let ContenedorDeNotas = document.getElementById("contenedorNotas");

pintarTarjetas(notas, ContenedorDeNotas);




function pintarTarjetas(NotasACrear, ContenedorDeNotas) {
    for (let i = 0; i < NotasACrear.length; i++) {
        let nuevaNota = document.createElement("div");
        nuevaNota.classList.add("card", "rounded-4","my-4");
        nuevaNota.style.width = "15rem";
        nuevaNota.style.height = "30vh";

        nuevaNota.innerHTML = `
  <div class="card-body rounded-4  ">
      <h5 class="card-title ">${NotasACrear[i].titulo}</h5>
      <input ${NotasACrear[i].realizada ? "checked" : ""
            } type="checkbox" name="realizado" onClick="marcarRealizado(${i}, notas)" value="false" id="realizado">
      <p class="card-text ${NotasACrear[i].realizada ? "text-decoration-line-through" : ""}">${NotasACrear[i].texto}</p>
      <input class="bg-danger rounded-4" id="eliminar" onClick='borrarNota(${i}, notas)' type="button" value="Borrar Nota">
  </div>
  </div>
  `;

        ContenedorDeNotas.appendChild(nuevaNota);
    }
}

let tituloNota = document.getElementById("tituloNota");
let contenidoNota = document.getElementById("contenidoNota");

let GuardarNotaNueva = document.getElementById("GuardarNota");
GuardarNotaNueva.addEventListener("click", () => {
    crearNota(tituloNota, contenidoNota, notas);
});

function crearNota(titulo, texto, arregloNotas) {

    idGlobal++;
    let nota = {
        id: idGlobal,
        titulo: titulo.value,
        texto: texto.value,
        realizada: false
    };

    arregloNotas.push(nota)
    limpiarDivContenedor()
    pintarTarjetas(arregloNotas, ContenedorDeNotas);


}

function limpiarDivContenedor() {
    ContenedorDeNotas.innerHTML = "";

}

document.getElementById('BorrarNotaACrear').addEventListener('click', function () {
    document.getElementById('tituloNota').value = '';
    document.getElementById('contenidoNota').value = '';
});


function borrarNota(indice, notas) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] === notas[indice]) {
            notas.splice(i, 1)
        }
    }
    limpiarDivContenedor()

    pintarTarjetas(notas, ContenedorDeNotas);
}


function marcarRealizado(indice, notas) {
    notas[indice].realizada = !(notas[indice].realizada)
    limpiarDivContenedor()
    pintarTarjetas(notas, ContenedorDeNotas);
}



let buscar = document.getElementById("buscar");

buscar.addEventListener("keyup", (e) => {

    let textoBusqueda = e.target.value.trim().toLowerCase();

    let notasFiltradas = notas.filter(nota => {
        let titulo = nota.titulo.toLowerCase();
        let texto = nota.texto.toLowerCase();

        return titulo.includes(textoBusqueda) || texto.includes(textoBusqueda);
    });
    ContenedorDeNotas.innerHTML = "";

    pintarTarjetas(notasFiltradas, ContenedorDeNotas);
});


let checkboxRealizadas = document.getElementById("flexSwitchCheckDefault");

checkboxRealizadas.addEventListener("change", () => {
    let estadoCheckbox = checkboxRealizadas.checked;

    if (estadoCheckbox) {

        let notasFiltradas = notas.filter(nota => nota.realizada === true);

        ContenedorDeNotas.innerHTML = "";

        pintarTarjetas(notasFiltradas, ContenedorDeNotas);
    } else {
        ContenedorDeNotas.innerHTML = "";

        pintarTarjetas(notas, ContenedorDeNotas);
    }
});

