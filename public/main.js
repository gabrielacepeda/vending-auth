const dor = document.getElementById("doritos");
const lay = document.getElementById("lays");
const skit = document.getElementById("skittles");
const cook = document.getElementById("cookies");
const gum = document.getElementById("orbit");
const cola = document.getElementById("coke");

window.onload = function () {

	dor.addEventListener('click', function () {
		alert("Doritos, Nacho Cheese")
		fetch('items', {
				method: 'put',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'name': 'Doritos',
				})
			})
			.then(response => {
				if (response.ok) return response.json()
			})
			.then(data => {
				console.log(data)
				window.location.reload(true) //GET request on page reload
			})
	});
	lay.addEventListener('click', function () {
		alert("Lays, betcha cant eat just one")
		fetch('items', {
				method: 'put',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'name': 'Lays',
				})
			})
			.then(response => {
				if (response.ok) return response.json()
			})
			.then(data => {
				console.log(data)
				window.location.reload(true) //GET request on page reload
			})
	});

	skit.addEventListener('click', function () {
		alert("Skittles, Taste the Rainbow")
		fetch('items', {
				method: 'put',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'name': 'Skittles',
				})
			})
			.then(response => {
				if (response.ok) return response.json()
			})
			.then(data => {
				console.log(data)
				window.location.reload(true) //GET request on page reload
			})
	});
	cook.addEventListener('click', function () {
		alert("Famous Amos, milks favorite!")
		fetch('items', {
				method: 'put',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'name': 'Famous Amos',
				})
			})
			.then(response => {
				if (response.ok) return response.json()
			})
			.then(data => {
				console.log(data)
				window.location.reload(true) //GET request on page reload
			})
	});
	gum.addEventListener('click', function () {
		alert("Orbit Gum, for a good, clean feeling!")
		fetch('items', {
				method: 'put',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'name': 'Orbit Gum',
				})
			})
			.then(response => {
				if (response.ok) return response.json()
			})
			.then(data => {
				console.log(data)
				window.location.reload(true) //GET request on page reload
			})
	});
	cola.addEventListener('click', function () {
		alert("Everything's better with Coca-Cola")
		fetch('items', {
				method: 'put',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'name': 'Coke',
				})
			})
			.then(response => {
				if (response.ok) return response.json()
			})
			.then(data => {
				console.log(data)
				window.location.reload(true) //GET request on page reload
			})
	});
}