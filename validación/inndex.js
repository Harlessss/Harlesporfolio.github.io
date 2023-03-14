var formulario = document.getElementById('formulario');
var contenedor_tareas = document.getElementById('contenedor_tareas');
formulario.addEventListener('submit', function() {
    var agregar_tareas = document.getElementById('agregar_tareas').value;
    localStorage.setItem(agregar_tareas, agregar_tareas);
});

for (var indice in localStorage) {
    if (typeof localStorage[indice] == 'string') {
        var div = document.createElement('div');
        div.setAttribute('class', 'tareas');
        var p = document.createElement('p');
        p.setAttribute('class', 'tarea');
        p.append(localStorage[indice]);
        div.append(p);
        var eliminarButton = document.createElement('button');
        eliminarButton.setAttribute('class', 'eliminar');
        eliminarButton.setAttribute('data-tarea', localStorage[indice]);
        eliminarButton.append('Eliminar');
        eliminarButton.onclick = function() {
            localStorage.removeItem(this.getAttribute('data-tarea'));
            this.parentNode.remove();
        };
        var colorButton = document.createElement('button');
        colorButton.setAttribute('class', 'cambiar-color');
        colorButton.setAttribute('data-tarea', localStorage[indice]);
        colorButton.append('cambiar Color');
        colorButton.onclick = function() {
            this.parentNode.style.backgroundColor = 'green';
        };
        div.append(eliminarButton);
        div.append(colorButton);
        contenedor_tareas.append(div);
    }
}
