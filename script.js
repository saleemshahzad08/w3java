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
}	

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

let a = "I love you"
console.log(a.length);	

let x = "Saleem"
let y = new String("Saleem")
console.log(x);
console.log(y);
console.log("The type of x is " + typeof x + " and the typo of y is " + typeof y);



let string1 = "I love my son";
let string2 = string1.slice(7, 13);
console.log(string2); 

let str1 = "I love my son";
let str2 = str1.substr(2, 4);
console.log(str2); 		

let a = "Please visit Microsoft. The best operating systems are provided by Microsoft."
let b = a.replace("Microsoft", "Apple")
console.log(b);		*/

/* To replace all ocurences, use /g flag as below. */

/*
let a = "Please visit Microsoft. The best operating systems are provided by Microsoft."
let b = a.replace(/Microsoft/g, "Apple")
console.log(b);		

let a = "Please visit Microsoft. The best operating systems are provided by Microsoft."
let b = a.replaceAll("Microsoft", "Apple")
console.log(b); 	

let a = "I love you Sawera";
let b = a.toLowerCase();
console.log(b);
// The output will be “i love you sawera”.	

let a = "I love you Sawera";
let b = a.toUpperCase();
console.log(b);
// The output will be “i love you sawera”.	


let a = "I love you Sawera";
console.log(a.length);
let b = a.padStart(40," ");
console.log(b);		

let a = "Harry Potter and The Half Blood Prince";
let b = a.charAt(6);
let c = a.charCodeAt(6)
console.log(b);
// The output will be “P”
console.log(c);
// The output will be “P”


let a = "I love Harry Potter. Potter is my favorite character";
console.log(a.indexOf("Potter"));
// The output will be 13
console.log(a.lastIndexOf("Potter"))
// The output will be 20 	

let a = "The rain is SPAIN stays mainly in plain.";
let myArray = a.match("ain");
console.log(myArray);		

let a = "The rain is SPAIN stays mainly in plain.";
let myArray = a.match(/ain/g);
console.log(myArray);		

let a = "The rain is SPAIN stays mainly in plain.";
let myArray = a.match(/ain/gi);
console.log(myArray);		

let a = "I love Sawera and Hussain."
console.log(a.includes("Hussain"));

let b = "I love Sawera and Hussain."
console.log(b.includes("Afzal"));		



let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("demo").innerHTML = html;


let a = `I love you Sawera in every breath of mine. 
You are my "cutie pie".`
console.log(a);		*/


/* ------ Template Literals (String Interpolation) ------ */

/*
let a = "I believe in you.";
let b = "You can do this";
console.log(`Dear Sawera! ${a} ${b}`);	


let text = String.fromCharCode(67, 72, 77);
console.log(text);	

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let a = toCelsius(98.6);
console.log("Normal human body temperature is " + a + ".");



const a = {company: "Suzuki", model: "2012", maxSpeed: "120Km/h"}
console.log("The manufacturer of vehicle is " + a.company);



const a = {
fName: "Saleem", 
lName: "Shahzad", 
fullName: function () {
	return this.fName + " " + this.lName;
}
}

console.log(a.fullName());	

let a = 32;
console.log(a.toString(36)); // Output: w
console.log(a.toString(32)); // Output: 10
console.log(a.toString(16)); // Output: 20
console.log(a.toString(12)); // Output: 28
console.log(a.toString(10)); // Output: 32
console.log(a.toString(8)); // Output: 40
console.log(a.toString(2)); // Output: 100000		


let a = 32
console.log(a.constructor);		

let a = 345.7982;
console.log(a.toExponential(2));		

// -------------- Looping over Array ------------------

const a = ["Muneeb","Hassan","Memoona"];
let flen = a.length;

let text = "<ul>";
for (i = 0; i < flen; i++) {
	text += "<li>" + a[i] + "</li>";
}
text += "</ul>";

/* yahan agar sirf get element by id wala kam kia to script 
ko html main </body> se pehle rakhna prre ga ta k jb script load
ho to tb wo element jis k innerHTML ko change krna ha wo mojood
ho. Agar head main rakha to script load ho jaye gi aur wo element
abhi load hua he ni hoga to issue hoga.  */

/*
window.onload = function() {
	list();
	function list() {
		document.getElementById("demo").innerHTML = text; 
	};
}
*/

// ------------------- Fill Method of Array ------------------

// const courses = ["Algebra", "Calculus", "Real Analysis", "DG", "Spline", "ODE", "PDE"];

// courses.fill("Mathematics", 3, 7);

// console.log(courses); 

// ------------------- Filter Method of Array ----------------

// const marks = [33, 37,49,85,12,15,17,34,28];
// const newArray = marks.filter(passingMarks);

// function passingMarks(marks) {
// 	return marks > 33
// };

// console.log(newArray); 

// window.onload = function() {
// 	passed();
// 	function passed() {
// 		document.getElementById("demo").innerHTML = newArray; 
// 	};
// }

// const ages = [32, 33, 12, 40];

// function checkAge(age) {
//   return age > document.getElementById("ageToCheck").value;
// }

// function myFunction() {
//   document.getElementById("demo").innerHTML = ages.filter(checkAge);
// }

// -------------------- Find Method of Array -----------------

// const subjects = ["Urdu", "Math", "Physics", "Chemistry", "Math"];

// let result = subjects.find(match);

// function match(subject) {
// 	return subject == "Math"
// };

// console.log(result);

// window.onload = function() {
// 	finding();
// 	function finding() {
// 		document.getElementById("demo").innerHTML = result; 
// 	};
// }

// ------------------- From Method of Array ------------------

let text = "ABCDEFGHI";
let a = Array.from(text);
console.log(a);

