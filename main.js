$(document).ready(function () {
    

    //Evento para validar nombre
    $('#nomUsuario').blur(function (e) { 
        e.preventDefault();
        let contenido = $('#nomUsuario').val();
        let error = $('#errorNomUsu');

        if (contenido == ""){
            error.html("Campo Obligatorio");
            $('#nomUsuario').addClass('bg-danger');
        } else if (contenido.length < 5 || contenido.length > 12) {
            error.html("Debe contener entre 5 y 12 caracteres");
            $('#nomUsuario').addClass('bg-danger');
        } else {
            error.html("");
            $('#nomUsuario').removeClass('bg-danger');
        }
        
    });

    //Evento para valiar contraseña
    $('#contrasenia').blur(function (e) { 
        e.preventDefault();
        let contenido = $('#contrasenia').val();
        let error = $('#errorPass');

        if (contenido == ""){
            error.html("Campo Obligatorio");
            $('#contrasenia').addClass('bg-danger');
        } else if (contenido.length < 7 || contenido.length > 12) {
            error.html("Debe contener entre 5 y 12 caracteres");
            $('#contrasenia').addClass('bg-danger');
        } else {
            error.html("");
            $('#contrasenia').removeClass('bg-danger');
        }
        
    });

    //Evento para valiar nombre
    $('#nombre').blur(function (e) { 
        e.preventDefault();
        let contenido = $('#nombre').val();
        let error = $('#errorName');

        if (contenido == ""){
            error.html("Campo Obligatorio");
            $('#nombre').addClass('bg-danger');
        } else if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]*$/.test(contenido)) {
            error.html("Debe contener solo letras");
            $('#nombre').addClass('bg-danger');
        } else {
            error.html("");
            $('#nombre').removeClass('bg-danger');
        }
        
    });

    //Evento para valiar pais
    $('#pais').blur(function (e) { 
        e.preventDefault();
        let contenido = $('#pais').val();
        let error = $('#errorCountry');

        if (contenido == "Seleccione su pais"){
            error.html("Campo Obligatorio");
            $('#pais').addClass('bg-danger');
        } else {
            error.html("");
            $('#pais').removeClass('bg-danger');
        }
        
    });

    //Evento para valiar Codigo Zip
    $('#codigoZip').blur(function (e) { 
        e.preventDefault();
        let contenido = $('#codigoZip').val();
        let error = $('#errorZip');

        if (contenido == ""){
            error.html("Campo Obligatorio");
            $('#codigoZip').addClass('bg-danger');
        } else if(isNaN(contenido)){
            error.html("Debe contener solo números");
            $('#codigoZip').addClass('bg-danger');
        }else {
            error.html("");
            $('#codigoZip').removeClass('bg-danger');
        }
        
    });

    //Evento para valiar Correo Electrónico
    $('#correo').blur(function (e) { 
        e.preventDefault();
        let contenido = $('#correo').val();
        let error = $('#errorCorreo');

        if (contenido == ""){
            error.html("Campo Obligatorio");
            $('#correo').addClass('bg-danger');
        } else if(!/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(contenido)){
            error.html("Formato incorrecto");
            $('#correo').addClass('bg-danger');
        }else {
            error.html("");
            $('#correo').removeClass('bg-danger');
        }
        
    });

    //Evento para valiar Ingles
    $('#sinIngles').blur(function (e) { 
        e.preventDefault();
        let conIngles = $('#conIngles').prop('checked');
        let sinIngles = $('#sinIngles').prop('checked');
        let error = $('#errorIngles');

        if (conIngles && sinIngles){
            error.html("Seleccione solo una opción");
        } else if(!conIngles && !sinIngles){
            error.html("Seleccione una opción");
        }else if (conIngles || sinIngles){
            error.html("");
        }
        
    });
    $('#conIngles').blur(function (e) { 
        e.preventDefault();
        let conIngles = $('#conIngles').prop('checked');
        let sinIngles = $('#sinIngles').prop('checked');
        let error = $('#errorIngles');

        if (conIngles && sinIngles){
            error.html("Seleccione solo una opción");
        } else if(!conIngles && !sinIngles){
            error.html("Seleccione una opción");
        }else if (conIngles || sinIngles){
            error.html("");
        }
        
    });

    //Mostrar y ocultar con toggle
    $('#botonSobreti').click(function (e) { 
        e.preventDefault();
        let elemento = $('#cuadro');

        elemento.toggle(1000);
        
    });

    //Contador de caracteres textarea
        
    let counter = 0;
        $('#sobreTi').keyup(function (e) { 
            
            let key = event.keyCode || event.charCode;
            let contador = $('#contador');
            
            if (key == 8 || key == 46) {
                counter--;
            } else {
                counter++;
            }

            if (counter >240) {
                $('#contador').removeClass('text-success');
                $('#contador').addClass('text-danger');
                $('#mensaje').html("Se a sobrepasado el límite - ");
            } 

            let resultado = counter.toString();
            contador.html(resultado + "/240");
            
        
        });
    
    


});