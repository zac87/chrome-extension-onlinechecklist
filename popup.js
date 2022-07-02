function toggleVisibility(e, h) {
	if(e.style.display === "none") {
		e.style.display = "block";
	} else {
		e.style.display = "none";
	}
	if(h != null) 
		toggleCheckbox(h);
}

function hideVisibility(e, h) {
	h.checked = false;
	e.style.display = "none";
}

function toggleCheckbox(e) {
	e.checked = !e.checked;
}

function getDisplay(e) {
	return e.style.display;
}

const appointmentCheckbox = document.getElementById("appointment_checkbox");
const grocery_checkbox = document.getElementById("grocery_checkbox");
const doctor_checkbox = document.getElementById("doctor_checkbox");
const vet_checkbox = document.getElementById("vet_checkbox");
const schooling_checkbox = document.getElementById("schooling_checkbox");
const homework_checkbox = document.getElementById("homework_checkbox");
const unvercity_checkbox = document.getElementById("unvercity_checkbox");
const shopping_checkbox = document.getElementById("shopping_checkbox");
const carrepair_checkbox = document.getElementById("carrepair_checkbox");
const garden_checkbox = document.getElementById("garden_checkbox");
const books_checkbox= document.getElementById("books_checkbox");
const computerwork_checkbox= document.getElementById("computerwork_checkbox");
const tvradio_checkbox= document.getElementById("tvradio_checkbox");
const clothes_checkbox= document.getElementById("clothes_checkbox");
const electronics_checkbox = document.getElementById("electronics_checkbox");
const cooking_checkbox = document.getElementById("cooking_checkbox");
const painting_checkbox = document.getElementById("painting_checkbox");
const toys_checkbox = document.getElementById("toys_checkbox");
const other_checkbox = document.getElementById("other_checkbox");


const notes = document.getElementById("notes");

const btn_add = document.getElementById("btn_add");
const btn_sub = document.getElementById("btn_sub");
const btn_save = document.getElementById("btn_save");

const appointment = document.getElementById("appointment");
const grocery = document.getElementById("grocery");
const doctor = document.getElementById("doctor");
const vet = document.getElementById("vet");
const schooling = document.getElementById("schooling");
const homework = document.getElementById("homework");
const unvercity = document.getElementById("unvercity");
const shopping = document.getElementById("shopping");
const carrepair = document.getElementById("carrepair");
const garden = document.getElementById("garden");
const books = document.getElementById("books");
const computerwork = document.getElementById("computerwork");
const tvradio = document.getElementById("tvradio");
const clothes = document.getElementById("clothes");
const electronics = document.getElementById("electronics");
const cooking = document.getElementById("cooking");
const painting = document.getElementById("painting");
const toys = document.getElementById("toys");
const other = document.getElementById("other");

var date = new Date();

function addDay() {
	date.setDate(date.getDate() + 1);
	var today = date.toLocaleDateString();
	document.getElementById('today_date').innerHTML = today;
	setup();
}

function subDay() {
	date.setDate(date.getDate() - 1);
	var today = date.toLocaleDateString();
	document.getElementById('today_date').innerHTML = today;
	setup();
}

function getDay() {
	return date.toLocaleDateString();
}

function saveTodos() {
	var array = new Object();
	
	array.appointment = (getDisplay(appointment) == "none") ? false : true;
	array.grocery = (getDisplay(grocery) == "none") ? false : true;
	array.doctor = (getDisplay(doctor) == "none") ? false : true;
	array.vet = (getDisplay(vet) == "none") ? false : true;
	array.schooling = (getDisplay(schooling) == "none") ? false : true;
	array.homework = (getDisplay(homework) == "none") ? false : true;
	array.unvercity = (getDisplay(unvercity) == "none") ? false : true;
	array.shopping = (getDisplay(shopping) == "none") ? false : true;
	array.carrepair = (getDisplay(carrepair) == "none") ? false : true;
	array.garden = (getDisplay(garden) == "none") ? false : true;
	array.books = (getDisplay(books) == "none") ? false : true;
	array.computerwork = (getDisplay(computerwork) == "none") ? false : true;
	array.tvradio = (getDisplay(tvradio) == "none") ? false : true;
	array.clothes = (getDisplay(clothes) == "none") ? false : true;
	array.electronics = (getDisplay(electronics) == "none") ? false : true;
	array.cooking = (getDisplay(cooking) == "none") ? false : true;
	array.painting = (getDisplay(painting) == "none") ? false : true;
	array.toys = (getDisplay(toys) == "none") ? false : true;
	array.other = (getDisplay(other) == "none") ? false : true;	
	array.date = getDay();
	array.notes = (notes.value == undefined) ? "" : notes.value;
	
	var string = JSON.stringify(array);
	localStorage.setItem(getDay(), string);
	
	console.log(string);
}


function getTodos() {
	var string = localStorage.getItem(getDay());
	console.log(string);
	
	var array = JSON.parse(string);
	
	if(array != null) {
		array.appointment ? toggleVisibility(appointment, appointmentCheckbox): console.log("false");;
		array.grocery  ? toggleVisibility(grocery, grocery_checkbox) : "";
		array.doctor  ? toggleVisibility(doctor, doctor_checkbox) : "";
		array.vet  ? toggleVisibility(vet, vet_checkbox) : "";
		array.schooling  ? toggleVisibility(schooling, schooling_checkbox) : ""; 
		array.homework  ? toggleVisibility(homework, homework_checkbox) : "";
		array.unvercity  ? toggleVisibility(univercity, univercity_checkbox) : "";
		array.shopping  ? toggleVisibility(shopping, shopping_checkbox) : "";
		array.carrepair  ? toggleVisibility(carrepair, carrepair_checkbox) : "";
		array.garden  ? toggleVisibility(garden, garden_checkbox) : "";
		array.books  ? toggleVisibility(books, books_checkbox) : "";
		array.computerwork  ? toggleVisibility(computerwork, computerwork_checkbox) : "";
		array.tvradio  ? toggleVisibility(tvradio, tvradio_checkbox) : "";
		array.clothes  ? toggleVisibility(clothes, clothes_checkbox) : "";
		array.electronics  ? toggleVisibility(electronics, electronics_checkbox) : "";
		array.cooking  ? toggleVisibility(cooking, cooking_checkbox) : "";
		array.painting  ? toggleVisibility(painting, painting_checkbox) : "";
		array.toys  ? toggleVisibility(toys, toys_checkbox) : "";
		array.other  ? toggleVisibility(other, other_checkbox) : "";
		notes.value = (array.notes == undefined) ? "" : array.notes;
	}
}

function setup() {
	
	hideVisibility(appointment, appointmentCheckbox);
	hideVisibility(grocery, grocery_checkbox);
	hideVisibility(doctor, doctor_checkbox);
	hideVisibility(vet, vet_checkbox);
	hideVisibility(schooling, schooling_checkbox);
	hideVisibility(homework, homework_checkbox);	
	hideVisibility(unvercity, unvercity_checkbox);	
	hideVisibility(shopping, shopping_checkbox);	
	hideVisibility(carrepair, carrepair_checkbox);
	hideVisibility(garden, garden_checkbox);
	hideVisibility(books, books_checkbox);
	hideVisibility(computerwork, computerwork_checkbox);
	hideVisibility(tvradio, tvradio_checkbox);
	hideVisibility(clothes, clothes_checkbox);	
	hideVisibility(electronics, electronics_checkbox);	
	hideVisibility(cooking, cooking_checkbox);	
	hideVisibility(painting, painting_checkbox);	
	hideVisibility(toys, toys_checkbox);	
	hideVisibility(other, other_checkbox);	
	
	
	getTodos();
}

document.addEventListener('DOMContentLoaded', function () {
	getTodos();
	
	var date = new Date();
	var today = date.toLocaleDateString();
	document.getElementById('today_date').innerHTML = today;
	
	setup();
	
	appointmentCheckbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(appointment);
	});
	grocery_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(grocery);
	});
	doctor_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(doctor);
	});
	vet_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(vet);
	});
	schooling_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(schooling);
	});
	unvercity_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(univercity);
	});
	shopping_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(shopping);
	});
	carrepair_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(carrepair);
	});
	
	garden_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(garden);
	});
	
	books_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(books);
	});
	computerwork_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(computerwork);
	});
	tvradio_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(tvradio);
	});
	clothes_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(clothes);
	});
	homework_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(homework);
	});
	unvercity_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(univercity);
	});		
	electronics_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(electronics);
	});
	cooking_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(cooking);
	});
	painting_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(painting);
	});
	toys_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(toys);
	});
	other_checkbox.addEventListener( 'click', () => {
		console.log('Click');
		toggleVisibility(other);
	});
	
	btn_add.addEventListener( 'click', () => {
		addDay();
	});
	
	btn_sub.addEventListener( 'click', () => {
		subDay();
	});
	
	btn_save.addEventListener( 'click', () => {
		saveTodos();
	});
});


