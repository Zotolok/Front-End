var opciones = document.querySelectorAll(".n");

opciones.forEach(function(opcion) {
    opcion.addEventListener('click', function() {
      // Restaura el estado normal de todos los elementos
      opciones.forEach(function(op) {
        op.style.backgroundColor = "";  // Restaura el fondo
        op.style.color = "";            // Restaura el color del texto
      });

      // Establece los estilos para el elemento actual
      localStorage.setItem("eleccion", opcion.id);
      opcion.style.backgroundColor = "gray";
      opcion.style.color = "white";
    });
  });
