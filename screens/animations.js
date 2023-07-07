
let contacto = document.getElementById("titleContacto");
let btnEnviar = document.getElementById("enviarContacto");

setInterval(() => {
    contacto.style.visibility = (contacto.style.visibility === "hidden") ? "visible" : "hidden";
    btnEnviar.style.backgroundColor = (btnEnviar.style.backgroundColor === "red") ? "blue" : "red";
}, 1500);

let imgMutual = document.getElementById("imgMutualPrimera");

imgMutual.style.opacity = "0";
imgMutual.style.transition = "opacity 0.5s";
setTimeout(() => {
    imgMutual.style.opacity = "1";
}, 1000);