
function validForm(e){
    e.preventDefault();

    validEmail();
    validAsunto();
    validMensaje();

    if(document.getElementById("errorEmail").hidden && document.getElementById("errorEmailInvalid").hidden && document.getElementById("errorAsunto").hidden && document.getElementById("errorMensaje").hidden){
        alert("todo valido, listo para enviar el mail");
        document.getElementById("email").value = "";
        document.getElementById("asunto").value = "";
        document.getElementById("mensaje").value = "";
    }
}

function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function validEmail(){
    let email = document.getElementById("email").value;

    if(email == "" || email == " "){
        document.getElementById("errorEmail").hidden = false;
        document.getElementById("email").style.border = "2px solid rgb(255, 78, 78)";
    }else{
        document.getElementById("errorEmail").hidden = true;
        document.getElementById("email").style.border = "";
        if(!validarEmail(email)){
            document.getElementById("errorEmailInvalid").hidden = false;
            document.getElementById("email").style.border = "2px solid rgb(255, 78, 78)";
        }else{
            document.getElementById("errorEmailInvalid").hidden = true;
            document.getElementById("email").style.border = "";
        }
    }
}

function validAsunto(){
    let asunto = document.getElementById("asunto").value;
    if(asunto == "" || asunto == " "){
        document.getElementById("errorAsunto").hidden = false;
        document.getElementById("asunto").style.border = "2px solid rgb(255, 78, 78)";
    }else{
        document.getElementById("errorAsunto").hidden = true;
        document.getElementById("asunto").style.border = "";
    }
}

function validMensaje(){
    let contenido = document.getElementById("mensaje").value;
    if(contenido == "" || contenido == " "){
        document.getElementById("errorMensaje").hidden = false;
        document.getElementById("mensaje").style.border = "2px solid rgb(255, 78, 78)";
    }else{
        document.getElementById("errorMensaje").hidden = true;
        document.getElementById("mensaje").style.border = "";
    }
}

  