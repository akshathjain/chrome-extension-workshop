/*
Name: Akshath Jain
Date: 10/26/18
Purpose: js for memeoji
*/

//main function -- where everything happens
function main(){
	setupInsertButton();
}

//function that adds click behavior to the insert button
function setupInsertButton(){
	//get our button and set on click listener
	document.getElementById("insert-button").addEventListener("click", function(){
		chrome.tabs.executeScript({
			file: "contentScripts.js"
		});
	});
}

//once all the stuff is loaded, call the main function
document.addEventListener("DOMContentLoaded", function(){
	main();
});