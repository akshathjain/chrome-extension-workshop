/*
Name: Akshath Jain
Date: 10/25/18
Purpose: notes++ logic
*/

//important vars
var notesHolder;

function main(){
	console.log('here');
	newNoteField = document.getElementById("note-entry");
	notesHolder = document.getElementById("notes-holder");

	setupSubmitButton();
	setupTextAreaResizing();
}

function setupSubmitButton(){
	document.getElementById('new-note-button').addEventListener("click", function(){
		notesHolder.insertBefore(createInput(), notesHolder.firstChild);
		setupTextAreaResizing();
	});
}	

function setupTextAreaResizing(){
	//get all the textareas
	var textAreas = document.getElementsByTagName("textarea");
	//console.log(tas);
	for(var i = 0; i < textAreas.length; i++){
		textAreas[i].oninput = function(){
			this.style.height = "25px"; //default height
			this.style.height = this.scrollHeight + "px";
		};
	}
}

function createInput(){
	var newArea = document.getElementById('textarea-template').cloneNode(true);
	newArea.id = "";
	newArea.style.display = "inline";
	return newArea;
}

document.addEventListener('DOMContentLoaded', function(){
	main();
});