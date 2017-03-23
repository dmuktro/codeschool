// In the Death Valley National Park, a group of environmentalists have begun a project 
// that will grow the population of Bighorn Sheep. Every month, the population 
// will multiply by four! To stay on top of this explosive growth, the scientists 
// would like a printout of how many sheep will make a new home in Death Valley.
// In deathValley.js, use the three existing variables to build a 
// while loop that prints a message for one year’s worth of time. 
// Here’s what the first two lines of output should look like:
// There will be 16 sheep after 1 month(s)!
// There will be 64 sheep after 2 month(s)!

var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;
while ( monthNumber <= monthsToPrint ) {
  numSheep= numSheep *4;
  console.log('There will be ' + numSheep + ' sheep after ' + monthNumber + ' month(s)!');
  monthNumber++; 
}
