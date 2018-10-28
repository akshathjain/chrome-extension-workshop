/*
Name: Akshath Jain
Date: 10/26/18
Purpose: WDW -- changes all images to farnam
*/

farnamImageUrls = [
	"https://www.cs.cmu.edu/~farnam/images/Farnam-Jahanian.jpg",
	"http://web.eecs.umich.edu/~farnam/images/fj.jpg",
	"https://www.cmu.edu/news/stories/archives/2015/february/images/farnam-jahanian-400x250-min.jpg"
]

var images = document.getElementsByTagName("img"); //this is an array of images
for(var i = 0; i < images.length; i++)
	images[i].src = farnamImageUrls[Math.floor((Math.random() * farnamImageUrls.length))];