var printSegitiga = 5;
let x = printSegitiga;

if(typeof x !== 'number'){
  console.log("Input Harus Number!!")
  return false;
}

for (let i = x; i >= 1; i--) {
  let num = '';
	for (let j = 1; j <= i; j++) {
		num += j;
	}
	console.log(num);
}