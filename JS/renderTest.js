
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
btn1.setAttribute("id", "bt1");
divA1.appendChild(btn1);
//document.body.appendChild(divA1);

var divA2 = document.createElement('div');
divA2.className = 'alert alert-success';
var btn2 = document.createElement('button');
btn2.className = 'btn btn-success';
btn2.textContent = "This can be used to show a possible answer";
btn2.setAttribute("id", "bt2");
divA2.appendChild(btn2);
//document.body.appendChild(divA2);

var divA3 = document.createElement('div');
divA3.className = 'alert alert-success';
var btn3 = document.createElement('button');
btn3.className = 'btn btn-success';
btn3.textContent = "This can be used to show a possible answer";
btn3.setAttribute("id", "bt3");
divA3.appendChild(btn3);
//document.body.appendChild(divA3);

var divA4 = document.createElement('div');
divA4.className = 'alert alert-success';
var btn4 = document.createElement('button');
btn4.className = 'btn btn-success';
btn4.textContent = "This can be used to show a possible answer";
btn4.setAttribute("id", "bt4");
divA4.appendChild(btn4);

///add button to go onto next question
var divA5 = document.createElement('div');
divA5.className = 'alert alert-danger';
var btn5 = document.createElement('button');
btn5.className = 'btn btn-danger';
btn5.textContent = "Answer";
btn5.setAttribute("id", "AnswerID");
var answerEL = document.querySelector("#Answer");
divA5.appendChild(btn5);


var cont = document.createElement('div');
cont.className = 'container-sm mt-4';

cont.appendChild(divQuestion);
cont.appendChild(divA1);
cont.appendChild(divA2);
cont.appendChild(divA3);
cont.appendChild(divA4);
cont.appendChild(divA5)

document.body.appendChild(cont);
/////Getinfo from index.html


var nameOutput = document.querySelector("#nameID");
var nameItem = localStorage.getItem("Name");
nameOutput.textContent = "Tester: " + nameItem;

//////////////////////END of render instructs

/////qnaCard Obj
var qnaCard = {
    qnaSet: [],
    addSet: function (set) {
        this.qnaSet.push(set);
    },
};

////////////End of QNA card.benefit-cost

/////create questions
var q0 = ["The Questions 0", "The Correct Answer", "An incorrect answer", "another incorrect answer", "yet another..."];
var q1 = ["The Questions 1", "The Correct Answer", "An incorrect answer", "another incorrect answer", "yet another..."];
var q2 = ["The Questions 2", "The Correct Answer", "An incorrect answer", "another incorrect answer", "yet another..."];
var q3 = ["The Questions 3", "The Correct Answer", "An incorrect answer", "another incorrect answer", "yet another..."];
var q4 = ["The Questions 4", "The Correct Answer", "An incorrect answer", "another incorrect answer", "yet another..."];

//////Add qeustions to the qnaCard set
var currentQNA = 0;
var qSet = qnaCard;
qSet.addSet(q0);
qSet.addSet(q1);
qSet.addSet(q2);
qSet.addSet(q3);
qSet.addSet(q4);
var currentQ = qSet.qnaSet[currentQNA];
setDisplay();  

//Event Listener for btns.
btn5.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("are we getting here?")
    currentQNA++;
    setDisplay();
});

function setDisplay()
{
    currentQ = qSet.qnaSet[currentQNA];
    qlabel.innerHTML = currentQ[0];
    btn1.textContent = currentQ[1];
    btn2.textContent = currentQ[2];
    btn3.textContent = currentQ[3];
    btn4.textContent = currentQ[4];
}