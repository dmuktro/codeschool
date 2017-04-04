// http://try.jquery.com/levels/4/challenges/7/ (4.9,10)
//  Write an event handler that watches for 
//  mouseenter on any li elements within our .photos elements and runs an empty function. 
//  We'll implement the function later on.  
//    Inside our new mouseenter event handler, call the slideToggle() method on the 
//    span tag within the picture description. You'll need to traverse down from the current element, 
//    $(this), and then find() the span tag.

$(document).ready(function() {
  $('#tour').on('click', 'button', function() { 
    	$('.photos').slideToggle();
  	});
// add a new event handler
//  $('#tour').on( 'mouseenter' , 'li', function() {
//  		$(this).find('span').slideToggle();
//  	});
  $('#tour').on( 'mouseleave' , 'li', function() {
  		$(this).find('span').slideToggle();
  	});
});
