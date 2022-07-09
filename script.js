function squrt(target) {
	
	target.classList.add("wet"); //kncoks the target over
}

function targetup(target) {

	target.classList.add("up");//Uncaught TypeError: Cannot read properties of undefined (reading 'classList')
	setTimeout( ()=> {
		target.classList.remove("up");
	}, 3000);
}

//see what targets arnt soaked
function drytargets() {
	return document.querySelector(".target:not(.wet)");
}

function randomtargetup() {
	
	var randomtarget = Math.random() * drytargets().length; //randomly picks a dry taget
	randomtarget = Math.floor(randomtarget);
	var target = drytargets()[randomtarget];
	
	var randomDelay = Math.random() *2000 + 1000;
	
	setTimeout( ()=> {
		targetup(target);
		randomtargetup();
	}, randomDelay);
	
}