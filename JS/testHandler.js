//This will get the name and start the test via test.html
//we store the name using localStorage.setItem()
var beginTest = document.querySelector("#beginTest");

beginTest.addEventListener("click", function (event) {
    event.preventDefault();
     window.location.href = "./test.html";
});

