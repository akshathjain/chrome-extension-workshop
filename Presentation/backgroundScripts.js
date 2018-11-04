function saveData(obj){
	//save user data
	console.log(obj);
	chrome.storage.sync.set(obj);
}