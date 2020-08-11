
//render test
//Set the timer
var timer = document.querySelector("#timeID");

//The question.
var divQuestion = document.createElement('div');    //this all can be made an obj
divQuestion.className = 'alert alert-primary';
var qlabel = document.createElement('label');
qlabel.className = 'col control-label';
qlabel.textContent = 'this can be used to show the question';
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

///answer button
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
divCol1.className = 'col-1';
var divCol2 = document.createElement('div');
divCol2.className = 'col-8 mt-2';
var chLbl = document.createElement('label');
chLbl.className = 'col control-label';
chLbl.textContent = "";
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

//////////////////////END of render instructs

//Event Listener for btns.
btn1.addEventListener("click", function (event) {
    event.preventDefault();
    var setChoiceText = document.getElementById("bt1").value;
    selectedChoice = an1;
    chLbl.textContent = setChoiceText;
    // setDisplay();
});

btn2.addEventListener("click", function (event) {
    event.preventDefault();
    var setChoiceText = document.getElementById("bt2").value;
    selectedChoice = an2;
    chLbl.textContent = setChoiceText;
    // setDisplay();
});

btn3.addEventListener("click", function (event) {
    event.preventDefault();
    var setChoiceText = document.getElementById("bt3").value;
    selectedChoice = an3;
    chLbl.textContent = setChoiceText;
    //  setDisplay();
});

btn4.addEventListener("click", function (event) {
    event.preventDefault();
    var setChoiceText = document.getElementById("bt4").value;
    selectedChoice = an4;
    chLbl.textContent = setChoiceText;
    // setDisplay();
});

btn5.addEventListener("click", function (event) {
    console.log(selectedChoice);
    if(!(selectedChoice === 0))
    {
        event.preventDefault();
        checkAnswer(selectedChoice);
        calcScore();
       if (iter === qSet.len - 1){
            storeScore();
            alert("End of test your score is: " + score);
            window.location.href = "./scoreCard.html";
        } else {
            iter++;
            setDisplay();
        }
    }else{
          chLbl.textContent = "Please choose a answer to move on!";
         console.log("iter value " + iter);
    }   
});

/////qnaCard Obj
var qnaCard = {
    qnaSet: [],
    len: 0,
    addSet: function (set) {
        this.qnaSet.push(set);
        this.len++;
    }
};

////////////End of QNA card.


/////create questions
var q0 = ["The Questions is 0: ", "The Correct Answer", "An incorrect answer", "another incorrect answer", "yet another..."];
var q1 = ["The Questions is 1", "The Correct Answer", "An incorrect answer", "another incorrect answer", "yet another..."];
var q2 = ["The Questions is 2", "The Correct Answer", "An incorrect answer", "another incorrect answer", "yet another..."];
var q3 = ["The Questions is 3", "The Correct Answer", "An incorrect answer", "another incorrect answer", "yet another..."];
var q4 = ["The Questions is 4", "The Correct Answer", "An incorrect answer", "another incorrect answer", "yet another..."];

/////create Answer sheet obj
var answerSheet = {
    answer: [],
    addAnswer: function (value) {
        this.answer.push(value);
    }
};
//////Add qeustions to the qnaCard set
var iter = 0;  //iterator used to cycle through test
var qSet = Object.create(qnaCard); //this holds the test.
qSet.addSet(q0);
qSet.addSet(q1);
qSet.addSet(q2);
qSet.addSet(q3);
qSet.addSet(q4);
var currentQ = qSet.qnaSet[iter];
console.log("qSet len " + qSet.len);
var selectedChoice=0;
var score = 0;
var correct=0;
var incorrect=0
var timer = document.querySelector("#timeID");
timer.textContent = "Time:";
var TestTime = 60;
var okTime = true;
startTime();
setDisplay();

////Function to render question on screen
function setDisplay() {
    currentQ = qSet.qnaSet[iter];
    qlabel.innerHTML = currentQ[0];
    var values = [1, 2, 3, 4]
    var rnd1, rnd2, rnd3, rnd4;
    var display = [];
    for (let i = 0, tempValue = values, len = values.length; i < len; i++) {
        let rnd = Math.floor(Math.random() * tempValue.length);
        console.log(tempValue[rnd]);
        display.push(tempValue[rnd]);
        tempValue.splice(rnd, 1);
    }
    btn1.textContent = currentQ[display[0]];
    btn1.value = currentQ[display[0]];
    an1 = display[0];
    btn2.textContent = currentQ[display[1]];
    btn2.value = currentQ[display[1]];
    an2 = display[1];
    btn3.textContent = currentQ[display[2]];
    btn3.value = currentQ[display[2]];
    an3 = display[2];
    btn4.textContent = currentQ[display[3]];
    btn4.value = currentQ[display[3]];
    an4 = display[3];
};


function checkAnswer(sel) {
    if (sel === 1) {
        chLbl.textContent = "Correct!!!!!";
        correct++;
        setDisplay();
    } else {
        chLbl.textContent = "Wrong!!!!";
        TestTime -= 10;
         incorrect++;
         setDisplay();
    }
};

function calcScore(){
    totalQ = qSet.len;
    console.log("total quesions " + totalQ);
    score = (correct/totalQ) * 100;
    console.log(score);
    scrnS = document.querySelector("#scoreID");
    scrnS.textContent = "Score: " + parseInt(score);
};

function startTime() {
    var timerInterval = setInterval(function () {
        TestTime--;
        timeID.textContent = "Time Left: " + TestTime;

        if (TestTime === 0) {
            clearInterval(timerInterval);
            timeID.textContent = "";
            okTime = false;
            storeScore();
            alert("You ran out of time....Ending test");
            window.location.href = "./scoreCard.html";
        }

    }, 1000);

};

function storeScore(){
    localStorage.setItem("usrScore", score);
    
}