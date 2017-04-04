// <!-- usage of jQuery as in  http://try.jquery.com/levels/3/challenges/22,23  --> 
//    some result filtering options to our page. We want to be able to click on a filter and 
//    highlight the corresponding tours with a .highlight class. Go ahead and get started by 
//    creating the click handler for the .on-sale filter from the #filters list. 
//    Don't worry about the contents of the click handler function, 
//    we'll get it working in the next few challenges.
//  Inside our event handler, find all .tour elements and filter() for 
//  only those that have a class of .on-sale. Add a class of 
//  highlight to only these filtered tours on click.
//    There is one thing left to do, we need to remove the 
//    highlight class immediately after clicking a filter so we are only 
//    highlighting the correct elements. Another filter has been added to make things interesting. 
//    In both of these filters, remove the highlight class from anything that has it.
// <!-- usage of jQuery as in  http://try.jquery.com/levels/3/challenges/24,  --> 
//  some code of challenges #23 

$(document).ready(function() {
  $('#filters').on('click', '.on-sale', function() {
    $('.highlight').removeClass('highlight');
    $('.tour').filter('.on-sale').addClass('highlight');
    $('.clearing').text("!clear highlight");
  });

  $('#filters').on('click', '.featured', function() {
    $('.highlight').removeClass('highlight');
    $('.tour').filter('.featured').addClass('highlight');
    $('.clearing').text("!clear highlight");
  });

  $('#filters').on('click', '.clearing', function() {
    $('.highlight').removeClass('highlight');
    $('.clearing').text("[reserved]");
  });
});
