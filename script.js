function firstWord(s) {
  // your code here
	let arr = s.split(' ');
	 let str = arr.length()>0?arr[0]:'';
	return str;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
