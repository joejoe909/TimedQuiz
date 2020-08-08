// var h1 = document.createElement("h1");
// var h2 = document.createElement("h2");
// var img = document.createElement("img");
// h1.textContent = "Welcome to my page";
// h2.textContent = "This HTML document was created using JavaScript and Chrome Dev Tools.";
// img.setAttribute("src", "./images/image_1.jpg");
// h1.setAttribute("style", "color: Blue; text-align:center;");
// h2.setAttribute("style", "color: Green; text-align:center;");
// document.body.append(h1);
// document.body.append(h2);
// document.body.append(img);


    // < !--correct card-- >
    // <div class="alert alert-primary" role="alert">
    //     qNum The Question....
    // </div>

    // <div class="alert alert-success" role="alert">
    //     This could be used to show the correct answer.
    // </div>

    //correct card
    //var divAlert = document.createElemeent(".alert alert-primary");
    //divAlert.textContent =  "Test";
    //document.body.append(divAlert);

    // var divQuestion = document.createElement('div');
    // divQuestion.className = 'alert alert-primary';
    //var label = document.createElement('label');
    // label.className = 'col control-label';
    // label.innerHTML = 'this can be used to show the correct  answer';
    // divQuestion.appendChild(label);
    // document.body.appendChild(divQuestion);

    //card created when user answer answers correctly.

    class correctAnswr{
        constructor(setQuestion, giveUserAnswr){

            class question {
                constructor(text) {
                    var Question = document.createElement('div');
                    Question.className = 'alert alert-primary';
                    var q = document.createElement('label');
                    q.className = 'col control-label';
                    q.innerHTML = text;
                    Question.appendChild(q);
                    document.body.appendChild(Question);
                }

            }
            
            class corAnswer {
                constructor(text) {
                    var answrCor = document.createElement('div');
                    answrCor.className = 'alert alert-success';
                    var q = document.createElement('label');
                    q.className = 'col control-label';
                    q.innerHTML = text;
                    answrCor.appendChild(q);
                    document.body.appendChild(answrCor);
                }

            }
            
            const correct = new question(setQuestion);
           const cor = new corAnswer(giveUserAnswr);
        }

    }

    //card created when users answers incorrectly.
     class incorrectAnswr{
        constructor(setQuestion, UserAnswr, CorrectAnswr){
            class question {
                constructor(text) {
                    var divQuestion = document.createElement('div');
                    divQuestion.className = 'alert alert-primary';
                    var q = document.createElement('label');
                    q.className = 'col control-label';
                    q.innerHTML = text;
                    divQuestion.appendChild(q);
                    document.body.appendChild(divQuestion);
                }

            }

            class giveUserAnswr {
                constructor(text) {
                    var userAnswr = document.createElement('div');
                    userAnswr.className = 'alert alert-danger';
                    var q = document.createElement('label');
                    q.className = 'col control-label';
                    q.innerHTML = text;
                    userAnswr.appendChild(q);
                    document.body.appendChild(userAnswr);
                }

            }

            class giveCorrectAnswer {
                constructor(text) {
                    var answrCor = document.createElement('div');
                    answrCor.className = 'alert alert-warning';
                    var q = document.createElement('label');
                    q.className = 'col control-label';
                    q.innerHTML = text;
                    answrCor.appendChild(q);
                    document.body.appendChild(answrCor);
                }

            }

            const correct = new question(setQuestion);
            const  userAnswr = new giveUserAnswr(UserAnswr);
            const corAnswer = new giveCorrectAnswer(CorrectAnswr);

        }
    }


   
    const corr = new correctAnswr("We are dispalying the question", "We are displaying the answer the user selected correctly");
    const incor = new incorrectAnswr("We are displaying the question", "We are displaying the users incorrect answer", "We are showing the correct answer");

    
    document.body.appendChild(corr);
    document.body.appendChild(incor);





 