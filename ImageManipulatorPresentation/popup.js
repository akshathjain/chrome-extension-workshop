
var insertButton;

function main(){
	insertButton = document.getElementById('insert-button');
	//console.log('hello');
	//console.log(insertButton);
	insertButton.addEventListener('click', function(){
		chrome.tabs.executeScript({
			file: "contentScripts.js"
		});
	});
}

document.addEventListener('DOMContentLoaded', function(){
	main();
});