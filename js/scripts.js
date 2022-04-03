const Clickbutton = document.querySelectorAll('.button');
const tbody = document.querySelector('.tbody');
const PATHNAME = window.location.pathname;

let carrito = loadCart();
if (PATHNAME.includes('/producto_') || PATHNAME.includes('/index.html')) {
	Clickbutton.forEach((btn) => {
		btn.addEventListener('click', addToCarritoItem);
	});
} else if (PATHNAME.includes('/carrito_compras.html')) {
	renderCarrito();
	CarritoTotal();
}
function addToCarritoItem(e) {
	const button = e.target;
	const item = button.closest('.card');
	const itemTitle = item.querySelector('.card-title').textContent;
	const itemPrice = item.querySelector('.precio').textContent;
	const itemImg = item.querySelector('.card-img-top').src;

	const newItem = {
		title: itemTitle,
		precio: itemPrice,
		img: itemImg,
		cantidad: 1,
	};

	addItemCarrito(newItem);
}

function addItemCarrito(newItem) {
	const alert = document.querySelector('.alert');

	setTimeout(function () {
		alert.classList.add('hide');
	}, 2000);
	alert.classList.remove('hide');

	const existProduct = carrito.findIndex(
		(item) => item.title.trim() === newItem.title.trim()
	);

	if (existProduct < 0) {
		carrito.push(newItem);
	} else {
		carrito[existProduct].cantidad++;
	}

	addLocalStorage(carrito);
}

function renderCarrito() {
	tbody.innerHTML = '';
	carrito.map((item) => {
		const tr = document.createElement('tr');
		tr.classList.add('ItemCarrito');
		const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `;
		tr.innerHTML = Content;
		tbody.append(tr);

		tr.querySelector('.delete').addEventListener('click', removeItemCarrito);
		tr.querySelector('.input__elemento').addEventListener(
			'change',
			sumaCantidad
		);
	});
}

function CarritoTotal() {
	let Total = 0;
	const itemCartTotal = document.querySelector('.itemCartTotal');
	carrito.forEach((item) => {
		const precio = Number(item.precio.replace('$', ''));
		Total = Total + precio * item.cantidad;
	});

	itemCartTotal.innerHTML = `Total $${Total}`;
}

function removeItemCarrito(e) {
	const buttonDelete = e.target;
	const tr = buttonDelete.closest('.ItemCarrito');
	const title = tr.querySelector('.title').textContent;

	const existProduct = carrito.findIndex(
		(item) => item.title.trim() === title.trim()
	);

	if (existProduct >= 0) {
		const alert = document.querySelector('.remove');

		setTimeout(function () {
			alert.classList.add('remove');
		}, 2000);

		alert.classList.remove('remove');
		carrito.splice(existProduct, 1);

		tr.remove();

		CarritoTotal();
		addLocalStorage(carrito);
	}
}

function sumaCantidad(e) {
	const sumaInput = e.target;
	const tr = sumaInput.closest('.ItemCarrito');
	const title = tr.querySelector('.title').textContent;

	const inputValue = parseInt(sumaInput.value < 1 ? 1 : sumaInput.value);
	sumaInput.value = inputValue;

	carrito.forEach((item) => {
		if (item.title.trim() === title.trim()) {
			item.cantidad = inputValue;
		}
	});

	CarritoTotal();
	addLocalStorage(carrito);
}

function addLocalStorage(carrito) {
	localStorage.setItem('carrito', JSON.stringify(carrito));
}

function loadCart() {
	if (localStorage.getItem('carrito') !== null) {
		return JSON.parse(localStorage.getItem('carrito'));
	} else {
		return [];
	}
}
