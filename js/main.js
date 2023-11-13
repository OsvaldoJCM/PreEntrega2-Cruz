

let puntaje = 0;
function iniciarTest() {

    // Pregunta 1
    let pregunta = "¿De qué color es el sol?\n\nA : Amarillo \nB : Rojo\nC : blanco";
    let respuestaCorrecta = "C";
    let mensaje = "\n\nA pesar de las ilustraciones en amarillo a las que estamos acostumbrados el color del sol es blanco, de otra manera las nubes, la nieve y los osos polares serian amarillos. El motivo del por qué lo vemos amarillo es por la cantidad de gases y polvo que se acumulan en la atmósfera y dispersan la luz volviendo de ese color el sol durante el atardecer.";
    puntaje += preguntar(pregunta, respuestaCorrecta, mensaje);

    // Pregunta 2
    pregunta = "¿Cuántos planetas hay actualmente en nuestro sistema solar?\n\nA : 10 \nB : 9\nC : 8";
    respuestaCorrecta = "C";
    mensaje = "\n\nPlutón fue considerado durante mucho tiempo el noveno planeta de nuestro sistema solar. Hasta 2006 cuando se redefinió lo que significa ser un planeta y en vista de los nuevos requisitos quedó fuera de los otros 8 con la categoría de planeta menor.";
    puntaje += preguntar(pregunta, respuestaCorrecta, mensaje);

    // Pregunta 3
    pregunta = "¿Cuantos oceanos hay en la tierra? \n\nA : 5\nB : 3\nC : 4";
    respuestaCorrecta = "A";
    mensaje = "\n\nDesde el 8 de junio del 2021, se reconoce al Océano Austral como el quinto océano del mundo. Conocido extraoficialmente por muchos años este oceano es el cuerpo de agua que rodea la Antártida.";
    puntaje += preguntar(pregunta, respuestaCorrecta, mensaje);

    // Pregunta 4
    pregunta = "¿Cual es el planeta que está más cerca del sol?\n\nA : Marte\nB : Mercurio\nC : Venus";
    respuestaCorrecta = "B";
    mensaje = "\n\nDespués el sol viene Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno";
    puntaje += preguntar(pregunta, respuestaCorrecta, mensaje);

    // Pregunta 5
    pregunta = "¿Cual es el planeta más caliente del sistema solar?\n\nA : Mercurio\nB : Venus\nC : Neptuno";
    respuestaCorrecta = "B";
    mensaje = "\n\nAunque Mercurio se encuentra más cerca, Venus tiene una atmósfera compuesta por un 96% dióxido de carbono, este gas en exceso atrapa el calor que viene del sol produciendo que el planeta tenga 3 veces la temperatura de Mercurio.";
    puntaje += preguntar(pregunta, respuestaCorrecta, mensaje);

    // Mensaje por si no se alcanza el puntaje min para el premio
    while (puntaje < 10) {
        alert("Aun no has conseguido los 10 puntos para el premio, intenta de nuevo!");
        puntaje = 0;
        break;
    }

    // Premio
    while (puntaje >= 10) {
        alert("¡Felicitaciones! \n\n¡Has ganado un viaje al espacio en Estación Espacial Internacional!");
        puntaje = 0;
        break;
    }

}


function preguntar(pregunta, respuestaCorrecta, mensaje) {
    let puntos = 0;
    let respuesta;

    while ((respuesta != "A") && (respuesta != "B") && (respuesta != "C")) {
        respuesta = prompt("Responde con la letra de cada alternativa\n\n " + pregunta).toUpperCase();
        if (respuesta != "A" && respuesta != "B" && respuesta != "C") {
            alert("Respuesta inválida, intenta de nuevo.")
        }
    }

    if (respuesta == respuestaCorrecta) {
        puntos = 2;
        alert("¡Correcto!\n\nTu puntaje es : " + (puntaje + puntos) + mensaje)
        return puntos;
    } else {
        alert("Respuesta incorrecta \n\nEs la alternativa " + respuestaCorrecta + mensaje)
        puntos = 0;
        return puntos;
    }
}