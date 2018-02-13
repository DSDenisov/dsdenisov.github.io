var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var lItem = document.getElementsByTagName('li');

// listening all existing items
function foo (item){
	
	item.addEventListener("click", function(){
    item.classList.toggle("done");
	});
}

function spanWraper(parent) {
	
}

for (var i=0; i<lItem.length; i++){
	foo(lItem[i]);
// var btn = document.createElement("button");
//    btn.appendChild(document.createTextNode("delete"));
//    lItem[i].appendChild(btn);

};




function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	foo(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);




