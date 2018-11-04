/*
Name: Akshath Jain
Date: 10/26/18
Purpose: js for wdw chrome extension
*/

var backgroundPage;
var numImagesChanged = 0;
var numImageChagedView;

//main function -- where everything happens
function main(){
	backgroundPage = chrome.extension.getBackgroundPage();
	numImagesChangedView = document.getElementById('num-images-changed');
	setupInsertButton();
	setupDataSaver();
}

//function that adds click behavior to the insert button
function setupInsertButton(){
	//get our button and set on click listener
	document.getElementById("insert-button").addEventListener("click", function(){
		chrome.tabs.executeScript({
			file: "contentScripts.js"
		}, function(response){
			if(response != null){
				numImagesChanged += response[0].numImagesChanged;
				console.log(numImagesChanged);
				numImagesChangedView.innerHTML = numImagesChanged;
			}
		});
	});
}

//function that saves data when the extension closes
function setupDataSaver(){
	addEventListener("unload", function(event){
		backgroundPage.saveData({
			"numImagesChanged":numImagesChanged
		});
	});
}

//once all the stuff is loaded, call the main function
document.addEventListener("DOMContentLoaded", function(){
	chrome.storage.sync.get(['numImagesChanged'], function(result){
		main();
		numImagesChanged = result.numImagesChanged;
		numImagesChangedView.innerHTML = numImagesChanged;
	});
	main();
});