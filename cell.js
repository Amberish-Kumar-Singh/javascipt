var n = Number(prompt("Enter umber of rows ",5));
var output = document.getElementById('para1');
var count=1;
var html="<table>"

for (var i = 0; i < n; i++) {
	html+="<tr>"
	for (var j = 0; j < n; j++) {
		html+="<td>cell " + count + "</td>";
		count ++ ;
	}
	html+="</tr>";
}
html+="</table>";
output.innerHTML=html;
