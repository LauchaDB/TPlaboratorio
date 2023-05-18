
function validFormContactarse(e){
    e.preventDefault();

    validEmail();
    validAsunto();
    validMensaje();

    if(document.getElementById("errorEmail").hidden && document.getElementById("errorEmailInvalid").hidden && document.getElementById("errorAsunto").hidden && document.getElementById("errorMensaje").hidden){
        Swal.fire('Email enviado exitosamente', '', 'success');
        document.getElementById("email").value = "";
        document.getElementById("asunto").value = "";
        document.getElementById("mensaje").value = "";
    }
}

function validFormAsociarse(e){
    e.preventDefault();

    validName();
    validDireccion();
    validTelefono();
    validDni();
    validEmail();
    validFechaNac();
    validGenero();
    validFoto();

    if(document.getElementById("errorName").hidden && document.getElementById("errorEmail").hidden && document.getElementById("errorEmailInvalid").hidden && document.getElementById("errorDireccion").hidden && document.getElementById("errorTelefono").hidden && document.getElementById("errorDni").hidden && document.getElementById("errorFecha").hidden && document.getElementById("errorGenero").hidden && document.getElementById("errorFoto").hidden){
        Swal.fire('Email enviado exitosamente', '', 'success');
        document.getElementById("name").value = "";
        document.getElementById("direccion").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("dni").value = "";
        document.getElementById("email").value = "";
        document.getElementById("nacimiento").value = "";

        const opcionesRadio = document.getElementsByName('genero');

        opcionesRadio.forEach(opcion => {
            opcion.checked = false;
        });
        document.getElementById("foto").value = "";
    }
}

function validarEstructuraEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function validName(){
    let name = document.getElementById("name").value;
    if(name == "" || name == " "){
        document.getElementById("errorName").hidden = false;
        document.getElementById("name").style.border = "2px solid rgb(255, 78, 78)";
    }else{
        document.getElementById("errorName").hidden = true;
        document.getElementById("name").style.border = "";
    }
}

function validDireccion(){
    let direccion = document.getElementById("direccion").value;
    if(direccion == "" || direccion == " "){
        document.getElementById("errorDireccion").hidden = false;
        document.getElementById("direccion").style.border = "2px solid rgb(255, 78, 78)";
    }else{
        document.getElementById("errorDireccion").hidden = true;
        document.getElementById("direccion").style.border = "";
    }
}

function validTelefono(){
    let telefono = document.getElementById("telefono").value;
    if(telefono == "" || telefono == " "){
        document.getElementById("errorTelefono").hidden = false;
        document.getElementById("telefono").style.border = "2px solid rgb(255, 78, 78)";
    }else{
        document.getElementById("errorTelefono").hidden = true;
        document.getElementById("telefono").style.border = "";
    }
}

function validDni(){
    let dni = document.getElementById("dni").value;

    if(dni == "" || dni == " "){
        document.getElementById("errorDni").hidden = false;
        document.getElementById("dni").style.border = "2px solid rgb(255, 78, 78)";
    }else{
        document.getElementById("errorDni").hidden = true;
        document.getElementById("dni").style.border = "";
        if(dni.toString().length != 8){
            document.getElementById("errorDniInvalid").hidden = false;
            document.getElementById("dni").style.border = "2px solid rgb(255, 78, 78)";
        }else{
            document.getElementById("errorDniInvalid").hidden = true;
            document.getElementById("dni").style.border = "";
        }
        
    }
}

function validEmail(){
    let email = document.getElementById("email").value;

    if(email == "" || email == " "){
        document.getElementById("errorEmail").hidden = false;
        document.getElementById("email").style.border = "2px solid rgb(255, 78, 78)";
    }else{
        document.getElementById("errorEmail").hidden = true;
        document.getElementById("email").style.border = "";
        if(!validarEstructuraEmail(email)){
            document.getElementById("errorEmailInvalid").hidden = false;
            document.getElementById("email").style.border = "2px solid rgb(255, 78, 78)";
        }else{
            document.getElementById("errorEmailInvalid").hidden = true;
            document.getElementById("email").style.border = "";
        }
    }
}

function validFechaNac(){
    let fechaNacimiento  = document.getElementById("nacimiento").value;

    if(fechaNacimiento == "" || fechaNacimiento == " "){
        document.getElementById("errorFecha").hidden = false;
        document.getElementById("nacimiento").style.border = "2px solid rgb(255, 78, 78)";
    }else{
        document.getElementById("errorFecha").hidden = true;
        document.getElementById("nacimiento").style.border = "";
    }
}

function validGenero(){
    const generoSeleccionado = document.querySelector('input[name="genero"]:checked');

    if(generoSeleccionado == null){
        document.getElementById("errorGenero").hidden = false;
    }else{
        document.getElementById("errorGenero").hidden = true;
    }
}

function validFoto(){
    const campoImagen = document.getElementById('foto');
    const archivo = campoImagen.files[0];

    if(archivo == null){
        document.getElementById("errorFoto").hidden = false;
        document.getElementById("foto").style.border = "2px solid rgb(255, 78, 78)";
    }else{
        document.getElementById("errorFoto").hidden = true;
        document.getElementById("foto").style.border = "";
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

  