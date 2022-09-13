var arr1=["apple","orange","banana","mango"];
document.write("The original array was " + arr1 + "<br/>" +"The length of above array is "+ arr1.length+"<br/>");
var favouriteFruit=prompt("Enter your favourite fruit name : ");
var dislikedFruit=prompt("Enter fruit name which you dislike from given array " );
arr1.push(favouriteFruit);
arr1.splice(arr1.indexOf(dislikedFruit),1);
document.write("The new array is " + arr1 + "<br/");
document.write("The sorted array is : <br/>" + arr1.sort());