const chain = (num, fs) => fs.reduce((a,el) => el(a), num)

function add(x) {
	return x + 10;	
}

function mult(x) {
	return x * 30;
}

console.log(chain(2, [add, mult]), 360, "Error: chain function does not work");