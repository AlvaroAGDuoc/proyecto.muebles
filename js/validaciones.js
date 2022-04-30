$(document).ready(function () {
	$('#form-reg').submit(function (e) {
		e.preventDefault();
		var nombre = $('#nombre_reg').val();
		var clave = $('#pass_reg').val();
		var mensaje = '';

		let entrar = false;

		if (nombre.trim().length < 4 || nombre.trim().length > 25) {
			mensaje += 'El nombre no es valido <br>';
			entrar = true;
		}

		if (clave.trim().length < 4 || nombre.trim().length > 20) {
			mensaje += 'La clave debe tener un largo minimo de 4 <br>';
			entrar = true;
		}

		if (entrar) {
			$('#warnings').html(mensaje);
		} else {
			$('#warnings').html('Enviado');
		}
	});
});
