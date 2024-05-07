/*3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda
cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista,
cada elemento ingresado en la lista debe poder ser eliminado con un botón creado
para ese fin.*/

document.addEventListener("DOMContentLoaded", function () {
  const entradaTarea = document.getElementById("entradaTarea");
  const tareaAgregar = document.getElementById("tareaAgregar");
  const listaTareas = document.getElementById("listaTareas");
  const mensajeNoTareas = document.getElementById("mensajeNoTareas");

  function actualizarMensajeNoTareas() {
    if (listaTareas.children.length === 0) {
      mensajeNoTareas.style.display = "block";
    } else {
      mensajeNoTareas.style.display = "none";
    }
  }

  tareaAgregar.addEventListener("click", function () {
    const tarea = entradaTarea.value.trim();
    if (tarea !== "") {
      agregarTarea(tarea);
      entradaTarea.value = "";
      actualizarMensajeNoTareas();
    } else {
      alert("Por favor ingresa una tarea");
    }
  });

  function agregarTarea(texto) {
    const li = document.createElement("li");
    li.textContent = texto;
    li.className =
      "list-group-item d-flex justify-content-between align-items-center my-3";

    const eliminarTarea = document.createElement("button");
    eliminarTarea.className = "btn btn-danger btn-sm";
    eliminarTarea.textContent = "Eliminar";
    eliminarTarea.addEventListener("click", function () {
      const confirmacion = confirm("¿Estás seguro de borrar?");
      if (confirmacion) {
        li.remove();
        actualizarMensajeNoTareas();
      }
    });

    li.appendChild(eliminarTarea);
    listaTareas.appendChild(li);
  }

  actualizarMensajeNoTareas();
});
