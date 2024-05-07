/* 5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset
(volver el cronómetro a 0) y pausar. */

document.addEventListener("DOMContentLoaded", function () {
  let cronometro;
  let hr = (min = seg = mili = 0);
  let enFuncionamiento = false;

  const iniciarBtn = document.getElementById("iniciar");
  const pausaBtn = document.getElementById("pausa");
  const resetBtn = document.getElementById("reset");
  const hora = document.querySelector(".hora");
  const minutos = document.querySelector(".minutos");
  const segundos = document.querySelector(".segundos");
  const milisegundos = document.querySelector(".milisegundos");

  iniciarBtn.addEventListener("click", () => {
    if (!enFuncionamiento) {
      iniciar();
      enFuncionamiento = true;
    }
  });

  pausaBtn.addEventListener("click", pausa);
  resetBtn.addEventListener("click", reset);

  function iniciar() {
    iniciarBtn.classList.add("active");
    pausaBtn.classList.remove("pausaActive");
    resetBtn.classList.remove("resetActive");

    cronometro = setInterval(() => {
      mili++;
      if (mili == 100) {
        mili = 0;
        seg++;
      }
      if (seg == 60) {
        seg = 0;
        min++;
      }
      if (min == 60) {
        min = 0;
        hr++;
      }

      hora.textContent = hr < 10 ? "0" + hr : hr;
      minutos.textContent = min < 10 ? "0" + min : min;
      segundos.textContent = seg < 10 ? "0" + seg : seg;
      milisegundos.textContent = mili < 10 ? "0" + mili : mili;
    }, 10);
  }

  function pausa() {
    if (enFuncionamiento) {
      iniciarBtn.classList.remove("active");
      pausaBtn.classList.add("pausaActive");
      clearInterval(cronometro);
      enFuncionamiento = false;
    }
  }

  function reset() {
    iniciarBtn.classList.remove("active");
    pausaBtn.classList.remove("pausaActive");
    clearInterval(cronometro);
    enFuncionamiento = false;
    hr = min = seg = mili = 0;
    hora.textContent = "00";
    minutos.textContent = "00";
    segundos.textContent = "00";
    milisegundos.textContent = "00";
  }
});
