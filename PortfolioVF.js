/*Etiquetas del AboutMe*/ 
var etiquetas = document.getElementsByClassName("aboutMe__etiquetas");
var etiquetasInfo = document.getElementsByClassName("etiquetas__info");

function opentab(nombreEtiqueta) {
    for (etiqueta of etiquetas) {
        etiqueta.classList.remove("active-link");
    }
    for (etiquetaInfo of etiquetasInfo) {
        etiquetaInfo.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(nombreEtiqueta).classList.add("active-tab");
}
