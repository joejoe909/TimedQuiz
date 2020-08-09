// qaObject
// - array that holds a question
// - array that is correct.
// - array that is incorrect.
// - array that is incorrect.
// - array that is incorrect.


// - function to determine right / wrong answer.which will then produce an object array of
// qaHolder data object

    var qaObject = {
    question: "Please enter a question here.",
    correctAnswr: "The Correct answer stored here.",
    incorrect1: "An incorrect answer.",
    incorrect2: "An incorrect answer.",
    incorrect3: "An incorrect answer.",
    corStatus: "true",   //Correct status if true will be used to produce correct/incorrect card.  
    userAnswer: correctAnswr, //used to store the answer

    checkAnswer: function(){
        //logic to check answer.
    },

    getAnswer: function(){
        //logic to get answer.
    },
}