let formulario = document.querySelector(".formulario")// el id form no exite, por lo que cambio a la clase formulario, var no es usado actualmente
//console.log(formulario);

formulario.onsubmit = function(e) {

  e.prevenDafault();//cambio del codigo
  
  // se reescribieron las variables
  let nombreForm = formulario.elements[0]
  let edadForm = formulario.elements[1]
  let nacionalidadForm = formulario.elements[2]

  let nombre = nombreForm.value //actualizacion de variables
  let edad = edadForm.value //actualizacion de variables

  let i = nacionalidadForm.selectedIndex //actualizacion de variables
  let nacionalidad = nacionalidadForm.options[i].value//actualizacion de variables
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    nombreForm.classList.add("error")//actualizacion de la variable
  }
  if (edad < 18 || edad > 120) {
    edadForm.classList.add("error")//actualizacion de la variable
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")// added cambio
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}