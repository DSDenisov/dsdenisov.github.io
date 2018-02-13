var data = document.getElementById('userinput');
var button = document.getElementById('enter');
var ul = document.querySelector("ul");

function dataLength(){
	return data.value.length;
}

function createLi(){
	var	li = document.createElement("li");
		li.appendChild(document.createTextNode(data.value));
		ul.appendChild(li);
		data.value = "";
}

function addLiAfterClick() {
	if (dataLength()>0) {
		createLi();
	}
}

function addLiAfterEnetr(ev) {
	if (dataLength()>0 && ev.keyCode ===13) {
		createLi();
	}
}

button.addEventListener("click", addLiAfterClick);

data.addEventListener("keypress",addLiAfterEnetr);