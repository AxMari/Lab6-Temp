var temp = parseInt(prompt("Temperature", "Numerical Only"));
var res = prompt("C or F?");
var type = res.toLocaleUpperCase();

var newTemp = "";

function tempConvert(k,t) {
	if(k === "C") {
		newTemp = (t * 9/5) + 32;
		alert(newTemp + "°F");
	}
	else if(k === "F") {
		newTemp = (t - 32) * (5/9);
		alert(newTemp + "°C");
	}
	else {
        alert("Err: Please enter either °C or °F");
	}
}

tempConvert(type,temp);
