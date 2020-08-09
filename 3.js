printSegitiga = (x) => {
	if(typeof x !== 'number') { console.log("Input Harus Number!!") //validasi
  	return false }
	for (let i = x; i >= 1; i--) { //loop
		  let num = ''
			for (let j = 1; j <= i; j++) {
				num += j
			}
			console.log(num)
		}
	} 
printSegitiga(4)