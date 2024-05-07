/*6- Realizar una web con un temporizador donde el usuario pueda ingresar un
tiempo desde donde comenzará a decrementar el contador. Debe contener los
botones, iniciar, pausar y reset.*/
document.addEventListener("DOMContentLoaded", function () {
  const $minutos = document.getElementById("minutos");
  const $segundos = document.getElementById("segundos");
  const $tiempoRestante = document.getElementById("tiempoRestante");
  const $btnIniciar = document.getElementById("btnIniciar");
  const $btnPausar = document.getElementById("btnPausar");
  const $btnReset = document.getElementById("btnReset");

  let tiempo;
  let duracion = 0;
  let idInterval;

  $btnPausar.disabled = true;
  $btnReset.disabled = true;

  const validarEntrada = () => {
    const minutos = parseInt($minutos.value) || 0;
    const segundos = parseInt($segundos.value) || 0;

    if (
      isNaN(minutos) ||
      isNaN(segundos) ||
      (minutos === 0 && segundos === 0)
    ) {
      alert("Debe ingresar valores numericos");
      return false;
    }
    return true;
  };

  const iniciarTemporizador = () => {
    if (!validarEntrada()) {
      return;
    }

    const minutos = parseInt($minutos.value) || 0;
    const segundos = parseInt($segundos.value) || 0;

    $minutos.disabled = true;
    $segundos.disabled = true;
    $btnPausar.disabled = false;
    $btnIniciar.disabled = true;
    $btnReset.disabled = true;

    if (tiempo) {
      tiempo = new Date(new Date().getTime() + duracion);
      console.log("Reanudar con duracion de " + duracion);
      duracion = 0;
    } else {
      console.log("Iniciar");
      const milisegundos = (segundos + minutos * 60) * 1000;
      tiempo = new Date(new Date().getTime() + milisegundos);
    }

    idInterval = setInterval(() => {
      const tiempoRestante = tiempo.getTime() - new Date().getTime();
      if (tiempoRestante <= 0) {
        clearInterval(idInterval);
        alert("Tiempo Terminado!!!");
        $btnPausar.disabled = true;
        $btnReset.disabled = false;
      } else {
        $tiempoRestante.textContent =
          milisegundosAMinutosYSegundos(tiempoRestante);
      }
    }, 50);
  };

  const pausarTemporizador = () => {
    clearInterval(idInterval);
    duracion = tiempo.getTime() - new Date().getTime();
    $btnPausar.disabled = true;
    $btnIniciar.disabled = false;
    $btnReset.disabled = false;
  };

  const resetTemporizador = () => {
    clearInterval(idInterval);
    tiempo = null;
    duracion = 0;
    $tiempoRestante.textContent = "00:00:00";
    $minutos.value = "";
    $segundos.value = "";
    $minutos.disabled = false;
    $segundos.disabled = false;
    $btnIniciar.disabled = false;
    $btnReset.disabled = true;
  };

  const agregarCero = (valor) => {
    if (valor < 10) {
      return "0" + valor;
    } else {
      return "" + valor;
    }
  };

  const milisegundosAMinutosYSegundos = (milisegundos) => {
    const minutos = Math.floor(milisegundos / 1000 / 60);
    milisegundos -= minutos * 60 * 1000;
    const segundos = Math.floor(milisegundos / 1000);
    const milisegundosRestantes = Math.floor((milisegundos % 1000) / 10);
    return `${agregarCero(minutos)}:${agregarCero(segundos)}:${agregarCero(
      milisegundosRestantes
    )}`;
  };

  $btnIniciar.addEventListener("click", iniciarTemporizador);
  $btnPausar.addEventListener("click", pausarTemporizador);
  $btnReset.addEventListener("click", resetTemporizador);
});
