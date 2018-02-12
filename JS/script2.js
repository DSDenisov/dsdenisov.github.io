var todos = [
	"clean room",
	"brush",
	"exercise",
	"study programming",
	"eat healthy"
];

// for(var i=0; i < todos.length; i++){
// 	console.log(todos[i]+'!');
// 	todos[i] = todos[i]+'!';
// }

// var counterOne = 10;
// while(counterOne > 0){
// 	console.log(counterOne);
// 	counterOne--;
// }

// var i = 0;
// do{
// 	console.log(todos[i]);
// 	i++;
// } while (i<10)

function todo(todo, i) {
	console.log(todo, i)
}

todos.forEach(todo)