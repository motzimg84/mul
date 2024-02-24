//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Variable declaration 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const navbar = document.getElementById('navbar');
const navbarButton = document.getElementById('navbarButton');
const contMenu = document.getElementById('contMenu');
const escalaSelect = document.getElementById("escala");
const unidadSelect = document.getElementById("unidad");

let prevScrollPos = window.pageYOffset;
let navbarHeight = navbar.clientHeight; // Inicialización de navbarHeight
let retractHeight = 0.95 * navbarHeight;

var menuHeight = navbar.style.height;
var elementoCenter = document.getElementById('mostrar_tabla');
var elementoV1 = document.getElementById('V1');
var elementoC1 = document.getElementById('C1');

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Default sethings onload the page
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
window.onload = function() {
	// Llamar a la función una vez al inicio para ejecutarla también al cargar la página
	//Function to modify the Zoom from the page, to maintein the image visible
	//window.onresize();
	permitirPuntoComa(event);
	changeColor("1");
	popupWrapper1.style.display = "block";
	popupWrapper2.style.display = "block";
	popupWrapper3.style.display = "block";
	popupWrapper4.style.display = "block";
	helpBtn.style.background = "#60B5EA";
};


/*window.onresize = function() {
	var viewportWidth = window.innerWidth;
	if(viewportWidth <= 500) {
	console.log(viewportWidth);
	var zoom = viewportWidth / 1200; // Calcular el nuevo zoom
	document.body.style.zoom = zoom; // Aplicar el zoom al cuerpo del documento
	}

};*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function to adjust the menu bar.
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function updateNavbarHeight() {
	navbarHeight = navbar.clientHeight;
    retractHeight = 0.95 * navbarHeight;
    contMenu.style.height = navbarHeight + 'px';

	arrowDarw ();
}

// Llamada inicial a la función para establecer los valores
updateNavbarHeight();

// Listener para el evento resize
window.addEventListener('resize', updateNavbarHeight);

window.onscroll = function() {
	let currentScrollPos = window.pageYOffset;
	// Verifica si el scroll está en la parte superior de la página
	if (currentScrollPos === 0) {
		// Muestra el menú
		navbar.style.top = '0';
	} else {
		// Oculta el menú o realiza otras acciones según tu diseño
		navbar.style.top = `-${navbarHeight}px`;
	}

	prevScrollPos = currentScrollPos;
	
	navbarButton.addEventListener('mouseleave', function() {
		// Restaurar el color original cuando se desactiva
		navbarButton.style.backgroundColor = "#f77d32";
	});
};

//color setting from the navbarButton
navbarButton.addEventListener('mouseenter', function() {
	navbarButton.style.backgroundColor = "#db5400";
	navbar.style.top = '0';
});


navbar.addEventListener('mouseleave', function() {
	navbar.style.top = `-${navbarHeight}px`;
});

function scrollToSection(sectionId) {
	var section = document.getElementById(sectionId);
	var sectionTop = section.offsetTop - navbarHeight - 15;
	window.scrollTo({top: sectionTop, behavior: 'smooth'});
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Color setings from formular buttons 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function cambiarColor(elemento) {
    let indiceBot = document.getElementById("indice").innerHTML;
    let colorBack = "red";

    if (indiceBot === "2"){
        colorBack = "#D9D412";
    } else if (indiceBot === "3"){
        colorBack = "#5CB037";
    } 

    elemento.style.backgroundColor = colorBack;
}

input.addEventListener('mouseenter', function() {
    cambiarColor(input);
});

unidad.addEventListener('mouseenter', function() {
    cambiarColor(unidad);
});

escala.addEventListener('mouseenter', function() {
    cambiarColor(escala);
});

//color default
input.addEventListener('mouseleave', function() {
	input.style.backgroundColor = "gainsboro";
});

unidad.addEventListener('mouseleave', function() {
	unidad.style.backgroundColor = "gainsboro";
});

escala.addEventListener('mouseleave', function() {
	escala.style.backgroundColor = "gainsboro";
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Functo to hidde the exaple information
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function hiddeExaple (elemento1, elemento2, contenido) {
	if (contenido.style.display === 'none' || contenido.style.display === '') {
		contenido.style.display = 'block';
		elemento1.style.display = 'none';
		elemento2.style.display = 'block';
	} else {
		contenido.style.display = 'none';
		elemento1.style.display = 'block';
		elemento2.style.display = 'none';
	}
}

InfoBut1.addEventListener('click', function() {
	const contenido = document.getElementById('InfTex1');
	const elemento2 = document.getElementById('InfoCloBut1');
	hiddeExaple(InfoBut1, elemento2, contenido);
});	

InfoCloBut1.addEventListener('click', function() {
	const contenido = document.getElementById('InfTex1');
	const elemento1 = document.getElementById('InfoBut1');
	hiddeExaple(elemento1, InfoCloBut1, contenido);
});	


InfoBut2.addEventListener('click', function() {
	const contenido = document.getElementById('InfTex2');
	const elemento2 = document.getElementById('InfoCloBut2');
	hiddeExaple(InfoBut2, elemento2, contenido);
});	

InfoCloBut2.addEventListener('click', function() {
	const contenido = document.getElementById('InfTex2');
	const elemento1 = document.getElementById('InfoBut2');
	hiddeExaple(elemento1, InfoCloBut2, contenido);
});	


InfoBut3.addEventListener('click', function() {
	const contenido = document.getElementById('InfTex3');
	const elemento2 = document.getElementById('InfoCloBut3');
	hiddeExaple(InfoBut3, elemento2, contenido);
});	

InfoCloBut3.addEventListener('click', function() {
	const contenido = document.getElementById('InfTex3');
	const elemento1 = document.getElementById('InfoBut3');
	hiddeExaple(elemento1, InfoCloBut3, contenido);
});	

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Text validation functions
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function permitirPuntoComa(event) {
	var input = event.target;
	var valor = input.value;
	
	// Verificar si el último caracter ingresado es un punto
	if (event.data === '.' && valor.includes('.')) {
		// Reemplazar el punto por una coma
		input.value = valor.replace('.', ',');
		event.preventDefault(); // Evitar que se ingrese el punto
	}
	
	validarNumero();
}

function validarNumero() {
	var inputNumero = document.getElementById("input");
	var numero = inputNumero.value;

	// Eliminar todos los caracteres excepto números y la primera coma
	numero = numero.replace(/[^\d,]/g, '');
	
	// Eliminar comas adicionales
	var partes = numero.split(',');
	if (partes.length > 2) {
		numero = partes[0] + ',' + partes[1];
	}

	// Actualizar el valor del input con el número validado
	inputNumero.value = numero;
	
	splitNumber();
}

function clearSyst(){
	for (var k = 1; k <= 26; k++){
		document.getElementById("C" + k).style.backgroundColor = "#8A8A8A";
		document.getElementById("C" + k ).style.setProperty("--borderBottom", "none");
		document.getElementById("C" + k).innerHTML = "";
		document.getElementById("V" + k).innerHTML = "";
	}
}


function splitNumber() {
	let input = document.getElementById("input").value;
	if (input === '') {
		// La celda está vacía, terminamos la función sin hacer nada más
		clearSyst()
		cola.style.backgroundColor = "transparent";
		colaUp.style.backgroundColor = "transparent";
		colaFle.style.backgroundColor = "transparent";
		flechaUp.style.borderBottomColor = "transparent";
		document.getElementById("textoRes1").innerHTML = "";
		document.getElementById("textoRes2").innerHTML = "";
		return;
	}
	
	closePopup();
	
	let exponente1 = parseFloat(escalaSelect.selectedOptions[0].getAttribute("data-exponent"));
	let exponente2 = parseFloat(unidadSelect.selectedOptions[0].getAttribute("data-exponent"));
	let inputMult = exponente1 - exponente2;
	
	let lenInp = input.length;
	let posInp = input.indexOf(',');
	if (posInp < 0){
	  posInp = lenInp;
	  }

	let result = input;
	var absInputMult = Math.abs(inputMult);
	
	if (inputMult >= 1) {
		for (var i = posInp; i <= posInp + absInputMult - 1; i++) {
			if (i >= lenInp - 1) {
				result = result.replace(',', '');
				result = result + "0";
				}
			else if (i < lenInp - 2) {
	
				var j = i + 1 ;
				result = result.replace(',', '');
				result = result.substring(0, j) + "," + result.substring(j);
				}
			else {
				result = result.replace(',', '');
				}
			}
		}
	else if (inputMult < 0) {
		
		for (var i = 1 ; i <= absInputMult; i++) {
			if (i < posInp) {
				var j = posInp - i;
				if (result.charAt(0) === "0"){
					result = result.replace('0,', '');
					result = result.substring(0, j) + "," + result.substring(j);
				}else{
					result = result.replace(',', '');
					result = result.substring(0, j) + "," + result.substring(j);
				}
			}
			else if (i >= posInp ) {
				result = result.replace(',', '');
				result = "0," + result;
				}
			}
	}
		
	result = result.toString();
	result = result.replace('.', ',');
	
	
	var numRes = parseFloat(result.replace(',', '.'));

	numRes = numRes.toExponential();
	numRes = numRes.replace('.', ',') + " [" + escalaSelect.selectedOptions[0].getAttribute("value") + "]";

	let length = result.length;
	let position = result.indexOf(',') - 1;

	var posExp = 14 + exponente1 - exponente2;
	if (position >= 0) {
		var posIni = exponente1 + 2 - position;
		} else {
		var posIni = exponente1 + 2 - length + 1;
		}
	var posFin = posIni + length;
	
	//Limitando el numero a la cantidad de celdas del tablero
	var countI = 0;
	if (posIni <= 0){
		posIni = 1;
		countI = posInp - 2 - exponente2;
	}
	if (posFin >= 26){posFin = 27}
			
	clearSyst()
	
	var j = posIni
	// Funto to load the number in de i postion
	for (var i = countI; i < length; i++) {
	
		if (result.charAt(i) === ",") {
			j--
			document.getElementById("C" + j).style.backgroundColor = "#DBDBDB";
			document.getElementById("C" + j).innerHTML = result.charAt(i); 
		} else if (j < posFin ) {
			if (i === 0 && result.charAt(0) === "0" && result.charAt(1) !== ",") {

			} else {
				document.getElementById("V" + j).innerHTML = result.charAt(i);
				if (position < 0 && j === posFin - 1 ){
					document.getElementById("C" + j).style.backgroundColor = "#DBDBDB";
					}
			}
		}
		j++;
	}
	
	if (exponente1 > exponente2){
		//Texto de explicaion de la accion
		let textoRes1 = input + " [" + unidadSelect.selectedOptions[0].getAttribute("value") + "] se multiplico " + inputMult + " veces por 10, lo que desplaza la coma a " + " [" + escalaSelect.selectedOptions[0].getAttribute("value") + "], como muestra la flecha.";
		document.getElementById("textoRes1").innerHTML = textoRes1;
		let textoRes2 = input + " [" + unidadSelect.selectedOptions[0].getAttribute("value") + "] * 10^" + inputMult + " = " + result + " [" + escalaSelect.selectedOptions[0].getAttribute("value") + "] = " + numRes.replace('.', ',');
		document.getElementById("textoRes2").innerHTML = textoRes2;
	}else if (exponente1 < exponente2){		
		//Texto de explicaion de la accion
		let textoRes1 = input + " [" + unidadSelect.selectedOptions[0].getAttribute("value") + "] se divide " + absInputMult + " veces por 10, lo que desplaza la coma a " + " [" + escalaSelect.selectedOptions[0].getAttribute("value") + "], como muestra la flecha.";
		document.getElementById("textoRes1").innerHTML = textoRes1;
		let textoRes2 = input + " [" + unidadSelect.selectedOptions[0].getAttribute("value") + "] / 10^" + absInputMult + " = " + result + " [" + escalaSelect.selectedOptions[0].getAttribute("value") + "] = " + numRes.replace('.', ',');
		document.getElementById("textoRes2").innerHTML = textoRes2;
	} else {
		document.getElementById("textoRes1").innerHTML = "";
		document.getElementById("textoRes2").innerHTML = "";
	}

	arrowDarw ();
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Funktion to draw the Arrow
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function arrowDarw () {

	var exponente1 = parseFloat(unidadSelect.selectedOptions[0].getAttribute("data-exponent"));  
	var exponente2 = parseFloat(escalaSelect.selectedOptions[0].getAttribute("data-exponent"));

	let indiceBot = document.getElementById("indice").innerHTML;

	// Obtener la posición del elemento con respecto al viewport
	var posCenter = elementoCenter.getBoundingClientRect();
	var posicionV1 = elementoV1.getBoundingClientRect();
	var posicionC1 = elementoC1.getBoundingClientRect();

	// La posición incluye propiedades como top, bottom, left, right, width y height
	var posCenterLeft = posCenter.left
	var posicionV1Left = posicionV1.left;
	var posicionC1Left = posicionC1.left;
	var widthV1 = posicionV1.width;
	var widthC1 = posicionC1.width;

	var iniBlock = posicionV1Left - posCenterLeft + ( widthV1 + widthC1 ) + ( widthV1 + widthC1/2 ) - 5;
	var posOrig = 2 + exponente1;
	let color = "red";

	if (indiceBot === "2"){
		color = "#D9D412";
	} else if (indiceBot === "3"){
		color = "#5CB037";
	} 

	unidad.style.setProperty("--colorBotSelect", color);
	escala.style.setProperty("--colorBotSelect", color);

	if (input && exponente1 != exponente2) {
		
		flechaUp.style.display = "";
		colaF.style.display = "";
		colaFL.style.display = "";
		
		document.getElementById("C" + posOrig ).style.setProperty("--borderBottom", "4px solid " + color);
		colaF.style.borderColor = color;
		flechaUp.style.borderBottomColor = color;
		


		if (exponente1 < exponente2){
		// posicion de la felcha
		var lengFlecha = (( widthV1 + widthC1 ) * (exponente2 - exponente1)) + 4;
		var iniFlecha = iniBlock + ( widthV1 + widthC1 ) * exponente1 + 1 ;
		var posFlecha = iniFlecha + lengFlecha - 9;

		//valores en las variables
		flechaUp.style.setProperty("--leftFUp", posFlecha + "px");
		colaF.style.setProperty("--leftCola", iniFlecha - 1 + "px");
		colaF.style.setProperty("--widthCola", lengFlecha + "px");
		colaFL.style.setProperty("--leftCola", iniFlecha + "px");
		colaFL.style.setProperty("--widthCola", lengFlecha + "px");
		colaFL.style.setProperty("--cFLcolorBL", color);
		colaFL.style.setProperty("--cFLcolorBR", "transparent");

		}else if (exponente1 > exponente2){

			var lengFlecha = (( widthV1 + widthC1 ) * (exponente1 - exponente2)) + 4;
			var iniFlecha = iniBlock + ( widthV1 + widthC1 ) * exponente2 + 1;
			var posFlecha = iniFlecha - 5;
		
			//valores en las variables
			flechaUp.style.setProperty("--leftFUp", posFlecha + "px");
			colaF.style.setProperty("--leftCola", iniFlecha - 1 + "px");
			colaF.style.setProperty("--widthCola", lengFlecha + "px");
			colaFL.style.setProperty("--leftCola", iniFlecha + "px");
			colaFL.style.setProperty("--widthCola", lengFlecha + "px");
			colaFL.style.setProperty("--cFLcolorBL", "transparent");
			colaFL.style.setProperty("--cFLcolorBR", color);

		} 
	}else {
		color = "transparent";
		document.getElementById("C" + posOrig ).style.setProperty("--borderBottom", "4px solid " + color);
		flechaUp.style.display = "none";
		colaF.style.display = "none";
		colaFL.style.display = "none";
	}
}


//Funcion parta la activacion al presionar el boton
function presCell(numCell){
	var cellNumber = numCell;
	changeColor(cellNumber);
	createOptions(cellNumber);
	}

function changeColor(cellNumber) {
	for (var i = 1; i <= 3; i++) {
		var cell = document.getElementById("cell" + i);
		cell.style.backgroundColor = "darkgray";
		cell.style.fontSize = "15px";
		cell.style.fontWeight = "none";
		cell.style.textDecoration = "none";
		cell.style.border = "1px solid";
		}

	cell = document.getElementById("cell" + cellNumber);
	cell.style.fontSize = "20px";
	cell.style.fontWeight = "bold";
	cell.style.textDecoration = "underline";
	cell.style.border = "4px solid";

	if (cellNumber === "1"){ cell.style.backgroundColor = "#FFFFFF"; } 
	else if (cellNumber === "2"){ cell.style.backgroundColor = "#FFFD55"; } 
	else if (cellNumber === "3"){ cell.style.backgroundColor = "#5CB037"; }
	
	arrowDarw ();
}


// Función que crea las opciones del selector según el valor de índice
function createOptions(indice) {

	// Obtener el elemento <select>
	var select = document.getElementById("unidad");
	// Vaciar las opciones actuales
	select.innerHTML = "";
	// Obtener el elemento <escala>
	var escala = document.getElementById("escala");
	// Vaciar las opciones actuales
	escala.innerHTML = "";
	// Crear un arreglo con las opciones para cada valor de índice
	var options = [
	// Opciones para índice = 1
	[
		{value: "Tm", dataExponent: "0", text: "Tm"},
		{value: "Gm", dataExponent: "3", text: "Gm"},
		{value: "Mm", dataExponent: "6", text: "Mm"},
		{value: "Km", dataExponent: "9", text: "Km"},
		{value: "Hm", dataExponent: "10", text: "Hm"},
		{value: "Dm", dataExponent: "11", text: "Dm"},
		{value: "m", dataExponent: "12", text: "m", selected: true},
		{value: "dm", dataExponent: "13", text: "dm"},
		{value: "cm", dataExponent: "14", text: "cm"},
		{value: "mm", dataExponent: "15", text: "mm"},
		{value: "µm", dataExponent: "18", text: "µm"},
		{value: "nm", dataExponent: "21", text: "nm"},
		{value: "pm", dataExponent: "24", text: "pm"}
	],
	// Opciones para índice = 2
	[
		{value: "Mm^2", dataExponent: "0", text: "Mm^2"},
		{value: "Km^2", dataExponent: "6", text: "Km^2"},
		{value: "ha", dataExponent: "8", text: "ha"},
		{value: "a", dataExponent: "10", text: "a"},
		{value: "m^2", dataExponent: "12", text: "m^2", selected: true},
		{value: "dm^2", dataExponent: "14", text: "dm^2"},
		{value: "cm^2", dataExponent: "16", text: "cm^2"},
		{value: "mm^2", dataExponent: "18", text: "mm^2"},
		{value: "µm^2", dataExponent: "24", text: "µm^2"}
	],
	// Opciones para índice = 3
	[
		{value: "Km^3", dataExponent: "3", text: "Km^3"},
		{value: "Hm^3", dataExponent: "6", text: "Hm^3"},
		{value: "Dm^3", dataExponent: "9", text: "Dm^3"},
		{value: "m^3", dataExponent: "12", text: "m^3", selected: true},
		{value: "dm^3", dataExponent: "15", text: "dm^3"},
		{value: "cm^3", dataExponent: "18", text: "cm^3"},
		{value: "mm^3", dataExponent: "21", text: "mm^3"}
	]
	];
	// Obtener el arreglo de opciones correspondiente al valor de índice
	var optionArray = options[indice - 1];
	// Recorrer el arreglo de opciones y crear los elementos <option>
	for (var i = 0; i < optionArray.length; i++) {
	// Crear un elemento <option>
	var option = document.createElement("option");
	// Asignar el valor, el atributo data-exponent y el texto
	option.value = optionArray[i].value;
	option.setAttribute("data-exponent", optionArray[i].dataExponent);
	option.text = optionArray[i].text;
	// Si la opción tiene la propiedad selected, asignar el atributo selected
	if (optionArray[i].selected) {
		option.selected = true;
	}
	// Agregar la opción al elemento <select>
	select.add(option);
	}
	for (var i = 0; i < optionArray.length; i++) {
	// Crear un elemento <option>
	var option = document.createElement("option");
	// Asignar el valor, el atributo data-exponent y el texto
	option.value = optionArray[i].value;
	option.setAttribute("data-exponent", optionArray[i].dataExponent);
	option.text = optionArray[i].text;
	// Si la opción tiene la propiedad selected, asignar el atributo selected
	if (optionArray[i].selected) {
		option.selected = true;
	}
	// Agregar la opción al elemento <select>
	escala.add(option);
	}
	document.getElementById("indice").innerHTML = indice;
	// Llamar a la función splitNumber para actualizar el resultado
	splitNumber();
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Función para verificar si un elemento está en la vista
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function isElementInViewport(el) {
	var rect = el.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

// Función para manejar el evento scroll y verificar si el video está en la vista
function handleVisibility() {
	var video1 = document.getElementById('MUL_Laenge');

	if (isElementInViewport(video1)) {
		video1.play();
	} else {
		video1.pause();
	}
	
	var video2 = document.getElementById('MUL_Flechen');

	if (isElementInViewport(video2)) {
		video2.play();
	} else {
		video2.pause();
	}

	var video3 = document.getElementById('MUL_Volumen');

	if (isElementInViewport(video3)) {
		video3.play();
	} else {
		video3.pause();
	}
}

// Manejar eventos de desplazamiento y redimensionamiento de ventana
window.addEventListener('scroll', handleVisibility);
window.addEventListener('resize', handleVisibility);

// Reproducir el video automáticamente cuando se cargue la página
window.addEventListener('load', handleVisibility);	

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Move text sideways function
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const contenedor = document.getElementById('contenedor');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
const cajas = document.querySelectorAll('.caja');

let intervalo;
let currentIndex = 0;

function mostrarCaja(index) {
	for (let i = 0; i < cajas.length; i++) {
		if (i === index) {
			cajas[i].style.display = 'inline-block';
		} else {
			cajas[i].style.display = 'none';
		}
	}
}

function cambiarCaja() {
	currentIndex = (currentIndex + 1) % cajas.length;
	mostrarCaja(currentIndex);
}

function retrocederCaja() {
	currentIndex = (currentIndex - 1 + cajas.length) % cajas.length;
	mostrarCaja(currentIndex);
}

intervalo = setInterval(cambiarCaja, 5000);

anterior.addEventListener('click', () => {
	clearInterval(intervalo);
	retrocederCaja();
	intervalo = setInterval(cambiarCaja, 5000);
});

siguiente.addEventListener('click', () => {
	clearInterval(intervalo);
	cambiarCaja();
	intervalo = setInterval(cambiarCaja, 5000);
});

mostrarCaja(currentIndex);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function to dispay the pupups
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const popupWrapper1 = document.getElementById('popupWrapper1');
const popupWrapper2 = document.getElementById('popupWrapper2');
const popupWrapper3 = document.getElementById('popupWrapper3');
const popupWrapper4 = document.getElementById('popupWrapper4');
const helpBtn = document.getElementById('help-btn');


function closePopup() {
	popupWrapper1.style.display = "none";
	popupWrapper2.style.display = "none";
	popupWrapper3.style.display = "none";
	popupWrapper4.style.display = "none";
	helpBtn.style.background = "white";
}

helpBtn.addEventListener('click', () => {
	popupWrapper1.style.display = "block";
	popupWrapper2.style.display = "block";
	popupWrapper3.style.display = "block";
	popupWrapper4.style.display = "block";
	helpBtn.style.background = "#60B5EA";
});