$("h1").css("color","red");
$("button").css("background-color","powderblue");

$(document).keypress(function(){
	console.log(event.key);
});

$("h1").on("mouseover",function(){
	$("h1").css("color","purple");
})

$("h1").on("mouseout",function(){
	$("h1").css("color","red");
})