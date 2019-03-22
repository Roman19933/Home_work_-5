function cursorCheck(str){
	let string = str.toLowerCase()
	if(string.includes('ostap') || string.includes('ironman')||string.includes('cursor')){
		return true;
	}
	else{
		return false;
	}
}
console.log(cursorCheck('Hello i am Ostap'));
console.log(cursorCheck('SUperMan is hero'));