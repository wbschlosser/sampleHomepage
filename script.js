/*
* in body of index.html
* To access html elements in JS, use document.getElementByID(id) method.
* use id attribute to ID the html element, and innerHTML to refer to that element.
*
*/
//randomizes background
var bgs = ['bg1','bg2','bg3'];
var bg = bgs[Math.floor(Math.random() * bgs.length)];
document.querySelector('html').classList.add(bg);

function getDate(){//displays date
var today = new Date();
var date = today.getDate();
var month = today.getMonth();
month++;
var year = today.getFullYear();
document.getElementById("date").innerHTML = date + "/" + month + "/" + year;
}