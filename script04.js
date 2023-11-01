function color(num){
	if (num == 1){
		return "Red";
	}
	else if (num == 2){
		return "Blue";
	}	
	else if (num == 3){
		return "Green";
	}
	else {
		return "NOT R,G,B";
	}
}

console.log(color(0));
console.log(color(1));
console.log(color(2));
console.log(color(3));
console.log(color(5));

