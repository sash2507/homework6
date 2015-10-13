$(document).ready(function(){
	
	//Animates the div my-element by reducing opacity 30% over 1000ms
	$(".my-element").animate(
	{opacity: 0.70}, 1000);	
	
	//Generates an alert box upon clicking h1 and h4 tags
	$("h1").click(
	function(){
	alert("Welcome to Artsy!");
	})
	
	//Changes color of h3 tags to purple on toggle
	$("h4").toggle(
    function(){$("h3").css({color: "purple"});
	})
	
	//Reduces opacity of div menu by 50% over 2000ms
	var animateMenu = function(){
 	$(".menu").animate( {opacity: .5}, 2000 )
	}
	$(".menu").show(animateMenu)

	//Makes body fade-in over 1000ms
	$("body").fadeIn(1000);

	//Creates a visual effect of sliding sub-header over 600ms
	$("h4").slideUp(600);
	$("h4").slideDown(600);

	//Reduces opacity when mouse enters div 'literature'
  	$(".literature").mouseenter(function() {
        $(".literature").fadeTo("fast", 0.75);
    })
    //Returns opacity to normal when mouse exits div 'literature'
    $(".literature").mouseleave(function() {
	  	$(".literature").fadeTo("fast", 1);
	  })
})


