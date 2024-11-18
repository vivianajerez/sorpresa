$(document).ready(function () {
    // Mostrar ventana emergente al cargar
    $("#ventana-emergente").show();

    // Cerrar ventana emergente
    $("#cerrar-emergente").on("click", function () {
        $("#ventana-emergente").fadeOut();
    });

    // Mostrar contenido según el menú seleccionado
    $(".menu-link").on("click", function (e) {
        e.preventDefault();
        $(".contenido").hide();
        const target = $(this).attr("href");
        $(target).fadeIn();
    });

    // Mostrar mensajes especiales por categoría
    $(".mensaje-boton").on("click", function () {
        const categoria = $(this).data("categoria");
        const mensajes = {
            feliz: [
                "¡Anita, tu energía ilumina todo a tu alrededor! 😊",
                "Cuando sonríes, todo parece mejor. Sigue así, ¡estás conquistando el mundo! 🌍",
                "Recuerda que lo bueno siempre llega a quienes se esfuerzan como tú. 💪",
                "Cada día te conviertes en una persona más increíble. ¡Sigue brillando! ✨",
                "Me alegra mucho verte feliz, ¡tu felicidad me da fuerzas para seguir adelante! 🎉",
                "Las cosas buenas vienen a quienes tienen un corazón tan grande como el tuyo. 💖",
                "Anita, ¡el mundo necesita más personas como tú! Nunca dejes de brillar. 🌟",
                "Tu pasión y dedicación son admirables, ¡sigue persiguiendo tus sueños! 🚀",
                "Tus logros son el reflejo de tu esfuerzo y perseverancia, ¡te admiro mucho! 👏",
                "Siempre que sonríes, haces que todo a tu alrededor sea mejor. ¡Sigue sonriendo! 😄"
            ],
            triste: [
                "Sé que las cosas no siempre son fáciles, pero tienes una fuerza increíble dentro de ti. 💖",
                "Aunque ahora las cosas parezcan difíciles, recuerda que las tormentas siempre pasan. 🌧️",
                "Anita, en los momentos difíciles es cuando más brillamos. Todo pasará, te lo prometo. 🌈",
                "No estás sola, siempre estaré aquí para apoyarte. Juntas podemos superar cualquier cosa. 🤗",
                "La vida te pone desafíos, pero tú eres más fuerte de lo que imaginas. ¡Ánimo! 💪",
                "A veces las pruebas son duras, pero recuerda que eres más grande que cualquier obstáculo. 💫",
                "Aunque sientas tristeza, en tu corazón hay mucha fortaleza para salir adelante. 💪",
                "Nunca olvides que eres valiosa y capaz, no dejes que las dificultades te hagan dudar. 🌟",
                "A veces la tristeza nos enseña a valorar lo que realmente importa. ¡Ánimo, todo mejorará! 🌸",
                "Sé que no es fácil, pero tienes la capacidad de superar cualquier adversidad. ¡Te aprecio mucho! ❤️"
            ],
            animo: [
                "Anita, los días difíciles son solo una parte del camino hacia algo mucho mejor. ¡Sigue adelante! 🚀",
                "Tu dedicación y esfuerzo siempre son notados. ¡Nada ni nadie puede detener tu éxito! 🌟",
                "Cuando las cosas se pongan difíciles, recuerda que todo lo que haces tiene un propósito. 🎯",
                "Eres capaz de todo lo que te propongas, no dejes que el estrés te haga dudar de ti misma. 💪",
                "No te rindas, los logros que tienes por delante son mucho más grandes de lo que imaginas. 🎉",
                "Aunque el camino sea difícil, siempre recuerda que lo que realmente importa es el esfuerzo que pones. 🛤️",
                "Confía en ti misma, porque todo lo que has logrado hasta ahora es solo el comienzo. 🌟",
                "Tienes el poder de convertir tus sueños en realidad, ¡sigue trabajando con el corazón! 💖",
                "Recuerda que todo lo que estás haciendo te llevará al éxito que mereces. ¡No te detengas! 🏆",
                "Tu fuerza es más grande que cualquier desafío. ¡Animo, Anita! El mejor capítulo de tu vida está por comenzar. 📚"
            ]
        };

        let contenido = "<ul>";
        mensajes[categoria].forEach(function (mensaje) {
            contenido += `<li>${mensaje}</li>`;
        });
        contenido += "</ul>";
        $("#mensajes-contenido").html(contenido);
    });

    // Funcionalidad para añadir recuerdos
    $("#form-recuerdo").on("submit", function (event) {
        event.preventDefault();

        const nuevoRecuerdo = $("#nuevo-recuerdo").val().trim(); // Obtiene el texto del input
        if (nuevoRecuerdo) {
            const nuevoElemento = `<li>🌟 ${nuevoRecuerdo}</li>`; // Formato para el nuevo recuerdo
            $("#lista-recuerdos").append(nuevoElemento); // Añade el recuerdo a la lista
            $("#nuevo-recuerdo").val(""); // Limpia el campo del formulario
        } else {
            alert("Por favor, escribe un recuerdo válido.");
        }
    });
});


   