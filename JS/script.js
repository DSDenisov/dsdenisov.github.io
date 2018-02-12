var database = [{
		username: "dmitry",
		password: "supersecret"
	}];

var newsFeed = [{
		username:"Bobby",
		timeline:"So tired of all that learning"
	},
	{
		username:"Sally",
		timeline:"JS is so cool"
	}];
var userNamePrompt = prompt("What's your username?");
var	passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
	if (user === database[0].username && 
		pass === database[0].password) {
		console.log(newsFeed);
	}else {
		alert("sorry, access denied");
	}
}

signIn(userNamePrompt, passwordPrompt);