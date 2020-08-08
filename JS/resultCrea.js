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

     class question {
         constructor(text){
            var divQuestion = document.createElement('div'); 
            divQuestion.className = 'alert alert-primary';
            var q = document.createElement('label');
             q.className = 'col control-label';
             q.innerHTML = text;
             divQuestion.appendChild(q);
             document.body.appendChild(divQuestion);  
         }        
      
    }

    class corAnswer {
        constructor(text) {
            var divQuestion = document.createElement('div');
            divQuestion.className = 'alert alert-success';
            var q = document.createElement('label');
            q.className = 'col control-label';
            q.innerHTML = text;
            divQuestion.appendChild(q);
            document.body.appendChild(divQuestion);
        }

    }

    class correctAnswr{
        constructor(){
            const correct = new question("This can be used to show the correct  answer");
            const cor = new corAnswer("this is the correct answer");
        }

    }

    var corr = new correctAnswr;
    document.body.appendChild(corr);