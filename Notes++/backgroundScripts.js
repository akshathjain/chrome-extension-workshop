/*
Name: Akshath Jain
Date: 11/2/18
Purpose: background scripts for saving user data
*/

function saveData(obj){
	chrome.storage.sync.set(obj);
}