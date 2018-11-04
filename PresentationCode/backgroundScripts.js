//save user data
function saveData(obj){
	chrome.storage.sync.set(obj);
}