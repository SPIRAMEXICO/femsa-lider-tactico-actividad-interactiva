function noRepRandom(val) {
	const stor = new Set();
	const final = new Array();
	let i = 0;
  
	while (i < val) {
	  const num = Math.floor(Math.random() * val) + 1;
  
	  if (!stor.has(num)) {
		stor.add(num);
		final.push(num);
		i++;
	  }
	}
  
	console.log(final);
	return final;
  }
  
  //var cuantosElementos = 9;
  //var ranNum = noRepRandom(cuantosElementos);