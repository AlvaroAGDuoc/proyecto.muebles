$(document).ready(function () {
	/* Validaciones registro*/
	$('#form-reg').submit(function (e) {
		e.preventDefault();
		var nombre = $('#nombre_reg').val();
		var clave = $('#pass_reg').val();
		var dir = $('#dir_reg').val();
		var com = $('#comuna').val();
		var celu = $('#celular').val();
		var correo = $('#email_reg').val();
		var mensaje = '';

		let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/;
		let entrar = false;

		if (nombre.trim().length < 4 || nombre.trim().length > 25) {
			mensaje += 'El nombre no es valido <br>';
			entrar = true;
		}

		if (clave.trim().length < 6) {
			mensaje += 'La clave debe tener un largo minimo de 6 <br>';
			entrar = true;
		}

		if (!regexEmail.test(correo)) {
			mensaje += 'El email no es valido <br>';
			entrar = true;
		}

		if (dir.trim().length < 8 || dir.trim().length > 30) {
			mensaje += 'El pasaje debe tener un largo minimo de 8 y maximo de 30<br>';
			entrar = true;
		}

		if (com.trim().length <= 5 || com.trim().length > 20) {
			mensaje += 'La comuna debe tener un largo minimo de 5 y maximo de 20<br>';
			entrar = true;
		}

		if (celu.trim().length != 9) {
			mensaje += 'El celular debe tener un largo de 9 <br>';
			entrar = true;
		}

		if (entrar) {
			$('#warnings').html(mensaje);
		} else {
			$('#warnings').html('Registrado correctamente');
		}
	});

	/*Validacion formulario contacto usuario no logeado */
	$('#form-cont').submit(function (e) {
		e.preventDefault();
		var nombre = $('#nombre_cont').val();
		var correo = $('#correo_cont').val();
		var asunto = $('#msj_cont').val();
		var mensaje = '';

		let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/;
		let entrar = false;

		if (nombre.trim().length < 4 || nombre.trim().length > 25) {
			mensaje += 'El nombre no es valido <br>';
			entrar = true;
		}

		if (!regexEmail.test(correo)) {
			mensaje += 'El email no es valido <br>';
			entrar = true;
		}

		if (asunto.trim().length < 10 || asunto.trim().length > 100) {
			mensaje +=
				'El mensaje debe tener un largo minimo de 10 y maximo de 100<br>';
			entrar = true;
		}

		if (entrar) {
			$('#warnings').html(mensaje);
		} else {
			$('#warnings').html('Mensaje enviado correctamente');
		}
	});

	/* Validaciones de editar usuario */
	$('#form-edit').submit(function (e) {
		e.preventDefault();
		var dir = $('#dir_edit').val();
		var com = $('#com_edit').val();
		var celu = $('#celu_edit').val();
		var mensaje = '';

		let entrar = false;

		if (dir.trim().length < 8 || dir.trim().length > 30) {
			mensaje += 'El pasaje debe tener un largo minimo de 8 y maximo de 30<br>';
			entrar = true;
		}

		if (com.trim().length <= 5 || com.trim().length > 20) {
			mensaje += 'La comuna debe tener un largo minimo de 5 y maximo de 20<br>';
			entrar = true;
		}

		if (celu.trim().length != 9) {
			mensaje += 'El celular debe tener un largo de 9 <br>';
			entrar = true;
		}

		if (entrar) {
			$('#warnings').html(mensaje);
		} else {
			$('#warnings').html('Cambios aplicados correctamente');
		}
	});

	/* Validaciones de cambiar contrasena */

	$('#form-camb').submit(function (e) {
		e.preventDefault();
		var clave = $('#nueva_pass').val();
		var clave2 = $('#nueva_pass2').val();

		var mensaje = '';

		let entrar = false;

		if (clave !== clave2) {
			mensaje += 'Las claves no coinciden<br>';
			entrar = true;
		}

		if (clave.length < 6) {
			mensaje += 'La clave debe tener un largo minimo de 6<br>';
			entrar = true;
		}

		if (entrar) {
			$('#warnings').html(mensaje);
		} else {
			$('#warnings').html('Cambios aplicados correctamente');
		}
	});

	/* Validaciones agregar producto */
	$('#form-agregar').submit(function (e) {
		e.preventDefault();
		var nombre = $('#nombre_prod').val();
		var precio = $('#precio_prod').val();
		var descripcion = $('#desc_prod').val();

		var mensaje = '';

		let entrar = false;

		if (nombre.trim().length < 4 || nombre.trim().length > 20) {
			mensaje +=
				'El nombre debe tener un largo minimo de 4 y maximo de 20 <br>';
			entrar = true;
		}

		if (precio <= 0) {
			mensaje += 'El precio debe ser mayor a 0<br>';
			entrar = true;
		}

		if (descripcion.length < 10 || descripcion.length > 120) {
			mensaje += 'La descripcion debe ser mayor a 10 y menor a 120 letras <br>';
			entrar = true;
		}

		if (entrar) {
			$('#warnings').html(mensaje);
		} else {
			$('#warnings').html('Producto agregado correctamente');
		}
	});

	/* Validaciones modificar producto */

	$('#form_modprod').submit(function (e) {
		e.preventDefault();
		var nombre = $('#nombre').val();
		var precio = $('#precio').val();
		var descripcion = $('#desc_prod').val();

		var mensaje = '';

		let entrar = false;

		if (nombre.trim().length < 4 || nombre.trim().length > 20) {
			mensaje +=
				'El nombre debe tener un largo minimo de 4 y maximo de 20 <br>';
			entrar = true;
		}

		if (precio <= 0) {
			mensaje += 'El precio debe ser mayor a 0<br>';
			entrar = true;
		}

		if (descripcion.length < 10 || descripcion.length > 120) {
			mensaje += 'La descripcion debe ser mayor a 10 y menor a 120 letras <br>';
			entrar = true;
		}

		if (entrar) {
			$('#warnings').html(mensaje);
		} else {
			$('#warnings').html('Producto agregado correctamente');
		}
	});
});
