let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function() {
    width = sliderIndividual[0].clientWidth;
});

setInterval(function() {
    slides();
}, intervalo);

function slides() {
    if (contador == 1) {
        slider.style.transform = "translate(0px)";
        slider.style.transition = "transform 0s";
    } else {
        slider.style.transform = "translate("+(-width*(contador-1))+"px)";
        slider.style.transition = "transform .8s";
    }
    contador++;
    if(contador > sliderIndividual.length) {
        contador = 1;
    }
}



