var database = [{
		username: "dmitry",
		password: "supersecret"
	},{
		username: "sally",
		password: "321"
	},{
		username: "molly",
		password: "qwe"
	}];

var newsFeed = [{
		username:"Bobby",
		timeline:"So tired of all that learning"
	},
	{
		username:"Sally",
		timeline:"JS is so cool"
	},{
		username:"Mitch",
		timeline:"Programming is awesome"
	}];
var userNamePrompt = prompt("What's your username?");
var	passwordPrompt = prompt("What's your password?");


function isUserValid(username, password) {
	for (var i =0; i < database.length; i++){
		if (username === database[i].username && 
		password === database[i].password) {
		return true;
		}
	}
	return false;
}

function signIn(user, pass) {
	if (isUserValid(user, pass)) {
		console.log(newsFeed);
	}else {
		alert("sorry, access denied");
	}
}

signIn(userNamePrompt, passwordPrompt);