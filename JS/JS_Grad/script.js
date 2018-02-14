var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var click = document.getElementById("spin");

chGradient();
css.textContent = body.style.background+";"



function chGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+color1.value
	+", "
	+color2.value
	+")";

	css.textContent = body.style.background+";"
}

color1.addEventListener("input", chGradient);
color2.addEventListener("input", chGradient);
click.addEventListener("click", function(){
	var first = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
	var second = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();

	color1.value = first;
	color2.value = second;

	chGradient();
});

