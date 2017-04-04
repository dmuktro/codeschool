// http://try.jquery.com/levels/4/challenges/7/ (4.9,10,11)
//  Write an event handler that watches for 
//  mouseenter on any li elements within our .photos elements and runs an empty function. 
//  We'll implement the function later on.  
//    Inside our new mouseenter event handler, call the slideToggle() method on the 
//    span tag within the picture description. You'll need to traverse down from the current element, 
//    $(this), and then find() the span tag.
//  It looks like both of our event handlers on the .photos li elements are exactly the same! 
//  Let's go ahead and refactor these into a new function named 
//  showPhotos() and change our event handlers to reference that instead.

$(document).ready(function() {
  $('#tour').on('click', 'button', function() { 
    	$('.photos').slideToggle();
  	});
  // create showPhotos() function
  function showPhotos() {
  	$(this).find('span').slideToggle();
  }
  $('#tour').on( 'mouseleave' , 'li', showPhotos );
  $('#tour').on( 'mouseenter' , 'li', showPhotos );
});
 
