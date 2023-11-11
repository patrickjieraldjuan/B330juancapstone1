

document.getElementsByTagName("html").onscroll = function() {htmlscroll()};

function htmlscroll() {
	document.getElementById('back-to-top').display = block;
}