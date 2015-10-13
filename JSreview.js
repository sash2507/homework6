// Exercise to create a multi dimensional array and set up a loop //
// An array has multiple elements - they can be whatever //
//lets say we want to print out all elements of first array, then print all elkmeents of second //

var taco_array = ["taco", "burrito", "quesadilla"];
var color_array = ["red", "yellow", "blue"];

var combined_array = [taco_array, color_array];

// in the first iteration i is the 
for(var i = 0; i < combined_array.length; i++);{
	//console.log(combined_array[i]);
	for (var j = 0; j < combined_array[i].length; j++) {
		console.log(combined_array[i][j]);
	}
}

// Let's try out a while loop - while a certain condition is true, the code runs //
x = 6;
while (x < 10){
	console.log ("x is currently " + x);
	x++;
}

// This is a while loop that "sings" 99 bottles of beer..98 bottles..97...down to 1//
x = 99;
while (x >= 0){
	if (x === 1){
		console.log (x = "bottle of beer on the wall...take one down, pass it on");
	}
	console.log (x + "bottles of beer on the wall...take one down, pass them on");
	x--;
}






var pop = ["madonna", "ladygaga"];
var rock = ["floyd", "gunsnroses"];
var musicArray = [pop, rock];
console.log(musicArray[0][0]);
console.log(musicArray[1][0]);
console.log(musicArray[1][1]);
