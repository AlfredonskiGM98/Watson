function newImage (){
	var image = document.getElementById("myImage") ;
	if(image.src.match("image2")){
		image.src = "image1.jpg";
		}else{
		image.src = "image2.jpg"
		}
	}
