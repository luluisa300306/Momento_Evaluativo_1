function calculartiempodeproyecto() {
    var secciones = prompt("Ingrese el número de secciones del sitio web");
    var complejidad = prompt("Ingrese el nivel de complejidad: 1 (baja), 2 (media), 3 (alta)");

    if (secciones == "" || complejidad == "") {
        alert("Debe ingresar todos los datos");
        return;
    }

secciones = parseInt(secciones);
complejidad = parseInt(complejidad);

let tiempo = secciones * complejidad;
let mensaje = "";

if (tiempo < 5) {
    mensaje = "Proyecto corto (entrega rápida)";
    } else if (tiempo < 12) {
        mensaje= "Proyecto de duración media";
    } else {
        mensaje = "Proyecto largo (alta dedicación)";
    }

    alert("Tiempo estimado del proyecto: " + mensaje);
    console.log("Secciones:", secciones);
    console.log("Complejidad:", complejidad);
    console.log("Resultado:", mensaje);
}