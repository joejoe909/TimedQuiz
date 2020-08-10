//qnaCard
var qnacard = document('qnaCard.js');
qnacard.src = './qnaCard.js';
//testHolder
var testHolder = document('testHolder.js');
qaObject.src = './testHolder.js';

//how questions can be inserted.
var q0 = qnacard;
q0.question = "What year was JFK born?";
q0.correctAnswr = "May 29,1917";
q0.incorrect1 = "Sep 09 1911";
q0.incorrect2 = "Jun 06, 1966";
q0.incorrect3 = "Nov 22,1963";

var q1 = qnacard;
q1.question = "In Javascript we store items such as charcters, sentences, full documents and numbers, as....."
q1.correctAnswr = "Variables";
q1.incorrect1 = "In Web pages";
q1.incorrect2 = "On the computer hard drive.";
q1.incorrect3 = "In the cloud.";

var test = qaObject;
test.addQAholder(q0);
test.addQAholder(q1);

function setQNAoutput(number) {
    question = test[number].getQuestion();
    correct = test[number].getCorrectAnswer();
    incorrect1 = test[number].getIncorrectAnswer1();
    incorrect2 = test[number].getIncorrectAnswer2();
    incorrect3 = test[number].getIncorrectAnswer3();
} 


var question;