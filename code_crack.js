var num = Math.floor((Math.random()* 999));
var digit = [];
var output = document.getElementById('code');

//function to check the code with guessed code
function codeChecker(){
	var a = document.getElementById("in1").value;
	var b = document.getElementById("in2").value;
	var c = document.getElementById("in3").value;
	numberSeparator();
	if(a==digit[0] && b==digit[1] && c==digit[2]){
		output.innerHTML += "Wow! you got it right,it was in fact " + num;
	}
	else{ 
	if(a==digit[0]){
		output.innerHTML += a ;
	}
	else if(a>digit[0]){
		output.innerHTML += "L"
	}
	else if(a<digit[0]){
		output.innerHTML += "G"
	}

	if(b==digit[1]){
		output.innerHTML += b ;
	}
	else if(b>digit[1]){
		output.innerHTML += "L"
	}
	else if(b<digit[1]){
		output.innerHTML += "G"
	}

	if(c==digit[2]){
		output.innerHTML += c ;
	}
	else if(c>digit[2]){
		output.innerHTML += "L"
	}
	else if(c<digit[2]){
		output.innerHTML += "G"
	}
}
	output.innerHTML += "<br/>"
}

//function to separate the randomly generated three digit number to individual digits
function numberSeparator(){
	var n = num;
	while(n>0){
		digit.push(n%10);
		n=Math.floor((n/10));
	}
	digit.reverse();
}