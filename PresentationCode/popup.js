var numImagesChanged = 0;
var counterView;
var backgroundPage;

function main(){
	counterView = document.getElementById('num-images-changed');
	backgroundPage = chrome.extension.getBackgroundPage();
	console.log(backgroundPage);

	setupInsertButton();
	setupDataSaver();
}

//create a function to add insert images into webpage
function setupInsertButton(){
	document.getElementById('insert-image-button').addEventListener('click', function(){
		//inject code into the webpage
		chrome.tabs.executeScript({
			file:"contentScripts.js"
		}, function(result){
			console.log(result[0].numImagesChanged);
			numImagesChanged += result[0].numImagesChanged;
			counterView.innerHTML = numImagesChanged;
		});
	});
}

function setupDataSaver(){
	addEventListener("unload", function(event){
		backgroundPage.saveData({
			"numImagesChanged":numImagesChanged
		});
	});
}


document.addEventListener('DOMContentLoaded', function(){
	chrome.storage.sync.get(['numImagesChanged'], function(result){
		main();
		numImagesChanged = result.numImagesChanged;
		counterView.innerHTML = numImagesChanged;
	});
});






