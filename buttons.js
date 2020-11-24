
var button1 = document.getElementById('button_1');
var button2 = document.getElementById('button_2');
var button3 = document.getElementById('button_3');


var counterButton1 = 0;
var counterButton2 = 0;
var counterButton3 = 0;

button1.addEventListener("click", function() {
	counterButton1++;
	button1.innerText = counterButton1;
	var img = document.getElementById('image');
	img.src = "images/1.jpg";
	document.getElementById("container").style.backgroundImage = "url('images/bg1.jpg')";
});
button2.addEventListener("click", function() {
	counterButton2++;
	button2.innerText = counterButton2;
	var img = document.getElementById('image');
	img.src = "images/2.jpg";
	document.getElementById("container").style.backgroundImage = "url('images/bg2.jpg')";
});
button3.addEventListener("click", function() {
	counterButton3++;
	button3.innerText = counterButton3;
	var img = document.getElementById('image');
	img.src = "images/3.jpg";
	document.getElementById("container").style.backgroundImage = "url('images/bg3.jpg')";
	});







