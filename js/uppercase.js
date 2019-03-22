function firstAndLastToUpper(str){
	let up_str = str.charAt(0).toUpperCase() + str.slice(1,str.length-1) + str.charAt(str.length-1).toUpperCase();
	return up_str;
	
}

console.log(firstAndLastToUpper('str'))