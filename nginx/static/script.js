async function login() {
    const usuario = document.getElementById("usuario").value
    const clave = document.getElementById("clave").value

    const resp = await fetch('/auth/login?usuario=' + encodeURIComponent(usuario) + '&clave=' + encodeURIComponent(clave), {
        method: 'POST'
    })

    const data = await resp.json()

    if(data.estado == "exitoso") {
        window.location.href = "eventos.html"
    } else{
        document.getElementById("mensajelogin").innerText = "Usuario o clave incorrectos"
    }
}