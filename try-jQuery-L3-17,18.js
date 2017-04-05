// <!-- usage of jQuery as in  http://try.jquery.com/levels/3/challenges/17
,18 
--> 
// Let's add a bit more incentive to get people to book these tours by offering a discount if they book today. 
// Create a discount variable, and then assign the discount that is stored in the 
// data() attribute on the .tour element. To assign the correct data value, 
// traverse from the clicked button, $(this), to the closest .tour element, and then use 
// data() to find the discount. We don't need to do anything with the discount variable just yet.
//   We want to show this discount to the user in the message we show after the "Book Now" button is clicked. 
//   Go ahead and change the content of message to Call 1-555-jquery-air for a $<discount> discount., 
//   and swap out <discount> for the discount price.
//     We're using this code twice: $(this).closest('.tour') to find the tour element. 
//     Refactor your code so that the element is set to a variable named tour, and then 
//     use that variable instead. This way, we only query the DOM once for the tours, instead of twice.

$(document).ready(function() {
  $('button').on('click', function() {
  	var tour = $(this).closest('.tour');
        var discount = tour.data('discount');
	var message = $('<span>Call 1-555-jquery-air for a ' + discount + 'discount.</span>');    
    tour.append(message); 
    $(this).remove();
  });
});
