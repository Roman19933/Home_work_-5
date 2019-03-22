function removeDuplicationLetters(str) { 
	let dublicat = '';
	for (i = 0; i < str.length; i++) {
		if(dublicat.toLowerCase().indexOf(str[i].toLowerCase())==-1 || str.charAt(i) == ' ') {
			dublicat+= str[i];
		}
	}
	
	console.log(dublicat);
 }
removeDuplicationLetters('Hello I am Iron Man') // 'Helo I am rn '