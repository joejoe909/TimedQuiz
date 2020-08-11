var score = localStorage.getItem("usrScore");
var disScore = document.getElementById("scoreID");
disScore.textContent = ("Your test is complete, your score is: " + parseInt(score));
var beginTest = document.querySelector("#beginTest");        //restarts test
var nameInputBtn = document.querySelector("#EnterName");    //button to submit name.
var nameString = document.querySelector("#nameID");         //form input text
var userList = document.getElementById("userList");         //boot strap alert div
var scrBrd = document.getElementById("scoreboard");
var aString;
let st_ScA= [], rt_ScA = [];
let ScA;

let usrScoreSet = {
    name: '',
    score: '',
};

let scrArray = {
    aScoreSet: [],
    len:0,
    addSet: function(aSet){
        this.aScoreSet.push(aSet);
        this.len++;
    }
};

let score0 = Object.create(usrScoreSet);  //this is a user score set name and score values
let scoreArray = Object.create(scrArray); //this stores a user score set                                   
loadScoreboard();
addToNameBoard();

EnterName.addEventListener("click", function (event) { //Enter your name button.
    event.preventDefault();
    aScore = Object.create(usrScoreSet);
    aScore.name = nameString.value;
    aScore.score = parseInt(score);
    addToScoreArray(aScore);
    scrBrd.innerHTML ="";
    addToNameBoard();
});

beginTest.addEventListener("click", function (event) {
    event.preventDefault();
    alert("We will now restart the test, hit okay when ready");
    window.location.href = "./test.html";
});

function addToScoreArray(AuserScoreSet)
{
     scoreArray.addSet(AuserScoreSet);
     for(var i = 0; i < scoreArray.len; i++)
     {
         st_ScA[i] = JSON.stringify(scoreArray.aScoreSet[i]);
         
     }
    
    localStorage.setItem("ScoreBoard", st_ScA);
}

function loadScoreboard(){
    
    ScA = JSON.parse(localStorage.getItem("Scoreboard"));

}

function addToNameBoard(){
  
    for(let i =0; i < scoreArray.len; i++)
    {   
        
        let newSet = scoreArray.aScoreSet[i];
        let aNewDiv = document.createElement('div');
        let aNewP = document.createElement('p');
        aNewDiv.setAttribute('id', "usrEntry"  + i);
        aNewDiv.className = "alert alert-success pb-0";
        aNewP.setAttribute('id', 'p'+i);
        aNewP.textContent = "User Name: " + newSet.name + " Score: " + newSet.score;
        aNewDiv.appendChild(aNewP);
        scrBrd.appendChild(aNewDiv); //append to board.
    }
}

// function gengrid() {
//     var i = 0;
//     var num_stud = 8;
//     var newdiv;
//     var divIdName;
//     for (i = 1; i <= num_stud; i++) {
//         newdiv = document.createElement('div');
//         divIdName = '50' + i;
//         newdiv.setAttribute('id', divIdName);
//         newdiv.innerHTML = '<div id="box' + i + '">Testing 123</div>';
//         document.body.appendChild(newdiv);
//     }
// }
// window.onload = function () {
//     gengrid();
// }


// function addToNameBoard(aString, score){
//     scoreBoard = Object.create(aString, score);
//     scoreBoardArray.push(scoreBoard);
// }



// let userScoreSet = {
//     name: '',
//     score: '',
//     divID: 0,

//     createDiv() {
//         aNewDiv = document.createElement('div');
//         aNewDiv.clasName = 'alert alert-danger';
//         aNewDiv.textContent = this.name, this.score;
//         aNewDiv.setAttributes("id", parseInt(this.divID));
//         return aNewDiv;
//     }
// };


// scoreBoard = Object.create(userScoreSet);
// scoreBoard.name = "Joseph";
// scoreBoard.score = "80";

// scoreBoardArray = [scoreBoard];


