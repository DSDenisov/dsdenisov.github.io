// assigning variables to elements;
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lItem = document.getElementsByTagName('li');

// listening all existing items
function lineThrough (item){
	item.addEventListener("click", function(){
    item.classList.toggle("done");
	});
}

function delItem() {
	ul.removeChild(this.parentNode);
}

function addButtonAfter(liItem) { //adding button after
	var btn = document.createElement("button");
   	btn.appendChild(document.createTextNode("delete"));
   	btn.addEventListener("click",delItem);
   	
   	var wraper = document.createElement("span");
   	wraper.appendChild(liItem.cloneNode(true));
   	liItem.parentNode.replaceChild(wraper, liItem)
   	wraper.classList.add("line");
   	lineThrough(wraper.firstChild);

   	wraper.appendChild(btn);

   	// liItem.parentNode.insertBefore(btn, liItem.nextSibling); 
}

for (var i=0; i<lItem.length; i++){
	addButtonAfter(lItem[i]);
};


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	lineThrough(li);
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




