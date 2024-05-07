/*2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
3
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto
persona, permitiendo ingresar las propiedades mediante un formulario, también
agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert
el resultado de la función correspondiente.*/

class Persona {
  constructor(nombre, edad, sexo, peso, altura, añoNacimiento, DNI) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
    this.DNI = DNI;
  }

  calcularGeneracion() {
    const generaciones = {
      "Generación Z": "Nativos digitales, hiperconectados desde pequeños.",
      Millennials:
        "Crecieron con la tecnología pero la adoptaron en su juventud.",
      "Generación X": "Vivieron la transición de lo analógico a lo digital.",
      "Baby Boomers":
        "Años de crecimiento económico y social tras la Segunda Guerra Mundial.",
      "Silent Generation":
        "Nacidos durante la Gran Depresión y la Segunda Guerra Mundial.",
    };

    let generacion;
    if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
      generacion = "Generación Z";
    } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
      generacion = "Millennials";
    } else if (this.añoNacimiento >= 1965 && this.añoNacimiento <= 1980) {
      generacion = "Generación X";
    } else if (this.añoNacimiento >= 1946 && this.añoNacimiento <= 1964) {
      generacion = "Baby Boomers";
    } else {
      generacion = "Silent Generation";
    }
    return { generacion, caracteristicas: generaciones[generacion] };
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }

  mostrarDatos() {
    console.log("Nombre:", this.nombre);
    console.log("Edad:", this.edad);
    console.log("Sexo:", this.sexo);
    console.log("Peso:", this.peso);
    console.log("Altura:", this.altura);
    console.log("Año de Nacimiento:", this.añoNacimiento);
    console.log("DNI:", this.DNI);
  }
}

function solicitarInformacionPersona() {
  let nombre = prompt("Ingrese el nombre:");
  let edad = parseInt(prompt("Ingrese la edad:"));
  while (isNaN(edad) || edad <= 0 || edad > 100) {
    edad = parseInt(prompt("Edad inválida. Ingrese la edad nuevamente:"));
  }
  let sexo = prompt("Ingrese el sexo (H, M):").toUpperCase();
  while (sexo !== "H" && sexo !== "M") {
    sexo = prompt(
      "Sexo inválido. Ingrese el sexo nuevamente (H, M):"
    ).toUpperCase();
  }
  const peso = parseFloat(prompt("Ingrese el peso:"));
  while (isNaN(peso) || peso <= 0) {
    peso = parseFloat(prompt("Peso inválido. Ingrese el peso nuevamente:"));
  }
  const altura = parseFloat(prompt("Ingrese la altura:"));
  while (isNaN(altura) || altura <= 0) {
    altura = parseFloat(
      prompt("Altura inválida. Ingrese la altura nuevamente:")
    );
  }
  const añoNacimiento = parseInt(prompt("Ingrese el año de nacimiento:"));
  while (
    isNaN(añoNacimiento) ||
    añoNacimiento < 1900 ||
    añoNacimiento > new Date().getFullYear()
  ) {
    añoNacimiento = parseInt(
      prompt(
        "Año de nacimiento inválido. Ingrese el año de nacimiento nuevamente:"
      )
    );
  }
  const DNI = parseInt(prompt("Ingrese el DNI:"));
  while (isNaN(DNI) || DNI <= 0) {
    DNI = parseInt(prompt("DNI inválido. Ingrese el DNI nuevamente:"));
  }

  return new Persona(nombre, edad, sexo, peso, altura, añoNacimiento, DNI);
}
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("personaFormulario");
  const mostrarResultados = document.getElementById("resultados");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = formulario.nombre.value;
    const edad = parseInt(formulario.edad.value);
    const sexo = formulario.sexo.value.toUpperCase();
    const peso = parseFloat(formulario.peso.value);
    const altura = parseFloat(formulario.altura.value);
    const añoNacimiento = parseInt(formulario.añoNacimiento.value);
    const DNI = formulario.DNI.value;

    const nuevaPersona = new Persona(
      nombre,
      edad,
      sexo,
      peso,
      altura,
      añoNacimiento,
      DNI
    );
    const generacion = nuevaPersona.calcularGeneracion();
    const mayorEdad = nuevaPersona.esMayorDeEdad();

    mostrarResultados.innerHTML = `            
            <h2>Resultados:</h2>
            <p>Generación: ${generacion.generacion}</p>
            <p>Rasgo característico de la generación: ${
              generacion.caracteristicas
            }</p>
            <p>¿Es mayor de edad? ${mayorEdad ? "Sí" : "No"}</p>
            <h3>Datos de la Persona:</h3>
            <p>Nombre: ${nuevaPersona.nombre}</p>
            <p>Edad: ${nuevaPersona.edad}</p>
            <p>Sexo: ${nuevaPersona.sexo}</p>
            <p>Peso: ${nuevaPersona.peso}</p>
            <p>Altura: ${nuevaPersona.altura}</p>
            <p>Año de Nacimiento: ${nuevaPersona.añoNacimiento}</p>
            <p>DNI: ${nuevaPersona.DNI}</p>
        `;

    alert("Los datos se guardaron correctamente.");
  });
});
