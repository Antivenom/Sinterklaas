if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		load();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		load();
	});
}

function load(){
	var videoAmount = 1;
	var video = document.getElementsByTagName("video")[0];
	video.src = "./videos/video"+Math.ceil(Math.random()*videoAmount)+".mp4";
	video.volume = 0.2;
	video.load();
	setInterval(loop, 1000);
}

function loop(){
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}