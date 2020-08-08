
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
    holder: [],                                             //array that holds qaObj
    currentQuestion : 0,

    createQuestions: function(){
        for(i =0; i <= this.holder.length; i++)
        {
            //create the number of questions....
            //thus the number of qaObjects that will be held in the array.

        }
    },

    addQAholder: function(qaHolderobj){
       holder += [qaHolderobj]  
    },

    outputQ: function(currentQuestion){
        //code to output the question number
        //code to output to #questiondDsp
        //code to randomly output to id 1-4

    },


    
}










