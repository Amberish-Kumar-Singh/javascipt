function getUrl(){
	url=document.querySelectorAll("input")[0].value;
	goUrl(url)
}
function goUrl(url){
	window.location=url;
}