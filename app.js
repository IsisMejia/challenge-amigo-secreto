let amigos = [];

// se agrega nombre
function agregarAmigo() {
    let input = document.getElementById("amigo"); 
    let nombre = input.value.trim(); 

    // Validar que no esté vacío
    if (nombre === "") {
        alert(" Ingresa un nombre");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    

    // Mostrar la lista actualizada
    mostrarAmigos();
}

// Función para mostrar la lista en la pantalla
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar antes de mostrar

    // Recorrer el array y crear <li> para cada nombre
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("⚠️ La lista está vacía, agrega nombres primero.");
        return;
    }

    // Generar índice aleatorio
    let indice = Math.floor(Math.random() * amigos.length);

    // Mostrar resultado
    let resultado = document.getElementById("resultado");
    resultado.textContent = "El amigo secreto es: " + amigos[indice];
}

