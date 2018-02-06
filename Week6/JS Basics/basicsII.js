function magic_multiply(x, y){
	if(x === 0 && y === 0){
		x = "All inputs zero";
	}
	else if(x.constructor === Array){
		for(let i=0;i<x.length;i++){
			x[i] = x[i] * y;
		}
	}
	else if(typeof y === 'string'){
		x = "Cannot multiply by string";
	}
	else if(typeof x === 'string'){
		x = x.repeat(y);
	}
	else{
		x = x*y;
	}
	return x;
}

//Test 1
let test1 = magic_multiply(5, 2);
console.log(test1);

//Test 2
let test2 = magic_multiply(0,0);
console.log(test2);

//Test 3
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);

//Test 4
let test4 = magic_multiply(7, "three");
console.log(test4);

//Test 5
let test5 = magic_multiply("Brendo", 4);
console.log(test5);