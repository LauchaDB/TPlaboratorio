window.onload = function() {
    setTimeout(function() {
        let encabezado = document.getElementById('nameClubEncabezado');
        encabezado.style.color = 'red';

        let historia = document.getElementById('historia');
        historia.style.color = 'red';

        let ubicacionClub = document.getElementById('ubicacionClub');
        ubicacionClub.style.color = 'red';
    }, 2500);
  };

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

    if(document.getElementById("errorName").hidden && document.getElementById("errorEmail").hidden && document.getElementById("errorEmailInvalid").hidden 
        && document.getElementById("errorDireccion").hidden && document.getElementById("errorTelefono").hidden && document.getElementById("errorDni").hidden 
        && document.getElementById("errorFecha").hidden && document.getElementById("errorFechaMayorEdad").hidden && document.getElementById("errorFechaImposible").hidden 
        && document.getElementById("errorGenero").hidden && document.getElementById("errorFoto").hidden){

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
    let fechaNac = fechaNacimiento.split("-");

    if(fechaNacimiento == "" || fechaNacimiento == " "){
        document.getElementById("errorFechaMayorEdad").hidden = true;
        document.getElementById("errorFechaImposible").hidden = true;

        document.getElementById("errorFecha").hidden = false;
        document.getElementById("nacimiento").style.border = "2px solid rgb(255, 78, 78)";
    }else if(fechaNac[0] < 1918){
        document.getElementById("errorFechaMayorEdad").hidden = true;
        document.getElementById("errorFecha").hidden = true;

        document.getElementById("errorFechaImposible").hidden = false;
        document.getElementById("nacimiento").style.border = "2px solid rgb(255, 78, 78)";
    }else if(!esMayorDeEdad(fechaNac[0], fechaNac[1], fechaNac[2])){
        document.getElementById("errorFecha").hidden = true;
        document.getElementById("errorFechaImposible").hidden = true;

        document.getElementById("errorFechaMayorEdad").hidden = false;
        document.getElementById("nacimiento").style.border = "2px solid rgb(255, 78, 78)";
    }else{
        document.getElementById("errorFechaMayorEdad").hidden = true;
        document.getElementById("errorFechaImposible").hidden = true;
        document.getElementById("errorFecha").hidden = true;
        document.getElementById("nacimiento").style.border = "";
    }
}

function esMayorDeEdad(año, mes, dia) {
    let fechaNacimiento = new Date(año, mes - 1, dia);
    let fechaActual = new Date();
  
    let diferencia = fechaActual.getTime() - fechaNacimiento.getTime();
  
    let edad = diferencia / (1000 * 60 * 60 * 24 * 365);
  
    return edad >= 18;
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
function getProducts(){
    
    fetch('/productos.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const contenedorPadre = document.getElementById('divTienda');
        
        data.forEach(objeto => {
        const divCard = document.createElement('div');
        divCard.className = 'col-sm-12 col-md-6 col-lg-4 ';

        divCard.innerHTML = `
            <div class="card cardProducto">
                <img src="${objeto.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${objeto.name}</h5>
                    <p class="card-text">$${objeto.precio}</p>
                    <a href="" class="btn btn-primary">Añadir al carrito</a>
                </div>
            </div>
        `;

        contenedorPadre.appendChild(divCard);
        });
    })
    .catch(error => {
        // Manejo de errores
        console.error('Error al cargar el archivo JSON:', error);
    });

}

getProducts();

function getNoticias(){
    
    fetch('/noticias.json')
    .then(response => response.json())
    .then(data => {
        const contenedorPadre = document.getElementById('divDeNoticias');
        let contadorCarrousel = 1;
        
        data.forEach(objeto => {
        const divCard = document.createElement('div');
        divCard.className = 'col-sm-12 col-md-6 col-lg-4 cardNoticia';

        divCard.innerHTML = `
            <div class="card">
            <div id="carrousel${contadorCarrousel}" class="carousel slide">
                <div class="carousel-inner carrouselsImagenes">
                ${objeto.imgs.map((img, index) => `
                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${img}" class="d-block w-100" alt="...">
                    </div>
                `).join('')}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carrousel${contadorCarrousel}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carrousel${contadorCarrousel}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="card-body">
                <h5 class="card-title titleCardAct">${objeto.title}</h5>
                <p class="card-text textDeLaNoticia">
                ${objeto.description}
                </p>
            </div>
            </div>
        `;

        contenedorPadre.appendChild(divCard);
        contadorCarrousel++;
        });
    })
    .catch(error => {
        // Manejo de errores
        console.error('Error al cargar el archivo JSON:', error);
    });

}

getNoticias();

function getDeportes(){
    
    fetch('/deportes.json')
    .then(response => response.json())
    .then(data => {
        const contenedorPadre = document.getElementById('divDeDeportes');
        let contadorCarrousel = 1;

        data.forEach(objeto => {
        const divCard = document.createElement('div');
        divCard.className = 'col';

        divCard.innerHTML = `
            <div class="card">
                <div id="carrousel${contadorCarrousel}" class="carousel slide">
                    <div class="carousel-inner carrouselsImagenes">
                        ${objeto.imgs.map((img, index) => `
                            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                            <img src="${img}" class="d-block w-100" alt="...">
                            </div>
                        `).join('')}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carrousel${contadorCarrousel}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carrousel${contadorCarrousel}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
            
                <div class="card-body">
                    <h5 class="card-title titleCardAct">${objeto.nombre}</h5>
                </div>
            </div>
        `;

        contenedorPadre.appendChild(divCard);
        contadorCarrousel++;
        });
    })
    .catch(error => {
        // Manejo de errores
        console.error('Error al cargar el archivo JSON:', error);
    });

}

let logoCaju = document.getElementById('logoCaju');
let nameCaju = document.getElementById('nameClubEncabezado');

logoCaju.addEventListener('mouseover', function() {
    logoCaju.style.opacity = '0.3';
    logoCaju.style.transition = 'opacity 0.5s ease';
    nameCaju.style.color = '#777';
    logoCaju.style.filter = 'blur(10px)';
});

logoCaju.addEventListener('mouseout', function() {
    logoCaju.style.opacity = '1';
    logoCaju.style.transition = 'opacity 0.5s ease';
    nameCaju.style.color = 'red';
    logoCaju.style.filter = 'blur(0px)';
});
  
const tituloActividades = document.getElementById('actividades');
let deportesAccionado = false;

function estaEnLaPantalla(element) {
  const rect = element.getBoundingClientRect(); // con este metodo obtenemos las coordenadas del rectángulo que lo rodea al elemento (top, left, bottom, right)
  return (
    rect.top >= 0 && // El borde superior del elemento está por encima o en el borde superior de la pantalla.
    rect.left >= 0 && //  El borde izquierdo del elemento está a la izquierda o en el borde izquierdo de la pantalla.
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && //  El borde inferior del elemento está por debajo o en el borde inferior de la pantalla.
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) // El borde derecho del elemento está a la derecha o en el borde derecho de la pantalla.
  );
}

function functionDeScroll() {
  if (!deportesAccionado && estaEnLaPantalla(tituloActividades)) {
    deportesAccionado = true;
    getDeportes();
  }
}

window.addEventListener('scroll', functionDeScroll);