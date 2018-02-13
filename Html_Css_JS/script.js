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

function addButtonAfter(liItem) { //adding button after
	var btn = document.createElement("button");
   	btn.appendChild(document.createTextNode("delete"));
   	liItem.parentNode.insertBefore(btn, liItem.nextSibling); 
}

for (var i=0; i<lItem.length; i++){
	foo(lItem[i]);
	addButtonAfter(lItem[i]);
};




function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	foo(li);
	addButtonAfter(li);
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




