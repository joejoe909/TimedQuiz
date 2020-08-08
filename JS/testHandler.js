
//qaObject
var qaObj = document('qaObject.js');
qaObject.src = './qaObject.js';
document.getElementsByTagName('head')[0].appendChild(qaObject);

//qaHolder
//taken from https://stackoverflow.com/questions/2145914/including-a-js-file-within-a-js-file
//Make qaObject accessible.
var qaObj = document('qaObject.js');
qaObject.src = './qaObject.js';
document.getElementsByTagName('head')[0].appendChild(qaObject);




//how questions can be qutomated.
//testing the creation of an object
var qHolder = qaHolder;
var test = qaObject;
test.question = "What year was JFK born?";
test.correctAnswr = "May 29,1917";
test.incorrect1 = "Sep 09 1911";
test.incorrect2 = "Jun 06, 1966";
test.incorrect3 = "Nov 22,1963";
qHolder.addQAholder(test);

