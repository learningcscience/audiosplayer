



	let names = ["BATASH~ Shashwot Khadka", "NEEFX - Cold", "NEEFX - Grateful", "24K Goldn - MOOD", "Pink - $weat", "Timro Mann Ma A Kancha Official MV",  "Ali Gatie - It's You", "BEEST - Sapana Haru Ferdai", "[Eklai Basera Muskuraunu Ho Maya]"];

	let songs = ["songs/batash.mp3", "songs/cold.mp3", "songs/grateful.mp3", "songs/mood.mp3", "songs/sweat.mp3",  "songs/timro-manma.mp3", "songs/it's.mp3", "songs/sapana.mp3", "songs/maya.mp3"];

	let images = ["images/img-1.jpg", "images/img-2.jpg", "images/img-3.jpg", "images/img-4.jpg","images/img-5.jpg", "images/img-6.jpg", "images/img-7.jpg", "images/img-8.jpg", "images/img-9.jpg"];

	let audioIndex = 0;




var vid = document.querySelector("audio");
vid.oncanplay = function() {
    alert("Can start playing video");
};





	let b = document.getElementById("icon");





document.getElementById("next").addEventListener("click", function(){

	audioIndex= audioIndex+1;

	if(audioIndex >= songs.length ){

		audioIndex = 0;
	}




	let audio = document.getElementById("song");

	let source = document.getElementById("srccontainer");

	source.src = songs[audioIndex];

	audio.load();

	audio.play();

	b.src = "images/pause.png";


 	document.querySelector("h2").innerText = names[audioIndex];
	

	let Imgsource = document.getElementById("slide");

	Imgsource.src = images[audioIndex];

	let lo = document.getElementById("logo");

	lo.classList.add("logo")



});





	document.getElementById("pre").addEventListener("click", function(){


	audioIndex= audioIndex - 1;
		

	if(audioIndex < 0 ){

		audioIndex = songs.length - 1;
	}



	let audio = document.getElementById("song");

	let source = document.getElementById("srccontainer");

	source.src = songs[audioIndex];

	audio.load();

	audio.play();

	b.src = "images/pause.png";



	document.querySelector("h2").innerText = names[audioIndex];



	let Imgsource = document.getElementById("slide");

	Imgsource.src = images[audioIndex];

	let lo = document.getElementById("logo");

	lo.classList.add("logo");




 
});







function play(){

	let a = document.getElementById("song");

	if(a.paused){
		a.play();
		b.src = "images/pause.png";
		let lo = document.getElementById("logo");
		lo.classList.add("logo");
		
	}
	else{
		a.pause();
		b.src = "images/play.png";
		let lo = document.getElementById("logo");
		lo.classList.remove("logo");
	}


}


function show(){

	let c = document.getElementById("settings");
	
	if(c.style.display === "block"){
		c.style.display = "none";
	}
	
	else{
		c.style.display = "block";
	}
}


let modal = document.getElementById("modal");

let span = document.getElementsByClassName("close")[0];


function openModal(){

	modal.style.display = "block";

	let c = document.getElementById("settings");

	c.style.display = "none";

}

span.onclick = function() {

  modal.style.display = "none";

}

window.onclick = function(close) {

  if (close.target == modal) {

    	modal.style.display = "none";

  }

}





let m = document.getElementById("song");

function mute(){
	m.volume = 0;
}


function halfvol(){
	m.volume = 0.2;
}

function fullvol(){
	m.volume = 1;
}



let contents = document.getElementById("modals");

let spans = document.getElementsByClassName("closer")[0];

function playSpeed(){

	contents.style.display = "block";
	let c = document.getElementById("settings");

	c.style.display = "none";
}
spans.onclick = function(){

	contents.style.display = "none";
}



let n = document.getElementById("song");

function fast(){

	n.playbackRate = 1.5;
}

function middle(){

	n.playbackRate = 1.0;
}

function slow(){

	n.playbackRate = 0.7;
}

function visible(){

	let c = document.getElementById("settings");

	c.style.display = "none";

	let z = document.getElementById("list");
		if(z.style.display === "block"){
			z.style.display = "none";
		}
		else{
			z.style.display = "block";
		}
}


function hide(){
	let menu = document.getElementById("list");
	menu.style.display = "none";
}



function playAudio(index){

   let currentAudio=document.getElementById("song");

   let source=document.getElementById("srccontainer");

		source.src= songs[index];
		
		currentAudio.load();

		currentAudio.play();

       b.src = "images/pause.png";
 
       let lo = document.getElementById("logo");

      lo.classList.add("logo");


       //change audio titles
      document.querySelector("h2").innerText = names[index];

     //change image
      let Imgsource = document.getElementById("slide");
      Imgsource.src = images[index];
 
}


