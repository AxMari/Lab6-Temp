var newTemp = "";

function tempConvert(k,t) {
	if(k === "C") {
		newTemp = (t * 9/5) + 32;
		console.log(newTemp + "°F");
	}
	else if(k === "F") {
		newTemp = (t - 32) * (5/9);
		console.log(newTemp + "°C");
	}
	else {
        console.log("Err: Please enter either °C or °F");
    }

}

tempConvert("C",0);
tempConvert("F",212);
tempConvert("K",45);