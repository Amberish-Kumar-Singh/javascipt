var x = document.getElementById('DOM');
var html=""
for(var i in document){
	html+= i + " is = " +  document[i] + "<br/>";
}
x.innerHTML=html;