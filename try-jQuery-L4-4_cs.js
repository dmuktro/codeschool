// http://try.jquery.com/levels/4/challenges/4 (4.4)
// After the DOM has loaded, let's add an event handler to watch for a click on button elements. 
// Just to make sure this doesn't impact anything else on the page, 
// only watch for clicks on buttons within the #tour element.
// ..The photos will now be shown, but we have no way of hiding them. 
// Let's change this to use slideToggle so that the photos will be hidden if they click again.

$(document).ready(function() {
  $('#tour').on('click','button',function() {
  	  alert('there are ' + $('img').length + ' images here');
      $('.photos').slideDown('slow',function() {
// Animation complete.
  });
      $('.photos').slideToggle() {
// togglinG complete.
  });
  });
});
