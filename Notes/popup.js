/*
Name: Akshath Jain
Date: 10/25/18
Purpose: notes++ logic
*/

//important vars
var newNoteField;
var submitNoteButton;
var notesHolder;

function main(){
	console.log('here');
	newNoteField = document.getElementById("note-entry");
	submitNoteButton = document.getElementById("submit-note");
	notesHolder = document.getElementById("note-holder");

	setupSubmitButton();
}

function setupSubmitButton(){
	submitNoteButton.addEventListener("click", function(){
		console.log('here');
		notesHolder.innerHtml += newNoteField.value;
	});
}	

document.addEventListener('DOMContentLoaded', function(){
	main();
});