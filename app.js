//crea una variable de tipo array que almacena los nombres introducidos
let amigoslista = [];
//variable que almacena el nombre ingresado del campo de texto
let inputnombre = document.getElementById("amigo");
//variable para mostrar lista de amigos
let ulamigos = document.getElementById("listaAmigos");
// variable para mostrar el resultado
let ulresultado = document.getElementById("resultado");
//crea la funcion para agregar elementos al array tomando datos del campo de texto
function agregaramigo(){
  if (inputnombre.value == ""){
    alert("porfavor escribe un nombre valido");
  }
    else{
      amigoslista.push(inputnombre.value);
      // muestra la lista de amigos que se van agregando
      ulamigos.innerHTML += `<li>${inputnombre.value}</li>`;
      document.querySelector("#amigo").value = "";
    }  
}
//crea un amigo aleatorio y desactiva el boton para reiniciar el juego
function sortearamigo(){
let aleatorio = Math.floor(Math.random()*amigoslista.length);
let amigoSecreto = amigoslista[aleatorio];
ulresultado.innerHTML += `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
}
