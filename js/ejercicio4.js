/* 4- Crear una web con un reloj que muestre la siguiente información */

const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const dia = document.getElementById("dia");
const fecha = document.getElementById("fecha");
const mes = document.getElementById("mes");
const anio = document.getElementById("anio");

function actualizarReloj() {
  const fechaActual = new Date();
  const hora = fechaActual.getHours();
  const minuto = fechaActual.getMinutes();
  const segundo = fechaActual.getSeconds();

  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  horas.textContent = hora.toString().padStart(2, "0");
  minutos.textContent = minuto.toString().padStart(2, "0");
  segundos.textContent = segundo.toString().padStart(2, "0");
  dia.textContent = dias[fechaActual.getDay()];
  fecha.textContent = fechaActual.getDate().toString().padStart(2, "0");
  mes.textContent = meses[fechaActual.getMonth()];
  anio.textContent = fechaActual.getFullYear();
}

actualizarReloj();
setInterval(actualizarReloj, 1000);
