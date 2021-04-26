// import barba from "./@barba/core";

function openNav() {
	document.getElementById("navclosebtn").style.visibility = "visible";
	document.getElementById("navopenbtn").style.visibility = "hidden";
	document.getElementById("sidenav").style.marginLeft = "0px";
	document.getElementById("dim").style.height = "100%";
}

function closeNav() {
	document.getElementById("navclosebtn").style.visibility = "hidden";
	document.getElementById("navopenbtn").style.visibility = "visible";
	document.getElementById("sidenav").style.marginLeft = "-310px";
	document.getElementById("dim").style.height = "0%";
};

window.addEventListener('keydown', function (e) {
	console.log(`You pressed ${e.key}`);
}, false);