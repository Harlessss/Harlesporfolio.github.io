const tecno = {
  " Diseñé y desarrollé una aplicación web que utiliza APIs en PHP para crear una experiencia interactiva. Utilicé HTML, CSS y JavaScript para la presentación y la interacción de la interfaz de usuario.": ["img/api.jpg", "api/Mendoza.chancha.harles.php"],
  "JS Diseñé y desarrollé una aplicación de lista de tareas utilizando PHP, JS, HTML y CSS. Permite agregar y eliminar tareas y utiliza localstorage para almacenar datos de forma local.": ["img/js.jpg", "validación/index.php"],
  " Página web de ropa diseñada con HTML y CSS, incluye página de inicio, categorías de ropa, detalles de producto y contacto. Totalmente responsive.": ["img/html y css.jpg", "zproyectox/index.html"],
  " Diseñé y desarrollé una aplicación web que utiliza APIs en PHP para crear una experiencia interactiva. Utilicé HTML, CSS y JavaScript para la presentación y la interacción de la interfaz de usuario.": ["img/api.jpg", "api/Mendoza.chancha.harles.php"]
};

const slider = document.querySelector('.slider');

for (const [key, value] of Object.entries(tecno)) {
  const section = document.createElement('section');
  section.classList.add('contenido-slider');

  const detalle = document.createElement('div');
  detalle.classList.add('detalle');

  const p = document.createElement('p');
  p.textContent = key;

  const enlace = document.createElement('a');
  enlace.textContent = 'Ver más';
  enlace.href = value[1];

  detalle.appendChild(p);
  detalle.appendChild(enlace);

  const imagen = document.createElement('img');
  imagen.src = value[0];

  section.appendChild(detalle);
  section.appendChild(imagen);

  slider.appendChild(section);
}
