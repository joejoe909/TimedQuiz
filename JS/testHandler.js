//This will get the name and start the test via test.html
//we store the name using localStorage.setItem()
var beginTest = document.querySelector("#beginTest");
var nameInput = document.querySelector("#nameID");


beginTest.addEventListener("click", function (event) {
    event.preventDefault();
    alert("welcome " + nameInput.value + " we will now begin test, hit okay when ready");
    //console.log(event);
    localStorage.setItem("Name", nameInput.value);
    window.location.href = "./test.html";
});

