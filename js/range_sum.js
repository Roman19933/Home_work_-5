function sumRange(start,end){
	// i=0;
	let result_sum=0;
	for (var i = start; i <= end; i++) {
	
	result_sum +=i;

	}
	if(start>end){
		console.log('Enter correct numbers!')
	} else{
		return result_sum;
	}
	// return result_sum;
}
sumRange(2,4)
sumRange(-1,3)