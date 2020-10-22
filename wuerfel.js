
// Neu würfeln (Aufruf per Button-Klick)
function neuerWurf() {
	
	let num = 6;
	let num2 = 6;
    document.getElementById("pasch").innerHTML = "";
	
	let random = (Math.random(0, 1) * (num));
	num = Math.floor(random) + 1;

	let random2 = (Math.random(0, 1) * (num2));
	num2= Math.floor(random2) + 1;

	let sum = num + num2;
	
	document.getElementById('erg').innerHTML = num;
	document.getElementById('erg2').innerHTML = num2;
	document.getElementById('sum').innerHTML = sum;



	if(num == num2){
		document.getElementById("pasch").innerHTML = "Pasch";
	}
	
}
