
//render test
//The question.
var divQuestion = document.createElement('div');
divQuestion.className = 'alert alert-primary';
var qlabel = document.createElement('label');
qlabel.className = 'col control-label';
qlabel.innerHTML = 'this can be used to show the question';
divQuestion.appendChild(qlabel);
//document.body.appendChild(divQuestion);

var divA1 = document.createElement('div');
divA1.className = 'alert alert-success';
var btn1 = document.createElement('button');
btn1.className = 'btn btn-success';
btn1.textContent = "This can be used to show a possible answer";
divA1.appendChild(btn1);
//document.body.appendChild(divA1);

var divA2 = document.createElement('div');
divA2.className = 'alert alert-success';
var btn2 = document.createElement('button');
btn2.className = 'btn btn-success';
btn2.textContent = "This can be used to show a possible answer";
divA2.appendChild(btn2);
//document.body.appendChild(divA2);

var divA3 = document.createElement('div');
divA3.className = 'alert alert-success';
var btn3 = document.createElement('button');
btn3.className = 'btn btn-success';
btn3.textContent = "This can be used to show a possible answer";
divA3.appendChild(btn3);
//document.body.appendChild(divA3);

var divA4 = document.createElement('div');
divA4.className = 'alert alert-success';
var btn4 = document.createElement('button');
btn4.className = 'btn btn-success';
btn4.textContent = "This can be used to show a possible answer";
divA4.appendChild(btn4);
//document.body.appendChild(divA4);

var cont = document.createElement('div');
cont.className = 'container-sm mt-4';

cont.appendChild(divQuestion);
cont.appendChild(divA1);
cont.appendChild(divA2);
cont.appendChild(divA3);
cont.appendChild(divA4);

document.body.appendChild(cont);

//////////////////////END of render instructs

//load the test
var testHandler = document('testHander.js');
testHandler.src = './testHandler.js';

var aTest = testHandler;

// sent to the boot strap btns for display
qlabel.innerHTML = aTest.q0.getQuestion();
btn1.textContent = aTest.q0.getCorrectAnswer();
btn2.textContent = aTest.q0.getIncorrectAnswer1();
btn3.textContent = aTest.q0.getIncorrectAnswer2();
btn4.textContent = aTest.q0.getIncorrectAnswer3();   