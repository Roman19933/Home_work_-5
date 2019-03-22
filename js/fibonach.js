function fibonacci(n) { 
	let result = 1;
	let a = 1;
	let b = 1;
	for(i = 0; i<= n-3; i++) {
		result = a + b
		a = b
		b = result
	}
	 return result;

 }
fibonacci(3)
fibonacci(5)
fibonacci(7)
