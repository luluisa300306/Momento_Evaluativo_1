document.getElementById("viabilidadProyecto").addEventListener("click", calcularProyecto);

function calcularProyecto() {

    let tipoServicio = document.getElementById("servicio").value;
    let numeroSemanas = parseInt(document.getElementById("numeroSemanas").value);


    let estado = ""
    let mensaje = ""

    if (!tipoServicio || !numeroSemanas) {
        alert("Por favor complete todos los campos");
        return;
    }

    if (numeroSemanas < 5) {
        estado = "NO VIABLE"
        mensaje = "El tiempo es demasiado corto para un proyecto de este tipo.";
    }
    else if (numeroSemanas < 7) {
        estado = "RIESGOSO";
        mensaje = "Se puede intentar, pero hay alto riesgo de fallas o retrasos.";
    }
    else if (numeroSemanas < 9) {
        estado = "VIABLE";
        mensaje = "El tiempo estimado es adecuado para desarrollar el proyecto.";
    }
    else {
        estado = "MUY VIABLE";
        mensaje = "Hay tiempo suficiente para un desarrollo sólido y de calidad.";
    }

    document.getElementById("estadoProyecto").textContent = estado;
    document.getElementById("mensajeProyecto").textContent = mensaje;
}