//get all the images
//replace the source in the images

var imageUrl = "https://www.cmu.edu/marcom/brand-standards/images/red-seal-greater-than-two-inches-min.png";

var images = document.getElementsByTagName('img');
for(var i = 0; i < images.length; i++)
	images[i].src = imageUrl;

({
	"numImagesChanged":images.length
});