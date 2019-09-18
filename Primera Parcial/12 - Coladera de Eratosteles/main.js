function coladera() {
	var nPrimos = new Array(100);
	nPrimos[0] = false;
	nPrimos[1] = true;
	for (let i=3;i<=100;i++) {
		nPrimos[i-1] = (i%2!=0);
	}
	for (let i=3;i<=Math.sqrt(100);i++) {
		for (let a=(i*2);a<=100;a+=i) {
			nPrimos[a-1] = false;
		}
	}
	for (i=1;i<=100;i++) {
		if (nPrimos[i-1]==true) {
			console.log(i);	
		}
	}
}
console.log(coladera());