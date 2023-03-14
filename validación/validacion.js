
if (document.querySelector('[name="agregar_tareas"]').value.trim() !== '') {
    const agregar_tareas = document.querySelector('[name="agregar_tareas"]').value.trim();
    // Agregar tarea a localStorage
    console.log(`Tarea agregada exitosamente: ${agregar_tareas}`);
  } else {
    console.log('Por favor ingrese una tarea.');
  }
  