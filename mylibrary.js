$(document).ready(function(){

	$("h1").fadeIn(1000);


	$(".my-element").animate(
	{opacity: 0.25, width: "70%"}, 3000);	
	
	$("ul li").click(
	function(){
	alert("I'm clicked!");
	})

	var animateMenu = function(){
 	$(".menu").animate( {opacity: .40}, 4000 )
	}
	$(".menu").show(animateMenu)

	$("body").fadeIn(1000);
	$("ul li").slideUp(2000);
	$("ul li").slideDown(2000);

})


// // Creating anonymous functions...
// function(){
//  alert("I am anonymous!");
// }
// // Anonymous functions can be stored in variables:
// var my_anon_func = function(){ 
// 	alert("Har!"); 
// }

