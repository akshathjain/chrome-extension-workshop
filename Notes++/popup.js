/*
Name: Akshath Jain
Date: 10/25/18
Purpose: notes++ logic
*/

//important vars
var notesHolder;
var backgroundPage;

function main(){
	console.log('here');
	newNoteField = document.getElementById("note-entry");
	notesHolder = document.getElementById("notes-holder");
	backgroundPage = chrome.extension.getBackgroundPage();

	setupSubmitButton();
	setupTextAreaResizing();
	setupDataSaver();
}

function setupSubmitButton(){
	document.getElementById('new-note-button').addEventListener("click", function(){
		notesHolder.insertBefore(createInput(null), notesHolder.firstChild);
		setupTextAreaResizing();
	});
}	

function setupTextAreaResizing(){
	//get all the textareas
	var textAreas = document.getElementsByTagName("textarea");
	for(var i = 0; i < textAreas.length; i++){
		textAreas[i].style.height = textAreas[i].scrollHeight + "px";
		textAreas[i].oninput = function(){
			this.style.height = "25px"; //default height
			this.style.height = this.scrollHeight + "px";
		};
	}
}

function setupDataSaver(){
	//listener for when chrome extension is closed
	addEventListener("unload", function(event){
		//get content of all the notes
		var notes = []; 
		var textAreas = document.getElementsByTagName("textarea");
		for(var i = 0; i < textAreas.length; i++){ //substract one for the template
			if(textAreas[i].value != "") //only save if not empty
				notes.push(textAreas[i].value);
		}

		//save all the notes
		backgroundPage.saveData({
			"notes":JSON.stringify(notes)
		});
	});
}

function createInput(){
	var newArea = document.getElementById('textarea-template').cloneNode(true);
	newArea.id = "";
	newArea.style.display = "inline";
	return newArea;
}

document.addEventListener('DOMContentLoaded', function(){
	//get the data
	chrome.storage.sync.get(['notes'], function(result){
		main();
		var notes = JSON.parse(result.notes);
		//insert the empty textareas
		for(var i = 0; i < notes.length; i++)
			notesHolder.insertBefore(createInput(), notesHolder.firstChild);
		var tas = document.getElementsByTagName("textarea");
		for(var i = 0; i < notes.length; i++) //put in the saved data
			tas[i+1].value = notes[i];
		setupTextAreaResizing(); //allow resizing of textareas
	});
});


