/*

function cname() {
	return "Saleem Shahzad";
}

function edu() {
	return "He has done M.Phil Mathematics from UOS back in 2018";
}

function hideImage() {
	document.getElementById('profile').style.display='none';
}

function showImage() {
	document.getElementById('profile').style.display='block';
}


let a = "My age is ";
let b = 20;
console.log(a == b);

let a = "20";
let b = 2 * 10;
console.log(a == b);	

let a = "20";
let b = 2 * 10;
console.log(a === b);	

let a = "20";
let b = 2 * 10;
console.log(a != b);

let a = "20";
let b = 2 * 10;
console.log(a !== b);	

let a = "25";
let b = 21;
console.log(a > b);		

let a;
a = 17;
if (a < 18) {
	console.log("You cannot apply for license.")
}
else {
	console.log("Thanks for confirming your age. You can apply for license now.")
}		

function voteable() {
	let age = document.getElementById("age").value; 
	let voter = 
	(age < 18) ? "Too young to vote":"Old enough to vote";
	document.getElementById("demo").innerHTML = voter;
}	*/

function eligibility() {
	let age = document.getElementById("age").value; 
	let voter = 
	(age <= 20 || age >= 30) ? "Congratulations! You are eligible":"Sorry! You are NOT eligible"; 
	if (isNaN(age)) {
		document.getElementById("demo").innerHTML = "Invalid input";
	}
	else {
		document.getElementById("demo").innerHTML = voter;
}	}


