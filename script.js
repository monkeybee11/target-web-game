function squrt(target) {
	
	target.classList.add("wet");
}

function targetup(target) {
	
	target.classList.add("up");
	
	setTimeout( ()=> {
		target.classList.remove("up");
	}, 3000);
}



function drytargets() {
	return document.querySelector(".target:not(.wet)");
}

function randomtargetup() {
	
	var randomtarget = Math.random() * drytargets().length;
	randomtarget = Math.floor(randomtarget);
	var target = drytargets()[randomtarget];
	
	var randomDelay = Math.random() *2000 + 1000;
	
	setTimeout( ()=> {
		targetup(target);
		randomtargetup();
	}, randomDelay);
	
}