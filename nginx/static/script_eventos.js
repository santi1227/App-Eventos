async function crearEvento() {
    let nombre = document.getElementById("nombre").value
    let fecha = document.getElementById("fecha").value
    let lugar = document.getElementById("lugar").value

    const data = await fetch(`/events/eventos/nombre=${encodeURIComponent(nombre)}&fecha=${fecha}&lugar=${encodeURIComponent(lugar)}`, {
        method: 'POST'
    })

    cargarEventos()
}

async function editarEventos(id) {
    const nuevoNombre = prompt("Nuevo nombre del evento: ")
    const nuevaFecha = prompt("Nueva fecha (YYYY-MM-DD): ")
    const nuevolugar = prompt("Nuevo lugar del evento: ")
    nuevoNombre
    await fetch(`/events/eventos/${id}?nombre=${encodeURIComponent(nuevoNombre)}&fecha=${nuevaFecha}&lugar=${encodeURIComponent(nuevolugar)}`, {
        method: 'PUT'
    })

    cargarEventos()
}

async function eliminarEvento(id) {
    if(confirm("Estas seguro de que quiere elinar este evento?")) {
        await fetch(`/events/eventos/${id}`, {
            method: 'DELETE'
        })
    }
    cargarEventos()
}

function cerrarSesion() {
    window.location.href = "/"
}

async function cargarEventos() {
    const resp = await fetch('/events/eventos')
    const eventos = await resp.json()

    let divEventos = document.getElementById("eventos")
    divEventos.innerHTML = ""
    eventos.forEach(ev => {
        divEventos.innerHTML += `
        <div class="evento">
            <strong>${ev.nombre}</strong><br>
            📅 ${ev.fecha} - 📍 ${ev.lugar}<br>
            <button onclick="editarEvento('${ev._id}')">✏️ Editar</button>
            <button onclick="eliminarEvento('${ev._id}')" style="background:red;">🗑️ Eliminar</button>
        </div>
        `
    })
}

cargarEventos()