window.onload=(function(){
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector("h1").style.color="white";
}
)


var source = ["IMG_20191007_173504.jpg","IMG_20191007_173532.jpg","IMG_20191007_173549.jpg","IMG_20191007_203208.jpg"];
var i = 0;
setInterval(carouselDisplay,5000);
function carouselDisplay(){
	document.getElementById('carousel').setAttribute("src",source[i]);
	i++;
	if(i == (source.length)){
		i = 0
	}
}