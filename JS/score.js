var score = localStorage.getItem("usrScore");
var disScore = document.getElementById("scoreID");       //this displays the screen when the test is complete.
disScore.textContent = ("Your test is complete, your score is: " + parseInt(score));
var beginTest = document.querySelector("#beginTest");        //restarts test
var nameInputBtn = document.querySelector("#EnterName");    //button to submit name.
var nameString = document.querySelector("#nameID");         //form input text
var userList = document.getElementById("userList");         //boot strap alert div
var scrBrd = document.getElementById("scoreboard");

let usrScoreSet = {
    name: '',
    score: '',
};
let tScoreSet = Object.create(usrScoreSet);
let scoreArray = []; //this stores an array of user score sets     

init();
//RenderScoreBoard();

EnterName.addEventListener("click", function (event) { //Enter your name button.
    event.preventDefault();
    nameInputBtn.style.display = "none";
    processName();
});

beginTest.addEventListener("click", function (event) {
    event.preventDefault();
    alert("We will now restart the test, hit okay when ready");
    window.location.href = "./test.html";
});

function RenderScoreBoard(){ //
  
    for(let i =0; i < scoreArray.length; i++)
    {   
        let newSet = scoreArray[i];
        let aNewDiv = document.createElement('div');
        let aNewP = document.createElement('p');
        aNewDiv.setAttribute('id', "usrEntry"  + i);
        aNewDiv.className = "alert alert-success pb-0";
        aNewP.setAttribute('id', 'p'+i);
        aNewP.textContent = "User Name: " + newSet.name + " Score: " + newSet.score;
        aNewDiv.appendChild(aNewP);
        scrBrd.appendChild(aNewDiv); //append to board.    
        storeArray();
    }
}

function processName(){
    aScoreSet = Object.create(usrScoreSet);
    aScoreSet.name = nameString.value; //this stores the name.
    aScoreSet.score = score;  //this stores the score.
    scoreArray.push(aScoreSet);  
    scrBrd.innerHTML = "";
    RenderScoreBoard();
}

function init(){
    //get from stored location.
    var storedNamesScores = JSON.parse(localStorage.getItem("ScoreBoard"));
    if(storedNamesScores !== null)
    {
        scoreArray = [];
        scoreArray = storedNamesScores;
        RenderScoreBoard();
    }    
}

function addToScoreArray(AuserScoreSet) {
    scoreArray.push(AuserScoreSet);
}


function storeArray(){
     let st_ScA = [];
    for (var i = 0; i < scoreArray.length; i++) { 
        localStorage.setItem("ScoreBoard", JSON.stringify(scoreArray));
    }
}

function clearScoreBoard(){
    scrBrd.innerHTML = "";
}