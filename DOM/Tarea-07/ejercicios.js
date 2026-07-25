const contador = document.querySelector("#contador");
const btnIniciar = document.querySelector("#btnIniciar");

let numero = 10;
btnIniciar.addEventListener("click", () => {

    const intervalo = setInterval(() => {

        numero--;

        contador.textContent = numero;
        if (numero === 0) {
            clearInterval(intervalo);
            contador.textContent = "¡Despegue! 🚀";
        }

    }, 1000);

});