var imageUrl = "https://www.cmu.edu/marcom/brand-standards/images/logos-colors-type/CMULogo_do-min.png";
var images = document.getElementsByTagName('img');
for(var i = 0; i < images.length; i++)
	images[i].src = imageUrl;
