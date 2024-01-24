//console.log("Hoja de Vida Interactiva Cargada");

function añadirHabilidad() {
  let newSkill = prompt("Introduce una nueva habilidad:");
  let newLevel = prompt("Introduce el nivel de la habilidad:");

  if (newSkill && newLevel) {
    let table = document.getElementById("skillsList");

    // Crear la celda para la habilidad
    let tdSkill = document.createElement("td");
    tdSkill.textContent = newSkill;

    // Crear la celda para el nivel
    let tdLevel = document.createElement("td");
    tdLevel.textContent = newLevel;

    // Crear una fila y añadir las celdas
    let tr = document.createElement("tr");
    tr.appendChild(tdSkill);
    tr.appendChild(tdLevel);

    // Añadir la fila a la tabla
    table.appendChild(tr);
  }
}
document.getElementById("addSkill").addEventListener("click", añadirHabilidad);


document.getElementById("contactButton").addEventListener("click", function () {
  let userEmail = prompt("Introduce tu correo electrónico:");
  if (userEmail) {
    alert("Gracias " + userEmail + ", me pondré en contacto contigo pronto!");
  }
});



const proyectosAnt = ["Calculadora", "Reservas", "Tienda de barrio"];

function verProyectosAnteriores() {
  // Solicitar al usuario la cantidad de proyectos que desea ver
  const cantidadProyectos = prompt(
    "Ingrese la cantidad de proyectos que desea ver:"
  );

  // Convertir la entrada del usuario a un número entero
  const cantidadProyectosInt = parseInt(cantidadProyectos);

  // Verificar si la entrada es válida
  if (!isNaN(cantidadProyectosInt) && cantidadProyectosInt > 0) {
    // Mostrar la cantidad especificada de proyectos
    for (let i = 0; i < cantidadProyectosInt; i++) {
      if (proyectosAnt[i]) {
        alert(proyectosAnt[i]);
      } else {
        alert("No hay más proyectos para mostrar.");
        break;
      }
    }
  } else {
    alert("Por favor, ingrese un número válido mayor que cero.");
  }
}
window.onload = verProyectosAnteriores;


const certificaciones = ["Java", "Javascript", "MongoDB", "Python"];

//funcion que muestra certificaciones
function mostrarCertificaciones() {
  let ul = document.getElementById("listaCertificaciones"); // Suponiendo que tienes un <ul id="listaCertificaciones"> en tu HTML

  for (let i = 0; i < certificaciones.length; i++) {
    let li = document.createElement("li");
    li.textContent = certificaciones[i];
    ul.appendChild(li);
  }
}
window.onload = mostrarCertificaciones;

function saludoPersonalizado() {
    alert("¡Gracias por visitar mi perfil!");
}

const calificarHojaDeVida = () => {
    let calificacion = prompt("Del 1 al 10, ¿cómo calificarías mi hoja de vida?");
    
    // Intenta convertir el input a un número entero
    let calificacionNumero = parseInt(calificacion);

    // Verifica si la conversión fue exitosa y si está en el rango válido
    if (!isNaN(calificacionNumero) && calificacionNumero >= 1 && calificacionNumero <= 10) {
        alert(`¡Gracias por calificar con un ${calificacionNumero}!`);
    } else {
        alert("Por favor, ingresa un número válido del 1 al 10.");
    }
}

