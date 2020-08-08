
// qaHolder - holds an array of qaObjects
// var qaHolder = [qaObject0, qaObject1, ...qaObjectN]

// will interface with the results object.

//taken from https://stackoverflow.com/questions/2145914/including-a-js-file-within-a-js-file
//Make qaObject accessible.
var qaObj = document('qaObject.js');
qaObject.src = './qaObject.js';
document.getElementsByTagName('head')[0].appendChild(qaObject);

//Functions

//
var qaHolder = {
    numQuestions: 100,
    holder: [numQuestions],

    createQuestions: function(){
        for(i =0; i <= numQuestions; i++)
        {
            //create the number of questions....
            //thus the number of qaObjects that will be held in the array.

        }
    },

    addQAholder: function(qaHolderobj){
       holder += [qaHolderobj]  
    }



    //function to add a qaObject to an array
    
}

//testing the creation of an object
var qHolder = qaHolder;
var test = qaObject;
test.question = "What year was JFK born?";
test.correctAnswr = "May 29,1917";
test.incorrect1 = "Sep 09 1911";
test.incorrect2 = "Jun 06, 1966";
test.incorrect3 = "Nov 22,1963";
qHolder.addQAholder(test);







