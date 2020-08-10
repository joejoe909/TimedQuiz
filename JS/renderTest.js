
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
divA5.className = 'alert alert-warning';
var btn5 = document.createElement('button');
btn5.className = 'btn btn-warning';
btn5.textContent = "Answer";
btn5.setAttribute("id", "AnswerID");
var divRw = document.createElement('div');
divRw.className = 'row';
var divRw = document.createElement('div');
divRw.className = 'row';
var divCol1 = document.createElement('div');
divCol1.className = 'col-2';
var divCol2 = document.createElement('div');
divCol2.className = 'col-10 mt-2' ;
var chLbl = document.createElement('label');
chLbl.className = 'col control-label';
chLbl.innerHTML = 'this can be used to show the users choice';
divCol1.appendChild(btn5);
divCol2.appendChild(chLbl);
divRw.appendChild(divCol1);
divRw.appendChild(divCol2);
divA5.appendChild(divRw);



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

btn1.addEventListener("click", function (event) {
    event.preventDefault();
   // var setChoiceText = this.querySelector(".btn1");
    chLbl.innerHTML =  "btn1 text"; //this.querySelector(setChoice.getItem)
    setDisplay();
});

btn2.addEventListener("click", function (event) {
    event.preventDefault();
    chLbl.innerHTML = "btn2 text";
    setDisplay();
});

btn3.addEventListener("click", function (event) {
    event.preventDefault();
    chLbl.innerHTML = "btn3 text";
    setDisplay();
});

btn4.addEventListener("click", function (event) {
    event.preventDefault();
    chLbl.innerHTML = "btn4 text";
    setDisplay();
});

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