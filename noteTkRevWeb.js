window.onload = () => {
	showList();
}

// console.log(textareas.value);

let savBtn = document.getElementById('savBtn');

savBtn.addEventListener('click',() => {
		let textareas = document.getElementById('exampleFormControlTextarea1');
		// console.log(textareas.value);
		// if(textareas.value.length === 0){
			// savBtn.classList.add("disabled");
			
		// }
		// else{
			// savBtn.classList.add("btn btn-primary");
		// }
		// console.log(textareas.value.length);
		//enableButton();
		let notes = JSON.parse(localStorage.getItem('notes'));
		let notesObj;
		if(notes === null){
			notesObj = [];
		}
		else{
			notesObj = notes;
		}
		
		notesObj.push(textareas.value);
		
		localStorage.setItem('notes',JSON.stringify(notesObj));
		textareas.value = "";
		showList();
		
		
})

// function enableButton(){
	// let textareas = document.getElementById('exampleFormControlTextarea1');
	
	// if(textareas.value.length > 0){
		// savBtn.disabled = false;
	// }
	// else {
		// savBtn.disabled = true;
	// }
// }
function showList(){
	let notes = JSON.parse(localStorage.getItem('notes'));
		let notesObj;
		if(notes === null){
			notesObj = [];
		}
		else{
			notesObj = notes;
		}
		
		let dabba = document.getElementById('dabba');
		
		let html = "";
		notesObj.forEach((currElem,index) => {
			html+= `<div class="card my-2 mx-3" style="width: 18rem;">
						<div class="card-body">
							<h5 class="card-title">Note ${index + 1}</h5>
							<p class="card-text content">${currElem}</p>
							<p class="dateNtime">${new Date().toLocaleString()}</p>
							<button type="button" class="btn btn-primary" id="${index}" onclick="delFunc(this.id)">Delete</button>
						</div>
					</div>`
		})
		dabba.innerHTML = html;
}

function delFunc(id){
	let notes = JSON.parse(localStorage.getItem('notes'));
		let notesObj;
		if(notes === null){
			notesObj = [];
		}
		else{
			notesObj = notes;
		}
	notesObj.splice(id,1);
	localStorage.setItem('notes',JSON.stringify(notesObj));
	showList();
}

let searchBar = document.getElementById('searchBar');

searchBar.addEventListener('input',() => {
	// console.log(searchBar.value);
	let searchedTxt = searchBar.value.toLowerCase();
	// let dabba = document.getElementById('dabba');
	let card = document.getElementsByClassName('card');
	// console.log(dabba);
	
	Array.from(card).forEach((currElem,index) => {
		let containedTxt = currElem.getElementsByClassName('content')[0].innerText;
		if(containedTxt.includes(searchedTxt)){
			currElem.style.display = "";
		}
		else{
			currElem.style.display = "none";
		}
	})
})